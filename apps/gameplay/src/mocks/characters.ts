import type { Character, CharacterState, Memory, ScheduleBlock } from '../types/game'

export const mockCharacters: Character[] = [
  {
    id: 'alex-kiriya',
    name: 'Alex Kiriya',
    activated: true,
    appearance_description:
      'Adult man in his early thirties, 184 cm, lean athletic build, black undercut hair, clear skin, and a calm model-like face. Usually wears a fitted charcoal tech blazer, tapered black trousers, polished boots, and a slim silver ear cuff.',
    personality: ['composed', 'ambitious', 'observant', 'status-aware', 'dry-humored'],
  },
]

export const mockCharacterStates: CharacterState[] = [
  {
    character_id: 'alex-kiriya',
    location_id: 'shibuya-109',
    activity: 'waiting beside the entrance after a brand meeting',
    game_time_detail: '2040-08-05 19:30',
  },
]

export const mockScheduleBlocks: ScheduleBlock[] = [
  {
    id: 'alex-kiriya-schedule-morning',
    character_id: 'alex-kiriya',
    location_id: 'qfront',
    activity: 'reviewing campaign footage over coffee',
    start_time: 570,
    duration: 150,
  },
  {
    id: 'alex-kiriya-schedule-afternoon',
    character_id: 'alex-kiriya',
    location_id: 'shibuya-109',
    activity: 'meeting a fashion client',
    start_time: 840,
    duration: 180,
  },
  {
    id: 'alex-kiriya-schedule-night',
    character_id: 'alex-kiriya',
    location_id: 'magnet',
    activity: 'hosting a quiet rooftop industry table',
    start_time: 1200,
    duration: 180,
  },
]

export const mockMemories: Memory[] = [
  {
    id: 'alex-kiriya-memory-first-crossing',
    character_id: 'alex-kiriya',
    summary:
      'Alex remembers seeing the protagonist pause at Shibuya Crossing with the sharp focus of someone trying not to look overwhelmed. The city was loud, the screens were brighter than the evening sky, and Alex felt a flicker of interest because the hesitation looked temporary. He decided to test whether the newcomer wanted comfort, challenge, or access.',
    game_date: '2040-08-05',
  },
]
