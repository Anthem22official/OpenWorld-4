import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import {
  ConditionSchema,
  Event,
  EventSchema,
  PrioritySchema,
} from '../../types/event';

type MapKind = 'legacy-point' | 'building-shape';

interface BootstrapLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  visited: boolean;
  description: string;
  backgroundAssetKey?: string;
  areaId: string;
  areaMapId: string;
  buildingId: string;
  mapKind: MapKind;
}

interface BootstrapCharacter {
  id: string;
  name: string;
  activated: boolean;
  appearance_description: string;
  personality: string[];
}

interface BootstrapCharacterState {
  character_id: string;
  location_id: string;
  activity: string;
  game_time_detail: string;
}

interface BootstrapScheduleBlock {
  id: string;
  character_id: string;
  location_id: string;
  activity: string;
  start_time: number;
  duration: number;
}

interface BootstrapMemory {
  id: string;
  character_id: string;
  summary: string;
  game_date: string;
}

interface BootstrapChoice {
  id: string;
  text: string;
  nextDialogueId: string;
}

interface BootstrapDialogueScene {
  mode: 'dialogue' | 'cg';
  backgroundAssetKey?: string;
  cgAssetKey?: string;
  characterIds: string[];
}

interface BootstrapDialogueNode {
  id: string;
  speaker?: string;
  text: string;
  scene: BootstrapDialogueScene;
  voiceAssetKey?: string;
  nextDialogueId?: string;
  choices?: BootstrapChoice[];
}

interface DialogueNodeWithChoices {
  id: string;
  speaker: string | null;
  text: string;
  scene: string;
  voice_asset_key: string | null;
  next_dialogue_id: string | null;
  choices: DialogueChoiceRow[];
}

interface DialogueNodeRow {
  id: string;
  speaker: string | null;
  text: string;
  scene: string;
  voice_asset_key: string | null;
  next_dialogue_id: string | null;
}

interface DialogueChoiceRow {
  id: string;
  dialogue_node_id: string;
  text: string;
  next_dialogue_id: string;
  sort_order: number;
}

interface RuntimeStateRow {
  id: string;
  current_location_id: string;
  current_dialogue_id: string;
  game_time_detail: string;
}

interface BootstrapGameState {
  currentDialogueId: string;
  currentLocation: string;
  gameTimeDetail: string;
  mapState: {
    locations: BootstrapLocation[];
    currentLocationId: string;
    visitedLocationIds: string[];
  };
}

export interface GameBootstrapResponse {
  gameState: BootstrapGameState;
  dialogueNodes: Record<string, BootstrapDialogueNode>;
  characters: BootstrapCharacter[];
  characterStates: BootstrapCharacterState[];
  scheduleBlocks: BootstrapScheduleBlock[];
  memories: BootstrapMemory[];
  events: Event[];
}

const personalitySchema = z.array(z.string().min(1));
const mapKindSchema = z.enum(['legacy-point', 'building-shape']);
const dialogueSceneSchema = z.discriminatedUnion('mode', [
  z.object({
    mode: z.literal('dialogue'),
    backgroundAssetKey: z.string().min(1),
    cgAssetKey: z.string().optional(),
    characterIds: z.array(z.string().min(1)).max(4),
  }).strict(),
  z.object({
    mode: z.literal('cg'),
    backgroundAssetKey: z.string().optional(),
    cgAssetKey: z.string().min(1),
    characterIds: z.array(z.string().min(1)).max(1),
  }).strict(),
]);

