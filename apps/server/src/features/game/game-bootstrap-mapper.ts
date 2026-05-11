import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import {
  Condition,
  ConditionSchema,
  Event,
  EventSchema,
  Priority,
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

interface BootstrapDialogueNode {
  id: string;
  speaker?: string;
  text: string;
  voiceAssetKey?: string;
  nextDialogueId?: string;
  choices?: BootstrapChoice[];
}

interface DialogueNodeWithChoices {
  id: string;
  speaker: string | null;
  text: string;
  voice_asset_key: string | null;
  next_dialogue_id: string | null;
  choices: {
    id: string;
    text: string;
    next_dialogue_id: string;
    sort_order: number;
  }[];
}

interface BootstrapGameState {
  currentDialogueId: string;
  currentLocation: string;
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
    dialogueNodes,
  ] = await Promise.all([
    prisma.character.findMany({ orderBy: { id: 'asc' } }),
    prisma.characterState.findMany({ orderBy: { id: 'asc' } }),
    prisma.location.findMany({ orderBy: { id: 'asc' } }),
    prisma.scheduleBlock.findMany({ orderBy: { start_time: 'asc' } }),
    prisma.memory.findMany({ orderBy: { id: 'asc' } }),
    prisma.event.findMany({ orderBy: { id: 'asc' } }),
    prisma.dialogueNode.findMany({
      include: {
        choices: {
          orderBy: { sort_order: 'asc' },
        },
      },
      orderBy: { id: 'asc' },
    }),
  ]);

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

  const activatedCharacters = mappedCharacters.filter((character) => character.activated);
  if (activatedCharacters.length !== 1) {
    throw new Error(`Expected exactly one activated character, found ${activatedCharacters.length}`);
  }

  const activeCharacter = activatedCharacters[0];
  const activeCharacterState = characterStates.find(
    (state) => state.character_id === activeCharacter.id,
  );
  if (!activeCharacterState) {
    throw new Error(`Character state not found for activated character: ${activeCharacter.id}`);
  }

  const mappedLocations = locations.map((location) => ({
    id: location.id,
    name: location.name,
    x: location.x,
    y: location.y,
    visited: location.id === activeCharacterState.location_id,
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
    (location) => location.id === activeCharacterState.location_id,
  );
  if (!currentLocation) {
    throw new Error(`Current location not found: ${activeCharacterState.location_id}`);
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

  const mappedDialogueNodes = mapDialogueNodes(dialogueNodes);
  const mappedEvents = events.map((event) => mapEvent(event));
  const initialDialogueId = findInitialDialogueId({
    events: mappedEvents,
    dialogueNodes: mappedDialogueNodes,
    currentLocationId: currentLocation.id,
    characterStates: mappedCharacterStates,
    gameTimeDetail: activeCharacterState.game_time_detail,
  });

  return {
    gameState: {
      currentDialogueId: initialDialogueId,
      currentLocation: currentLocation.name,
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

function mapDialogueNodes(nodes: DialogueNodeWithChoices[]): Record<string, BootstrapDialogueNode> {
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

    mappedNodes[node.id] = {
      id: node.id,
      ...(node.speaker ? { speaker: node.speaker } : {}),
      text: node.text,
      ...(node.voice_asset_key ? { voiceAssetKey: validateVoiceAssetKey(node.voice_asset_key, node.id) } : {}),
      ...(node.next_dialogue_id ? { nextDialogueId: node.next_dialogue_id } : {}),
      ...(choices.length > 0 ? { choices } : {}),
    };
  }

  return mappedNodes;
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
  const trimmedKey = backgroundAssetKey.trim();
  if (trimmedKey.length === 0) {
    throw new Error(`Location ${locationId} background_asset_key cannot be empty`);
  }

  if (trimmedKey.startsWith('/')) {
    throw new Error(`Location ${locationId} background_asset_key must be a storage key, not a public URL`);
  }

  if (trimmedKey.includes('..')) {
    throw new Error(`Location ${locationId} background_asset_key cannot contain parent directory segments`);
  }

  if (!trimmedKey.endsWith('.jpg') && !trimmedKey.endsWith('.jpeg') && !trimmedKey.endsWith('.png')) {
    throw new Error(`Location ${locationId} background_asset_key must reference an image file`);
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

function findInitialDialogueId({
  events,
  dialogueNodes,
  currentLocationId,
  characterStates,
  gameTimeDetail,
}: {
  events: Event[];
  dialogueNodes: Record<string, BootstrapDialogueNode>;
  currentLocationId: string;
  characterStates: BootstrapCharacterState[];
  gameTimeDetail: string;
}): string {
  const matchingEvents = events
    .filter((event) => event.type === 'character_conversation')
    .filter((event) => {
      if (!event.dialogue_id) {
        throw new Error(`Event ${event.id} is missing required dialogue_id`);
      }

      if (!dialogueNodes[event.dialogue_id]) {
        throw new Error(`Event ${event.id} references missing dialogue node: ${event.dialogue_id}`);
      }

      return event.conditions.every((condition) =>
        conditionPasses(condition, currentLocationId, characterStates, gameTimeDetail),
      );
    })
    .sort(compareEventPriority);

  const initialEvent = matchingEvents[0];
  if (!initialEvent?.dialogue_id) {
    throw new Error('No matching character_conversation event found for bootstrap state');
  }

  return initialEvent.dialogue_id;
}

function conditionPasses(
  condition: Condition,
  currentLocationId: string,
  characterStates: BootstrapCharacterState[],
  gameTimeDetail: string,
): boolean {
  if (condition.type === 'location') {
    return condition.location_id === currentLocationId;
  }

  if (condition.type === 'characterLocation') {
    return characterStates.some(
      (state) =>
        state.character_id === condition.character_id &&
        state.location_id === condition.location_id,
    );
  }

  const currentMinutes = parseGameTimeMinutes(gameTimeDetail);
  const endTime = condition.start_time + condition.duration;
  if (endTime > 1440) {
    throw new Error(`timeBlock condition exceeds one day: ${condition.start_time}+${condition.duration}`);
  }

  return currentMinutes >= condition.start_time && currentMinutes < endTime;
}

function compareEventPriority(left: Event, right: Event): number {
  const leftRank = priorityRank(left.priority);
  const rightRank = priorityRank(right.priority);

  if (leftRank !== rightRank) return leftRank - rightRank;
  return left.priority.index - right.priority.index;
}

function priorityRank(priority: Priority): number {
  return priority.value === 'mandatory' ? 0 : 1;
}

function parseGameTimeMinutes(gameTimeDetail: string): number {
  const match = gameTimeDetail.match(/\b(\d{2}):(\d{2})\b/);
  if (!match) throw new Error(`Invalid game_time_detail: ${gameTimeDetail}`);

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    throw new Error(`Invalid game_time_detail: ${gameTimeDetail}`);
  }

  return hours * 60 + minutes;
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
