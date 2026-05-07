import { GameState, DialogueNode } from '../types/game'

const dialogueNodes: Record<string, DialogueNode> = {
  start: {
    id: 'start',
    speaker: undefined,
    text: 'It was a quiet afternoon in the city. I had just arrived at the coffee shop when Alex walked in, catching my eye for a moment.',
    nextDialogueId: 'line-2',
  },
  'line-2': {
    id: 'line-2',
    speaker: 'Alex',
    text: 'Haven\'t seen you here before. Mind if I sit down?',
    choices: [
      {
        id: 'choice-yes',
        text: 'Sure, I\'d like the company.',
        nextDialogueId: 'response-warm-1',
      },
      {
        id: 'choice-no',
        text: 'I\'m waiting for someone, sorry.',
        nextDialogueId: 'response-cold-1',
      },
    ],
  },
  'response-warm-1': {
    id: 'response-warm-1',
    speaker: undefined,
    text: 'Alex smiled and sat down. There was something genuine about them that put me at ease.',
    nextDialogueId: 'end-good',
  },
  'response-cold-1': {
    id: 'response-cold-1',
    speaker: 'Alex',
    text: 'Oh, no problem. Maybe another time.',
    nextDialogueId: 'end-missed',
  },
  'end-good': {
    id: 'end-good',
    speaker: undefined,
    text: 'We talked for hours. As the sun set, I realized this moment would stay with me forever.',
  },
  'end-missed': {
    id: 'end-missed',
    speaker: undefined,
    text: 'I watched them walk to the counter. The coffee shop felt a little emptier without their presence.',
  },
}

export const mockGameState: GameState = {
  currentDialogueId: 'start',
  currentLocation: 'Coffee Shop',
}

export { dialogueNodes }
