import type {
  CreatorDraft,
  DebugRun,
  EventDraft,
  EventIdea,
  MockDatabaseCharacter,
  MockDatabaseLocation,
  StudioModule,
  StudioModuleId,
} from '../features/pipeline/pipeline-types'

export const studioModules: StudioModule[] = [
  {
    id: 'characters',
    label: 'Characters',
    eyebrow: 'Creator',
    description: 'AI-assisted adult character design with schema, visual identity, and image prompt review.',
    queueLabel: 'Complete AI design',
  },
  {
    id: 'locations',
    label: 'Locations',
    eyebrow: 'Creator',
    description: 'AI-assisted location design with playable function, map identity, and background prompt review.',
    queueLabel: 'Schema + image prompt',
  },
  {
    id: 'events',
    label: 'Event Factory',
    eyebrow: 'Automation',
    description: 'Batch event ideation from existing character and location context, then parse into valid drafts.',
    queueLabel: 'Soft constraints',
  },
  {
    id: 'cg-debug',
    label: 'CG Debug',
    eyebrow: 'Debug',
    description: 'Direct CG prompt console for repeated scene-mode and metadata checks.',
    queueLabel: 'Tool console',
  },
  {
    id: 'tts-debug',
    label: 'TTS Debug',
    eyebrow: 'Debug',
    description: 'Direct voice line console for model, voice, text, and output-key checks.',
    queueLabel: 'Tool console',
  },
]

export const creatorPlaceholders: Record<'characters' | 'locations', string> = {
  characters:
    'Optional. Describe a type, status, body, mood, or let AI fully design from the existing OpenWorld tone.',
  locations:
    'Optional. Describe a city function, mood, social role, or let AI fully design a playable place from the existing world.',
}

export const creatorDrafts: Record<'characters' | 'locations', CreatorDraft> = {
  characters: {
    id: 'akira-kurosawa',
    title: 'Akira Kurosawa',
    category: 'Character schema',
    summary:
      'Adult Japanese man with a disciplined swimmer build, brushed-back black hair, rain-dark hotel-owner tailoring, and quiet authority.',
    prompt:
      'Full-body adult Japanese male visual novel character illustration, premium Japanese anime style, Akira Kurosawa, disciplined swimmer build, brushed-back black hair, rain-dark tailored suit, silver watch, calm hotel-owner confidence, plain pure white background.',
    tags: ['adult', 'status', 'romance-candidate', 'ebisu'],
    schemaFields: [
      { label: 'id', value: 'akira-kurosawa' },
      { label: 'name', value: 'Akira Kurosawa' },
      { label: 'activated', value: 'false' },
      { label: 'appearance_description', value: 'Adult Japanese man, swimmer build, black brushed-back hair, dark tailored suit, silver watch.' },
      { label: 'personality', value: 'controlled, observant, generous, exacting' },
      { label: 'starting_location_id', value: 'ebisu-members-lounge' },
    ],
    validation: [
      'Adult framing is explicit.',
      'Required character schema fields are present.',
      'Image prompt follows the persistent character asset style.',
      'Draft is UI-only and does not write database rows.',
    ],
  },
  locations: {
    id: 'ebisu-members-lounge',
    title: 'Ebisu Members Lounge',
    category: 'Location schema',
    summary:
      'A glassy private rooftop lounge above Ebisu Station where privacy, status, and late-night introductions create repeatable event pressure.',
    prompt:
      'Near-future Ebisu visual novel location background, premium Japanese game background art, rooftop members lounge above the station, glass elevator arrival, wet city reflections, dark luxury interior edge, no characters, no readable text.',
    tags: ['location', 'ebisu', 'night', 'status'],
    schemaFields: [
      { label: 'id', value: 'ebisu-members-lounge' },
      { label: 'name', value: 'Ebisu Members Lounge' },
      { label: 'level', value: '12' },
      { label: 'accessible_start', value: '1080' },
      { label: 'accessible_end', value: '120' },
      { label: 'backgroundAssetKey', value: 'locations/ebisu-members-lounge/background/main.jpg' },
    ],
    validation: [
      'Location has gameplay function, not only scenery.',
      'Required location schema fields are present.',
      'Background prompt follows the persistent location asset style.',
      'Draft is UI-only and does not write database rows.',
    ],
  },
}

export const mockDatabaseCharacters: MockDatabaseCharacter[] = [
  {
    id: 'ren-takahashi',
    name: 'Ren Takahashi',
    summary: 'Composed, precise, status-aware fashion presence near Shibuya 109.',
  },
  {
    id: 'kaito-sugiyama',
    name: 'Kaito Sugiyama',
    summary: 'Analytical consultant energy around QFRONT media screens.',
  },
  {
    id: 'daiki-mori',
    name: 'Daiki Mori',
    summary: 'Direct nightlife magnet attached to MAGNET rooftop movement.',
  },
  {
    id: 'haruto-nakamura',
    name: 'Haruto Nakamura',
    summary: 'Elegant senior confidence around Hachiko station flow.',
  },
]

