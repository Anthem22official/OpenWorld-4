import { GameState, DialogueNode, Location } from '../types/game'

const dialogueNodes: Record<string, DialogueNode> = {
  start: {
    id: 'start',
    speaker: undefined,
    text: 'It was a sharp evening in Shibuya. The crossing lights changed, screens flashed above the crowd, and Alex appeared beside the entrance of 109.',
    nextDialogueId: 'line-2',
  },
  'line-2': {
    id: 'line-2',
    speaker: 'Alex',
    text: 'You picked the loudest place in Tokyo for a quiet talk.',
    choices: [
      {
        id: 'choice-yes',
        text: 'Then walk with me somewhere quieter.',
        nextDialogueId: 'response-warm-1',
      },
      {
        id: 'choice-no',
        text: 'I wanted to see if you could keep up.',
        nextDialogueId: 'response-cold-1',
      },
    ],
  },
  'response-warm-1': {
    id: 'response-warm-1',
    speaker: undefined,
    text: 'Alex looked toward the station lights, then back at me. The city made every answer feel like an invitation.',
    nextDialogueId: 'end-good',
  },
  'response-cold-1': {
    id: 'response-cold-1',
    speaker: 'Alex',
    text: 'Careful. Shibuya is good at swallowing confidence.',
    nextDialogueId: 'end-missed',
  },
  'end-good': {
    id: 'end-good',
    speaker: undefined,
    text: 'We crossed with the crowd, close enough that the city noise became a cover for everything unsaid.',
  },
  'end-missed': {
    id: 'end-missed',
    speaker: undefined,
    text: 'Alex disappeared toward Hachiko, and the crossing filled the space between us again.',
  },
}

const mockLocations: Location[] = [
  {
    id: 'shibuya-109',
    name: 'Shibuya 109',
    x: 25,
    y: 26,
    visited: true,
    description: 'A vertical fashion landmark overlooking the crossing.',
    areaId: 'shibuya',
    areaMapId: 'shibuya-crossing',
    buildingId: 'shibuya-109',
    mapKind: 'building-shape',
  },
  {
    id: 'qfront',
    name: 'QFRONT / Tsutaya',
    x: 67,
    y: 28,
    visited: false,
    description: 'A bright media facade facing the scramble crossing.',
    areaId: 'shibuya',
    areaMapId: 'shibuya-crossing',
    buildingId: 'qfront',
    mapKind: 'building-shape',
  },
  {
    id: 'magnet',
    name: 'MAGNET by SHIBUYA109',
    x: 75,
    y: 73,
    visited: false,
    description: 'A nightlife-facing shopping tower above the flow of people.',
    areaId: 'shibuya',
    areaMapId: 'shibuya-crossing',
    buildingId: 'magnet',
    mapKind: 'building-shape',
  },
  {
    id: 'hachiko-station',
    name: 'Shibuya Station / Hachiko',
    x: 24,
    y: 76,
    visited: false,
    description: 'A meeting point where trains, ads, and crowds compress into one pulse.',
    areaId: 'shibuya',
    areaMapId: 'shibuya-crossing',
    buildingId: 'hachiko-station',
    mapKind: 'building-shape',
  },
]

export const mockGameState: GameState = {
  currentDialogueId: 'start',
  currentLocation: 'Shibuya 109',
  mapState: {
    locations: mockLocations,
    currentLocationId: 'shibuya-109',
    visitedLocationIds: ['shibuya-109'],
  },
}

export { dialogueNodes }
