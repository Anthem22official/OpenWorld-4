import type { CharacterCreatorDraft } from './character-creator-types'

export function validateCreatorDescription(description: string): string | null {
  if (description.trim().length === 0) {
    return 'Describe a character before parsing.'
  }

  return null
}

export function getDraftValidationErrors(draft: CharacterCreatorDraft | null): string[] {
  if (!draft) {
    return ['Parsed character draft is required.']
  }

  const errors: string[] = []
  const { character } = draft

  if (character.id.trim().length === 0) errors.push('Character id is required.')
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(character.id)) {
    errors.push('Character id must be slug-like.')
  }
  if (character.name.trim().length === 0) errors.push('Character name is required.')
  if (character.appearance_description.trim().length === 0) {
    errors.push('Appearance description is required.')
  }
  if (character.personality.length === 0) {
    errors.push('At least one personality trait is required.')
  }
  if (character.personality.some((trait) => trait.trim().length === 0)) {
    errors.push('Personality traits cannot be empty.')
  }
  if (draft.image_prompt.trim().length === 0) errors.push('Image prompt is required.')

  return errors
}
