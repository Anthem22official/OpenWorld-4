import { GameState, DialogueNode, Location } from '../types/game'

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

const mockLocations: Location[] = [
  {
    id: 'coffee-shop',
    name: 'Coffee Shop',
    x: 50,
    y: 30,
    visited: true,
    description: 'A cozy corner café where stories begin.',
  },
  {
    id: 'park',
    name: 'City Park',
    x: 75,
    y: 55,
    visited: false,
    description: 'Green spaces and quiet moments.',
  },
  {
    id: 'library',
    name: 'Public Library',
    x: 25,
    y: 70,
    visited: false,
    description: 'Shelves of untold worlds.',
  },
  {
    id: 'river-walk',
    name: 'River Walk',
    x: 60,
    y: 80,
    visited: false,
    description: 'Where the city meets the water.',
  },
]

export const mockGameState: GameState = {
  currentDialogueId: 'start',
  currentLocation: 'Coffee Shop',
  mapState: {
    locations: mockLocations,
    currentLocationId: 'coffee-shop',
    visitedLocationIds: ['coffee-shop'],
  },
}

export { dialogueNodes }
