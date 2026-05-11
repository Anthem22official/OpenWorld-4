import type {
  Character,
  CharacterState,
  DialogueNode,
  GameState,
  Memory,
  ScheduleBlock,
} from '../types/game'

export interface BootstrapEvent {
  id: string
  description: string
  type: 'character_conversation' | 'player_activity'
  priority: {
    value: 'mandatory' | 'optional'
    index: number
  }
  conditions: Array<
    | { type: 'location'; location_id: string }
    | { type: 'timeBlock'; start_time: number; duration: number }
    | { type: 'characterLocation'; character_id: string; location_id: string }
  >
  dialogue_id?: string
}

export interface GameBootstrapData {
  gameState: GameState
  dialogueNodes: Record<string, DialogueNode>
  characters: Character[]
  characterStates: CharacterState[]
  scheduleBlocks: ScheduleBlock[]
  memories: Memory[]
  events: BootstrapEvent[]
}

export async function fetchGameBootstrap(): Promise<GameBootstrapData> {
  const response = await fetch('/api/game/bootstrap')

  if (!response.ok) {
    const responseBody = await response.text()
    throw new Error(
      `Game bootstrap failed: ${response.status} ${response.statusText}${responseBody ? ` - ${responseBody}` : ''}`,
    )
  }

  const data: unknown = await response.json()
  assertGameBootstrapData(data)
  return data
}

function assertGameBootstrapData(data: unknown): asserts data is GameBootstrapData {
  if (!isRecord(data)) throw new Error('Game bootstrap response must be an object')
  if (!isRecord(data.gameState)) throw new Error('Game bootstrap response missing gameState')
  if (!isRecord(data.dialogueNodes)) throw new Error('Game bootstrap response missing dialogueNodes')
  if (!Array.isArray(data.characters)) throw new Error('Game bootstrap response missing characters')
  if (!Array.isArray(data.characterStates)) throw new Error('Game bootstrap response missing characterStates')
  if (!Array.isArray(data.scheduleBlocks)) throw new Error('Game bootstrap response missing scheduleBlocks')
  if (!Array.isArray(data.memories)) throw new Error('Game bootstrap response missing memories')
  if (!Array.isArray(data.events)) throw new Error('Game bootstrap response missing events')

  if (typeof data.gameState.currentDialogueId !== 'string') {
    throw new Error('gameState.currentDialogueId must be a string')
  }

  if (!data.dialogueNodes[data.gameState.currentDialogueId]) {
    throw new Error(`Bootstrap dialogue node not found: ${data.gameState.currentDialogueId}`)
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
