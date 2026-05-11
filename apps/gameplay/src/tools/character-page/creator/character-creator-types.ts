import type { Character } from '../../../types/game'

export type CharacterCreatorStepId = 'describe' | 'parse' | 'image' | 'validate'

export type CharacterCreatorStepState = 'pending' | 'active' | 'complete' | 'error'

export interface CharacterCreatorStep {
  id: CharacterCreatorStepId
  number: number
  label: string
  state: CharacterCreatorStepState
}

export interface CharacterCreatorDraft {
  character: Character
  image_prompt: string
}