export async function buildGameBootstrap(
  prisma: PrismaClient,
): Promise<GameBootstrapResponse> {
  const [
    characters,
    characterStates,
    locations,
    scheduleBlocks,
    memories,
    events,
    dialogueNodeRows,
    dialogueChoiceRows,
    runtimeState,
  ] = await Promise.all([
    prisma.character.findMany({ orderBy: { id: 'asc' } }),
    prisma.characterState.findMany({ orderBy: { id: 'asc' } }),
    prisma.location.findMany({ orderBy: { id: 'asc' } }),
    prisma.scheduleBlock.findMany({ orderBy: { start_time: 'asc' } }),
    prisma.memory.findMany({ orderBy: { id: 'asc' } }),
    prisma.event.findMany({ orderBy: { id: 'asc' } }),
    prisma.$queryRaw<DialogueNodeRow[]>`
      SELECT id, speaker, text, scene, voice_asset_key, next_dialogue_id
      FROM DialogueNode
      ORDER BY id ASC
    `,
    prisma.$queryRaw<DialogueChoiceRow[]>`
      SELECT id, dialogue_node_id, text, next_dialogue_id, sort_order
      FROM DialogueChoice
      ORDER BY dialogue_node_id ASC, sort_order ASC
    `,
    prisma.$queryRaw<RuntimeStateRow[]>`
      SELECT id, current_location_id, current_dialogue_id, game_time_detail
      FROM GameRuntimeState
      WHERE id = 'default'
    `,
  ]);

  const dialogueNodes = attachDialogueChoices(dialogueNodeRows, dialogueChoiceRows);

  const mappedCharacters = characters.map((character) => ({
    id: character.id,
    name: character.name,
    activated: character.activated,
    appearance_description: character.appearance_description,
    personality: parseJson(
      personalitySchema,
      character.personality,
      `Character ${character.id} personality`,
    ),
  }));

  const defaultRuntimeState = runtimeState[0];
  if (!defaultRuntimeState) {
    throw new Error('GameRuntimeState default row not found');
  }

  if (!dialogueNodes.some((node) => node.id === defaultRuntimeState.current_dialogue_id)) {
    throw new Error(`Runtime dialogue node not found: ${defaultRuntimeState.current_dialogue_id}`);
  }

  const mappedLocations = locations.map((location) => ({
    id: location.id,
    name: location.name,
    x: location.x,
    y: location.y,
    visited: location.id === defaultRuntimeState.current_location_id,
    description: location.appearance_description,
    ...(location.background_asset_key !== null
      ? { backgroundAssetKey: validateLocationBackgroundAssetKey(location.background_asset_key, location.id) }
      : {}),
    areaId: location.area_id,
    areaMapId: location.area_map_id,
    buildingId: location.building_id,
    mapKind: mapKindSchema.parse(location.map_kind),
  }));

  const currentLocation = mappedLocations.find(
    (location) => location.id === defaultRuntimeState.current_location_id,
  );
  if (!currentLocation) {
    throw new Error(`Current location not found: ${defaultRuntimeState.current_location_id}`);
  }

  const mappedCharacterStates = characterStates.map((state) => ({
    character_id: state.character_id,
    location_id: state.location_id,
    activity: state.activity,
    game_time_detail: state.game_time_detail,
  }));

  const mappedScheduleBlocks = scheduleBlocks.map((block) => ({
    id: block.id,
    character_id: block.character_id,
    location_id: block.location_id,
    activity: block.activity,
    start_time: block.start_time,
    duration: block.duration,
  }));

  const mappedMemories = memories.map((memory) => ({
    id: memory.id,
    character_id: memory.character_id,
    summary: memory.summary,
    game_date: memory.game_date,
  }));

  const mappedDialogueNodes = mapDialogueNodes(
    dialogueNodes,
    new Set(mappedCharacters.map((character) => character.id)),
  );
  const mappedEvents = events.map((event) => mapEvent(event));
  assertEventDialogueReferences(mappedEvents, mappedDialogueNodes);

  return {
    gameState: {
      currentDialogueId: defaultRuntimeState.current_dialogue_id,
      currentLocation: currentLocation.name,
      gameTimeDetail: defaultRuntimeState.game_time_detail,
      mapState: {
        locations: mappedLocations,
        currentLocationId: currentLocation.id,
        visitedLocationIds: [currentLocation.id],
      },
    },
    dialogueNodes: mappedDialogueNodes,
    characters: mappedCharacters,
    characterStates: mappedCharacterStates,
    scheduleBlocks: mappedScheduleBlocks,
    memories: mappedMemories,
    events: mappedEvents,
  };
}

function attachDialogueChoices(
  nodes: DialogueNodeRow[],
  choices: DialogueChoiceRow[],
): DialogueNodeWithChoices[] {
  const choicesByNodeId = new Map<string, DialogueChoiceRow[]>();

  for (const choice of choices) {
    const nodeChoices = choicesByNodeId.get(choice.dialogue_node_id) || [];
    nodeChoices.push(choice);
    choicesByNodeId.set(choice.dialogue_node_id, nodeChoices);
  }

  return nodes.map((node) => ({
    ...node,
    choices: choicesByNodeId.get(node.id) || [],
  }));
}

function mapDialogueNodes(
  nodes: DialogueNodeWithChoices[],
  characterIds: Set<string>,
): Record<string, BootstrapDialogueNode> {
  const mappedNodes: Record<string, BootstrapDialogueNode> = {};

  for (const node of nodes) {
    const choices = node.choices.map((choice) => ({
      id: choice.id,
      text: choice.text,
      nextDialogueId: choice.next_dialogue_id,
    }));

    if (node.next_dialogue_id && choices.length > 0) {
      throw new Error(`Dialogue node ${node.id} cannot have both next_dialogue_id and choices`);
    }

    if (choices.length === 1) {
      throw new Error(`Dialogue node ${node.id} cannot have exactly one choice`);
    }

    if (node.speaker && !characterIds.has(node.speaker)) {
      throw new Error(`Dialogue node ${node.id} speaker character not found: ${node.speaker}`);
    }

    const scene = mapDialogueScene(node, characterIds);

    mappedNodes[node.id] = {
      id: node.id,
      ...(node.speaker ? { speaker: node.speaker } : {}),
      text: node.text,
      scene,
      ...(node.voice_asset_key ? { voiceAssetKey: validateVoiceAssetKey(node.voice_asset_key, node.id) } : {}),
      ...(node.next_dialogue_id ? { nextDialogueId: node.next_dialogue_id } : {}),
      ...(choices.length > 0 ? { choices } : {}),
    };
  }

  return mappedNodes;
}

