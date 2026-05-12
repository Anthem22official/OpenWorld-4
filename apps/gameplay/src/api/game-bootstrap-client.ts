import type {
  Character,
  CharacterState,
  DialogueNode,
  DialogueScene,
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
  const response = await fetch(resolveApiUrl('/api/game/bootstrap'))

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

function resolveApiUrl(path: string): string {
  const apiBaseUrl = getViteEnvValue('VITE_API_BASE_URL')
  if (!apiBaseUrl) return path

  return `${apiBaseUrl.replace(/\/+$/, '')}${path}`
}

function getViteEnvValue(name: string): string | undefined {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
  const value = env?.[name]?.trim()
  return value && value.length > 0 ? value : undefined
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

  if (typeof data.gameState.gameTimeDetail !== 'string') {
    throw new Error('gameState.gameTimeDetail must be a string')
  }

  if (!data.dialogueNodes[data.gameState.currentDialogueId]) {
    throw new Error(`Bootstrap dialogue node not found: ${data.gameState.currentDialogueId}`)
  }

  const characterIds = getBootstrapCharacterIds(data.characters)

  for (const [dialogueId, dialogueNode] of Object.entries(data.dialogueNodes)) {
    assertDialogueNode(dialogueId, dialogueNode, characterIds)
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function assertDialogueNode(
  dialogueId: string,
  value: unknown,
  characterIds: Set<string>,
): asserts value is DialogueNode {
  if (!isRecord(value)) throw new Error(`Dialogue node ${dialogueId} must be an object`)
  if (typeof value.id !== 'string') throw new Error(`Dialogue node ${dialogueId} missing id`)
  if (value.id !== dialogueId) throw new Error(`Dialogue node ${dialogueId} id mismatch: ${value.id}`)
  if (typeof value.text !== 'string' || value.text.length === 0) {
    throw new Error(`Dialogue node ${dialogueId} text must be a non-empty string`)
  }
  if (value.speaker !== undefined && typeof value.speaker !== 'string') {
    throw new Error(`Dialogue node ${dialogueId} speaker must be a string`)
  }
  if (typeof value.speaker === 'string' && !characterIds.has(value.speaker)) {
    throw new Error(`Dialogue node ${dialogueId} speaker character not found: ${value.speaker}`)
  }

  assertDialogueScene(dialogueId, value.speaker, value.scene, characterIds)
}

function assertDialogueScene(
  dialogueId: string,
  speaker: unknown,
  value: unknown,
  characterIds: Set<string>,
): asserts value is DialogueScene {
  if (!isRecord(value)) throw new Error(`Dialogue node ${dialogueId} missing scene`)
  if (value.mode !== 'dialogue' && value.mode !== 'cg') {
    throw new Error(`Dialogue node ${dialogueId} scene.mode must be dialogue or cg`)
  }
  if (!Array.isArray(value.characterIds)) {
    throw new Error(`Dialogue node ${dialogueId} scene.characterIds must be an array`)
  }
  if (value.characterIds.length > 4) {
    throw new Error(`Dialogue node ${dialogueId} scene.characterIds supports at most 4 characters`)
  }
  for (const characterId of value.characterIds) {
    if (typeof characterId !== 'string' || characterId.trim().length === 0) {
      throw new Error(`Dialogue node ${dialogueId} scene.characterIds contains an invalid character id`)
    }
    if (!characterIds.has(characterId)) {
      throw new Error(`Dialogue node ${dialogueId} scene character not found: ${characterId}`)
    }
  }

  if (value.mode === 'dialogue') {
    if (typeof value.backgroundAssetKey !== 'string') {
      throw new Error(`Dialogue node ${dialogueId} scene.backgroundAssetKey must be a string`)
    }
    validateImageAssetKey(value.backgroundAssetKey, `Dialogue node ${dialogueId} scene.backgroundAssetKey`)
    if (typeof speaker === 'string' && !value.characterIds.includes(speaker)) {
      throw new Error(`Dialogue node ${dialogueId} speaker must be included in scene.characterIds`)
    }
    return
  }

  if (typeof value.cgAssetKey !== 'string') {
    throw new Error(`Dialogue node ${dialogueId} scene.cgAssetKey must be a string`)
  }
  validateImageAssetKey(value.cgAssetKey, `Dialogue node ${dialogueId} scene.cgAssetKey`)
  if (value.characterIds.length > 1) {
    throw new Error(`Dialogue node ${dialogueId} CG mode supports at most 1 character`)
  }
  if (typeof speaker === 'string' && value.characterIds.length > 0 && !value.characterIds.includes(speaker)) {
    throw new Error(`Dialogue node ${dialogueId} speaker must be included in scene.characterIds`)
  }
}

function getBootstrapCharacterIds(characters: unknown[]): Set<string> {
  const characterIds = new Set<string>()

  for (const character of characters) {
    if (!isRecord(character)) throw new Error('Bootstrap character must be an object')
    if (typeof character.id !== 'string' || character.id.trim().length === 0) {
      throw new Error('Bootstrap character id must be a non-empty string')
    }
    characterIds.add(character.id)
  }

  return characterIds
}

function validateImageAssetKey(assetKey: string, label: string): void {
  const trimmedKey = assetKey.trim()
  if (trimmedKey.length === 0) throw new Error(`${label} cannot be empty`)
  if (trimmedKey.startsWith('/')) throw new Error(`${label} must be a storage key, not a public URL`)
  if (trimmedKey.includes('..')) throw new Error(`${label} cannot contain parent directory segments`)
  if (!trimmedKey.endsWith('.jpg') && !trimmedKey.endsWith('.jpeg') && !trimmedKey.endsWith('.png')) {
    throw new Error(`${label} must reference an image file`)
  }
}
