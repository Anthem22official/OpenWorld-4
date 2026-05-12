export type PipelineStepId = 'describe' | 'generate' | 'review' | 'validate'

export type PipelineStepState = 'pending' | 'active' | 'complete' | 'error'

export interface PipelineStep {
  id: PipelineStepId
  number: number
  label: string
  state: PipelineStepState
}

export interface StudioModule {
  id: StudioModuleId
  label: string
  eyebrow: string
  description: string
  queueLabel: string
}

export type StudioModuleId =
  | 'characters'
  | 'locations'
  | 'events'
  | 'cg-debug'
  | 'tts-debug'

export interface CreatorDraft {
  id: string
  title: string
  category: string
  summary: string
  prompt: string
  schemaFields: StudioField[]
  tags: string[]
  validation: string[]
}

export interface StudioField {
  label: string
  value: string
}

export interface MockDatabaseCharacter {
  id: string
  name: string
  summary: string
}

export interface MockDatabaseLocation {
  id: string
  name: string
  summary: string
}

export interface EventIdea {
  id: string
  title: string
  hook: string
  suggestedCharacterId: string
  suggestedLocationId: string
}

export interface EventDraft {
  id: string
  description: string
  priority: string
  conditions: StudioField[]
  dialogueStart: string
}

export interface DebugRun {
  id: string
  title: string
  status: 'ready' | 'success' | 'error'
  summary: string
  outputFields: StudioField[]
}
