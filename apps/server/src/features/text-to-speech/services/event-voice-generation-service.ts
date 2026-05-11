import { PrismaClient } from '@prisma/client';
import { access, mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { OpenRouterTtsClient } from '../providers/openrouter-tts-client';

interface EventVoiceGenerationInput {
  eventId: string;
  model: string;
  voice: string;
}

interface EventVoiceGenerationServiceConfig {
  openRouterTtsClient: OpenRouterTtsClient;
  prisma: PrismaClient;
}

interface DialogueNodeRow {
  id: string;
  speaker: string | null;
  text: string;
  voice_asset_key: string | null;
  next_dialogue_id: string | null;
}

interface DialogueChoiceRow {
  dialogue_node_id: string;
  next_dialogue_id: string;
  sort_order: number;
}

interface EventVoiceGenerationResult {
  eventId: string;
  dialogueStartId: string;
  model: string;
  voice: string;
  reachableNodeCount: number;
  generated: GeneratedVoiceSummary[];
  skipped: SkippedVoiceSummary[];
}

interface GeneratedVoiceSummary {
  nodeId: string;
  speaker: string;
  storageKey: string;
  bytes: number;
  generationId?: string;
}

interface SkippedVoiceSummary {
  nodeId: string;
  reason: 'narration' | 'existing_voice_asset';
  speaker?: string;
  storageKey?: string;
}

export class EventVoiceGenerationError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'EventVoiceGenerationError';
  }
}

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../../../../..',
);
const databaseAssetsRoot = path.join(repoRoot, 'apps/gameplay/public/assets/database');
const safeIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export class EventVoiceGenerationService {
  constructor(private readonly config: EventVoiceGenerationServiceConfig) {}

  async generateEventVoices(
    input: EventVoiceGenerationInput,
  ): Promise<EventVoiceGenerationResult> {
    const event = await this.config.prisma.event.findUnique({
      where: { id: input.eventId },
    });

    if (!event) {
      throw new EventVoiceGenerationError('Event not found', 404, {
        eventId: input.eventId,
      });
    }

    if (event.type !== 'character_conversation') {
      throw new EventVoiceGenerationError('Event is not a character conversation', 400, {
        eventId: event.id,
        type: event.type,
      });
    }

    if (!event.dialogue_id) {
      throw new EventVoiceGenerationError('Event is missing dialogue_id', 400, {
        eventId: event.id,
      });
    }

    const [dialogueNodes, dialogueChoices, characters] = await Promise.all([
      this.config.prisma.$queryRaw<DialogueNodeRow[]>`
        SELECT id, speaker, text, voice_asset_key, next_dialogue_id
        FROM DialogueNode
      `,
      this.config.prisma.$queryRaw<DialogueChoiceRow[]>`
        SELECT dialogue_node_id, next_dialogue_id, sort_order
        FROM DialogueChoice
        ORDER BY dialogue_node_id ASC, sort_order ASC
      `,
      this.config.prisma.character.findMany({
        select: { id: true },
      }),
    ]);

    const characterIds = new Set(characters.map((character) => character.id));
    const nodesById = new Map(dialogueNodes.map((node) => [node.id, node]));
    const choicesByNodeId = groupChoicesByNodeId(dialogueChoices);
    const reachableNodes = collectReachableNodes(event.dialogue_id, nodesById, choicesByNodeId);
    const generated: GeneratedVoiceSummary[] = [];
    const skipped: SkippedVoiceSummary[] = [];

    for (const node of reachableNodes) {
      if (!node.speaker) {
        skipped.push({
          nodeId: node.id,
          reason: 'narration',
        });
        continue;
      }

      assertValidCharacterSpeaker(node, characterIds);

      const storageKey = buildVoiceStorageKey(event.dialogue_id, node.id);

      if (node.voice_asset_key) {
        const existingStorageKey = validateVoiceStorageKey(node.voice_asset_key, node.id);
        if (existingStorageKey !== storageKey) {
          throw new EventVoiceGenerationError('Dialogue node voice_asset_key does not match the event dialogue voice path', 500, {
            nodeId: node.id,
            expectedStorageKey: storageKey,
            actualStorageKey: existingStorageKey,
          });
        }

        await assertLocalVoiceAssetExists(existingStorageKey, node.id);
        skipped.push({
          nodeId: node.id,
          reason: 'existing_voice_asset',
          speaker: node.speaker,
          storageKey: existingStorageKey,
        });
        continue;
      }

      const text = node.text.trim();
      if (text.length === 0) {
        throw new EventVoiceGenerationError('Dialogue node text cannot be empty', 500, {
          nodeId: node.id,
        });
      }

      const outputPath = resolveDatabaseAssetPath(storageKey);
      await mkdir(path.dirname(outputPath), { recursive: true });
      await assertFileDoesNotExist(outputPath, node.id);

      const result = await this.config.openRouterTtsClient.generateSpeechWav({
        input: text,
        model: input.model,
        voice: input.voice,
      });

      await writeFile(outputPath, result.audio, { flag: 'wx' });

      await this.config.prisma.dialogueNode.update({
        where: { id: node.id },
        data: { voice_asset_key: storageKey },
      });

      generated.push({
        nodeId: node.id,
        speaker: node.speaker,
        storageKey,
        bytes: result.audio.length,
        ...(result.generationId ? { generationId: result.generationId } : {}),
      });
    }

    return {
      eventId: event.id,
      dialogueStartId: event.dialogue_id,
      model: input.model,
      voice: input.voice,
      reachableNodeCount: reachableNodes.length,
      generated,
      skipped,
    };
  }
}