export const mockDatabaseLocations: MockDatabaseLocation[] = [
  {
    id: 'shibuya-109',
    name: 'Shibuya 109',
    summary: 'Fashion tower entrance and first-status pressure.',
  },
  {
    id: 'qfront',
    name: 'QFRONT / Tsutaya',
    summary: 'Media facade, screens, comparison, and social reading.',
  },
  {
    id: 'magnet',
    name: 'MAGNET by SHIBUYA109',
    summary: 'Nightlife-facing shopping tower and rooftop invitation energy.',
  },
  {
    id: 'hachiko-station',
    name: 'Shibuya Station / Hachiko',
    summary: 'Transit compression, meeting pressure, and polished arrivals.',
  },
]

export const eventIdeas: EventIdea[] = [
  {
    id: 'idea-screen-read',
    title: 'Screen Read',
    hook: 'The selected person notices what the protagonist watches before the crowd does.',
    suggestedCharacterId: 'kaito-sugiyama',
    suggestedLocationId: 'qfront',
  },
  {
    id: 'idea-private-elevator',
    title: 'Private Elevator',
    hook: 'A rooftop invitation is offered as if it is casual, but the door policy makes it obvious it is not.',
    suggestedCharacterId: 'daiki-mori',
    suggestedLocationId: 'magnet',
  },
  {
    id: 'idea-polished-car',
    title: 'Polished Car',
    hook: 'A reserved car arrives nearby and turns a normal station meeting into a status test.',
    suggestedCharacterId: 'haruto-nakamura',
    suggestedLocationId: 'hachiko-station',
  },
  {
    id: 'idea-fashion-threshold',
    title: 'Fashion Threshold',
    hook: 'A private fitting ends, and the protagonist is invited to prove he can tell quality from price.',
    suggestedCharacterId: 'ren-takahashi',
    suggestedLocationId: 'shibuya-109',
  },
]

export const eventDrafts: EventDraft[] = [
  {
    id: 'optional-kaito-screen-read',
    description: 'Kaito tests whether the protagonist is watching the screen, the crowd, or himself.',
    priority: '{"value":"optional","index":120}',
    dialogueStart: 'kaito-screen-read-start',
    conditions: [
      { label: 'location', value: 'qfront' },
      { label: 'characterLocation', value: 'kaito-sugiyama @ qfront' },
      { label: 'timeBlock', value: '18:00 + 180 minutes' },
    ],
  },
  {
    id: 'optional-daiki-private-elevator',
    description: 'Daiki offers an elevator ride upward before naming what kind of guest gets past the rope.',
    priority: '{"value":"optional","index":130}',
    dialogueStart: 'daiki-private-elevator-start',
    conditions: [
      { label: 'location', value: 'magnet' },
      { label: 'characterLocation', value: 'daiki-mori @ magnet' },
      { label: 'timeBlock', value: '19:00 + 210 minutes' },
    ],
  },
  {
    id: 'optional-haruto-polished-car',
    description: 'Haruto asks where the protagonist is going as a reserved car waits close enough to answer for him.',
    priority: '{"value":"optional","index":140}',
    dialogueStart: 'haruto-polished-car-start',
    conditions: [
      { label: 'location', value: 'hachiko-station' },
      { label: 'characterLocation', value: 'haruto-nakamura @ hachiko-station' },
      { label: 'timeBlock', value: '18:30 + 120 minutes' },
    ],
  },
]

export const cgDebugRun: DebugRun = {
  id: 'cg-run-ren-crossing',
  title: 'Ren crossing CG mock',
  status: 'success',
  summary: 'Scene-mode CG prompt validated for one character and storage-key output.',
  outputFields: [
    { label: 'mode', value: 'cg' },
    { label: 'characterIds', value: 'ren-takahashi' },
    { label: 'cgAssetKey', value: 'cg/ren-crossing-glass-test.png' },
    { label: 'size', value: '2560x1440' },
  ],
}

export const ttsDebugRun: DebugRun = {
  id: 'tts-run-kaito-controlled',
  title: 'Kaito controlled line mock',
  status: 'success',
  summary: 'Voice prompt validated for model, voice, and WAV storage-key output.',
  outputFields: [
    { label: 'model', value: 'google/gemini-3.1-flash-tts-preview' },
    { label: 'voice', value: 'Charon' },
    { label: 'voiceAssetKey', value: 'dialogue/kaito-ebisu-start/voices/kaito-ebisu-line.wav' },
    { label: 'format', value: 'audio/wav' },
  ],
}

export function getStudioModule(moduleId: StudioModuleId): StudioModule {
  const module = studioModules.find((candidate) => candidate.id === moduleId)
  if (!module) throw new Error(`Studio module not found: ${moduleId}`)
  return module
}
