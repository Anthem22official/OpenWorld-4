export interface Choice {
  id: string
  text: string
  nextDialogueId: string
}

export interface DialogueScene {
  mode: 'dialogue' | 'cg'
  backgroundAssetKey?: string
  cgAssetKey?: string
  characterIds: string[]
}

export interface DialogueNode {
  id: string
  speaker?: string // Speaker name (undefined = narration) or character ID
  text: string
  scene: DialogueScene
  voiceAssetKey?: string // Optional database asset key for a WAV voice line
  nextDialogueId?: string // Auto-advance to next paragraph (fixed script)
  choices?: Choice[] // OR show player choice (branching decision)
}

export interface Location {
  id: string
  name: string
  x: number // Percentage (0-100)
  y: number // Percentage (0-100)
  visited: boolean
  description?: string
  backgroundAssetKey?: string // Optional database asset key for a location background image
  areaId?: string
  areaMapId?: string
  buildingId?: string
  mapKind?: 'legacy-point' | 'building-shape'
}

export interface Character {
  id: string
  name: string
  activated: boolean
  appearance_description: string
  personality: string[]
}

export interface CharacterState {
  character_id: string
  location_id: string
  activity: string
  game_time_detail: string
}

export interface ScheduleBlock {
  id: string
  character_id: string
  location_id: string
  activity: string
  start_time: number
  duration: number
}

export interface Relation {
  id: string
  character_id: string
  target_character_id: string
  affinity_score: number
}

export interface Memory {
  id: string
  character_id: string
  summary: string
  game_date: string
}

export interface MapState {
  locations: Location[]
  currentLocationId: string
  visitedLocationIds: string[]
}

export interface GameState {
  currentDialogueId: string
  currentLocation: string
  gameTimeDetail: string
  mapState?: MapState
}