function mapDialogueScene(
  node: DialogueNodeWithChoices,
  characterIds: Set<string>,
): BootstrapDialogueScene {
  const scene = parseJson(
    dialogueSceneSchema,
    node.scene,
    `Dialogue node ${node.id} scene`,
  );

  for (const characterId of scene.characterIds) {
    if (!characterIds.has(characterId)) {
      throw new Error(`Dialogue node ${node.id} scene character not found: ${characterId}`);
    }
  }

  if (scene.mode === 'dialogue') {
    validateImageAssetKey(scene.backgroundAssetKey, `Dialogue node ${node.id} scene.backgroundAssetKey`);
    if (node.speaker && !scene.characterIds.includes(node.speaker)) {
      throw new Error(`Dialogue node ${node.id} speaker must be included in scene.characterIds`);
    }
  }

  if (scene.mode === 'cg') {
    validateImageAssetKey(scene.cgAssetKey, `Dialogue node ${node.id} scene.cgAssetKey`);
    if (node.speaker && scene.characterIds.length > 0 && !scene.characterIds.includes(node.speaker)) {
      throw new Error(`Dialogue node ${node.id} speaker must be included in scene.characterIds`);
    }
  }

  return scene;
}

function validateVoiceAssetKey(voiceAssetKey: string, dialogueNodeId: string): string {
  const trimmedKey = voiceAssetKey.trim();
  if (trimmedKey.length === 0) {
    throw new Error(`Dialogue node ${dialogueNodeId} voice_asset_key cannot be empty`);
  }

  if (trimmedKey.startsWith('/')) {
    throw new Error(`Dialogue node ${dialogueNodeId} voice_asset_key must be a storage key, not a public URL`);
  }

  if (trimmedKey.includes('..')) {
    throw new Error(`Dialogue node ${dialogueNodeId} voice_asset_key cannot contain parent directory segments`);
  }

  if (!trimmedKey.endsWith('.wav')) {
    throw new Error(`Dialogue node ${dialogueNodeId} voice_asset_key must reference a .wav file`);
  }

  return trimmedKey;
}

function validateLocationBackgroundAssetKey(backgroundAssetKey: string, locationId: string): string {
  return validateImageAssetKey(backgroundAssetKey, `Location ${locationId} background_asset_key`);
}

function validateImageAssetKey(assetKey: string, label: string): string {
  const trimmedKey = assetKey.trim();
  if (trimmedKey.length === 0) {
    throw new Error(`${label} cannot be empty`);
  }

  if (trimmedKey.startsWith('/')) {
    throw new Error(`${label} must be a storage key, not a public URL`);
  }

  if (trimmedKey.includes('..')) {
    throw new Error(`${label} cannot contain parent directory segments`);
  }

  if (!trimmedKey.endsWith('.jpg') && !trimmedKey.endsWith('.jpeg') && !trimmedKey.endsWith('.png')) {
    throw new Error(`${label} must reference an image file`);
  }

  return trimmedKey;
}

function mapEvent(event: {
  id: string;
  description: string;
  type: string;
  priority: string;
  conditions: string;
  dialogue_id: string | null;
}): Event {
  const mappedEvent = {
    id: event.id,
    description: event.description,
    type: event.type,
    priority: parseJson(PrioritySchema, event.priority, `Event ${event.id} priority`),
    conditions: parseJson(
      z.array(ConditionSchema),
      event.conditions,
      `Event ${event.id} conditions`,
    ),
    ...(event.dialogue_id ? { dialogue_id: event.dialogue_id } : {}),
  };

  return EventSchema.parse(mappedEvent);
}

function assertEventDialogueReferences(
  events: Event[],
  dialogueNodes: Record<string, BootstrapDialogueNode>,
): void {
  for (const event of events) {
    if (event.type !== 'character_conversation') continue;

    if (!event.dialogue_id) {
      throw new Error(`Event ${event.id} is missing required dialogue_id`);
    }

    if (!dialogueNodes[event.dialogue_id]) {
      throw new Error(`Event ${event.id} references missing dialogue node: ${event.dialogue_id}`);
    }
  }
}

function parseJson<T>(schema: z.ZodType<T>, value: string, label: string): T {
  let parsed: unknown;

  try {
    parsed = JSON.parse(value);
  } catch (error) {
    throw new Error(`${label} is invalid JSON: ${error instanceof Error ? error.message : 'Unknown parse error'}`);
  }

  return schema.parse(parsed);
}