function groupChoicesByNodeId(
  choices: DialogueChoiceRow[],
): Map<string, DialogueChoiceRow[]> {
  const choicesByNodeId = new Map<string, DialogueChoiceRow[]>();

  for (const choice of choices) {
    const nodeChoices = choicesByNodeId.get(choice.dialogue_node_id) || [];
    nodeChoices.push(choice);
    choicesByNodeId.set(choice.dialogue_node_id, nodeChoices);
  }

  return choicesByNodeId;
}

function collectReachableNodes(
  startNodeId: string,
  nodesById: Map<string, DialogueNodeRow>,
  choicesByNodeId: Map<string, DialogueChoiceRow[]>,
): DialogueNodeRow[] {
  const queue = [startNodeId];
  const visited = new Set<string>();
  const reachableNodes: DialogueNodeRow[] = [];

  for (let index = 0; index < queue.length; index += 1) {
    const nodeId = queue[index];
    if (visited.has(nodeId)) continue;
    visited.add(nodeId);

    const node = nodesById.get(nodeId);
    if (!node) {
      throw new EventVoiceGenerationError('Dialogue graph references a missing node', 500, {
        nodeId,
      });
    }

    reachableNodes.push(node);

    if (node.next_dialogue_id) {
      queue.push(node.next_dialogue_id);
    }

    for (const choice of choicesByNodeId.get(node.id) || []) {
      queue.push(choice.next_dialogue_id);
    }
  }

  return reachableNodes;
}

function assertValidCharacterSpeaker(
  node: DialogueNodeRow,
  characterIds: Set<string>,
): asserts node is DialogueNodeRow & { speaker: string } {
  if (!node.speaker) {
    throw new EventVoiceGenerationError('Dialogue node speaker is required', 500, {
      nodeId: node.id,
    });
  }

  if (!safeIdPattern.test(node.speaker)) {
    throw new EventVoiceGenerationError('Dialogue node speaker has an invalid id format', 500, {
      nodeId: node.id,
      speaker: node.speaker,
    });
  }

  if (!characterIds.has(node.speaker)) {
    throw new EventVoiceGenerationError('Dialogue node speaker character not found', 500, {
      nodeId: node.id,
      speaker: node.speaker,
    });
  }
}

function buildVoiceStorageKey(dialogueStartId: string, nodeId: string): string {
  if (!safeIdPattern.test(dialogueStartId)) {
    throw new EventVoiceGenerationError('Dialogue start id is not safe for a voice folder name', 500, {
      dialogueStartId,
    });
  }

  if (!safeIdPattern.test(nodeId)) {
    throw new EventVoiceGenerationError('Dialogue node id is not safe for a voice filename', 500, {
      nodeId,
    });
  }

  return `dialogue/${dialogueStartId}/voices/${nodeId}.wav`;
}

function validateVoiceStorageKey(storageKey: string, nodeId: string): string {
  const trimmedKey = storageKey.trim();

  if (trimmedKey.length === 0) {
    throw new EventVoiceGenerationError('Dialogue node voice_asset_key cannot be empty', 500, {
      nodeId,
    });
  }

  if (trimmedKey.startsWith('/') || trimmedKey.includes('..')) {
    throw new EventVoiceGenerationError('Dialogue node voice_asset_key is not a storage key', 500, {
      nodeId,
      storageKey,
    });
  }

  if (!trimmedKey.endsWith('.wav')) {
    throw new EventVoiceGenerationError('Dialogue node voice_asset_key must reference a WAV file', 500, {
      nodeId,
      storageKey,
    });
  }

  resolveDatabaseAssetPath(trimmedKey);
  return trimmedKey;
}

async function assertLocalVoiceAssetExists(storageKey: string, nodeId: string): Promise<void> {
  const assetPath = resolveDatabaseAssetPath(storageKey);

  try {
    const assetStats = await stat(assetPath);
    if (!assetStats.isFile()) {
      throw new EventVoiceGenerationError('Dialogue voice asset path is not a file', 500, {
        nodeId,
        storageKey,
        assetPath,
      });
    }
  } catch (error) {
    if (error instanceof EventVoiceGenerationError) throw error;
    throw new EventVoiceGenerationError('Dialogue voice asset file is missing', 500, {
      nodeId,
      storageKey,
      assetPath,
    });
  }
}

async function assertFileDoesNotExist(outputPath: string, nodeId: string): Promise<void> {
  try {
    await access(outputPath);
  } catch {
    return;
  }

  throw new EventVoiceGenerationError('Voice output file already exists', 409, {
    nodeId,
    outputPath,
  });
}

function resolveDatabaseAssetPath(storageKey: string): string {
  const resolvedPath = path.resolve(databaseAssetsRoot, ...storageKey.split('/'));
  const normalizedRoot = path.resolve(databaseAssetsRoot).toLowerCase();
  const normalizedPath = resolvedPath.toLowerCase();

  if (normalizedPath !== normalizedRoot && !normalizedPath.startsWith(`${normalizedRoot}${path.sep}`)) {
    throw new EventVoiceGenerationError('Asset path resolved outside database asset root', 500, {
      storageKey,
      resolvedPath,
    });
  }

  return resolvedPath;
}
