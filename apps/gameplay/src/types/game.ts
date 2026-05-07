export interface Choice {
  id: string
  text: string
  nextDialogueId: string
}

export interface DialogueNode {
  id: string
  speaker?: string // Speaker name (undefined = narration) or character ID
  text: string
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
}

export interface MapState {
  locations: Location[]
  currentLocationId: string
  visitedLocationIds: string[]
}

export interface GameState {
  currentDialogueId: string
  currentLocation: string
  mapState?: MapState
}
