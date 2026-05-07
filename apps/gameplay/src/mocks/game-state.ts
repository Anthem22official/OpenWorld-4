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
        id: 'choice-2a',
        text: 'Sure, I\'d like the company.',
        nextDialogueId: 'response-warm-1',
      },
      {
        id: 'choice-2b',
        text: 'I\'m waiting for someone, sorry.',
        nextDialogueId: 'response-cold-1',
      },
      {
        id: 'choice-2c',
        text: 'Why do you ask?',
        nextDialogueId: 'response-curious-1',
      },
    ],
  },
  'response-warm-1': {
    id: 'response-warm-1',
    speaker: undefined,
    text: 'Alex smiled and sat down across from me. There was something genuine about their interest, and it put me at ease.',
    nextDialogueId: 'response-warm-2',
  },
  'response-warm-2': {
    id: 'response-warm-2',
    speaker: 'Alex',
    text: 'I\'m Alex, by the way. I come here most days. What\'s your name?',
    choices: [
      {
        id: 'choice-4a',
        text: 'Introduce yourself warmly',
        nextDialogueId: 'end-warm-1',
      },
      {
        id: 'choice-4b',
        text: 'Keep it mysterious',
        nextDialogueId: 'end-mystery-1',
      },
    ],
  },
  'response-cold-1': {
    id: 'response-cold-1',
    speaker: 'Alex',
    text: 'Oh, no problem. I\'ll grab a seat elsewhere.',
    nextDialogueId: 'response-cold-2',
  },
  'response-cold-2': {
    id: 'response-cold-2',
    speaker: undefined,
    text: 'Alex nodded and headed to the counter. I felt a slight pang of regret watching them go.',
    choices: [
      {
        id: 'choice-6a',
        text: 'Try to catch their attention',
        nextDialogueId: 'end-second-chance-1',
      },
      {
        id: 'choice-6b',
        text: 'Let them go',
        nextDialogueId: 'end-alone-1',
      },
    ],
  },
  'response-curious-1': {
    id: 'response-curious-1',
    speaker: 'Alex',
    text: 'Fair enough. I like someone who asks questions.',
    nextDialogueId: 'response-curious-2',
  },
  'response-curious-2': {
    id: 'response-curious-2',
    speaker: undefined,
    text: 'There was something intriguing in their gaze. I gestured to the empty seat across from me.',
    nextDialogueId: 'end-warm-1',
  },
  'end-warm-1': {
    id: 'end-warm-1',
    speaker: undefined,
    text: 'We talked for hours. The afternoon light faded into evening, and neither of us wanted to leave.',
  },
  'end-mystery-1': {
    id: 'end-mystery-1',
    speaker: 'Alex',
    text: 'A mystery... I like that even more.',
  },
  'end-second-chance-1': {
    id: 'end-second-chance-1',
    speaker: 'Alex',
    text: 'Changed your mind?',
    nextDialogueId: 'end-warm-1',
  },
  'end-alone-1': {
    id: 'end-alone-1',
    speaker: undefined,
    text: 'I sat alone with my thoughts, watching the coffee shop fill with patrons. The moment with Alex had been fleeting, but it lingered.',
  },
}

export const mockGameState: GameState = {
  currentDialogueId: 'start',
  currentLocation: 'Coffee Shop',
}

export { dialogueNodes }
