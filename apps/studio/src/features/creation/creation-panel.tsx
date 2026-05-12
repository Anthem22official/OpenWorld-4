import { useMemo, useState } from 'react'
import PipelineFlow from '../pipeline/pipeline-flow'
import type {
  CreatorDraft,
  EventDraft,
  EventIdea,
  MockDatabaseCharacter,
  MockDatabaseLocation,
  PipelineStep,
  PipelineStepId,
  StudioModule,
} from '../pipeline/pipeline-types'

type CreationPanelProps =
  | {
      module: StudioModule
      draft: CreatorDraft
      placeholder: string
    }
  | {
      module: StudioModule
      characters: MockDatabaseCharacter[]
      locations: MockDatabaseLocation[]
      eventIdeas: EventIdea[]
      eventDrafts: EventDraft[]
    }

type CreatorStepId = PipelineStepId

export default function CreationPanel(props: CreationPanelProps) {
  if ('eventIdeas' in props) {
    return (
      <EventFactoryPanel
        module={props.module}
        characters={props.characters}
        locations={props.locations}
        eventIdeas={props.eventIdeas}
        eventDrafts={props.eventDrafts}
      />
    )
  }

  return (
    <AiCreatorPanel
      module={props.module}
      draft={props.draft}
      placeholder={props.placeholder}
    />
  )
}

function AiCreatorPanel({
  module,
  draft,
  placeholder,
}: {
  module: StudioModule
  draft: CreatorDraft
  placeholder: string
}) {
  const [brief, setBrief] = useState('')
  const [activeStep, setActiveStep] = useState<CreatorStepId>('describe')
  const [generatedDraft, setGeneratedDraft] = useState<CreatorDraft | null>(null)
  const [validated, setValidated] = useState(false)

  const steps = buildCreatorSteps(activeStep, Boolean(generatedDraft), validated)
  const canReview = generatedDraft !== null
  const canValidate = generatedDraft !== null && activeStep === 'validate'

  const handleGenerate = () => {
    setGeneratedDraft(draft)
    setValidated(false)
    setActiveStep('generate')
  }

  const handleReset = () => {
    setBrief('')
    setActiveStep('describe')
    setGeneratedDraft(null)
    setValidated(false)
  }

  return (
    <section className="studio-workbench" aria-label={`${module.label} AI creator`}>
      <PipelineFlow steps={steps} />

      <div className="studio-workbench__body">
        <section className="studio-step-panel black-coated-paper" aria-label="AI creator step">
          <div className="studio-section-heading">
            <div>
              <p className="studio-eyebrow">{getCreatorStepEyebrow(activeStep)}</p>
              <h2>{getCreatorStepTitle(activeStep)}</h2>
            </div>
            <button className="studio-text-button" type="button" onClick={handleReset}>
              Reset
            </button>
          </div>

          {activeStep === 'describe' ? (
            <div className="studio-step-content">
              <label className="studio-field">
                <span>{module.label} brief</span>
                <textarea
                  value={brief}
                  onChange={(event) => setBrief(event.target.value)}
                  placeholder={placeholder}
                  rows={8}
                />
              </label>
              <div className="studio-validation-box">
                <strong>Empty brief allowed</strong>
                <p>
                  Generate from world tone to let the mock AI fill a complete schema and
                  image prompt without user details.
                </p>
              </div>
              <div className="studio-actions">
                <button className="studio-primary-button" type="button" onClick={handleGenerate}>
                  Generate complete design
                </button>
              </div>
            </div>
          ) : null}

          {activeStep === 'generate' ? (
            <div className="studio-step-content">
              <CreatorDraftSummary draft={requireCreatorDraft(generatedDraft)} />
              <div className="studio-actions">
                <button
                  className="studio-primary-button"
                  type="button"
                  onClick={() => setActiveStep('review')}
                  disabled={!canReview}
                >
                  Review schema
                </button>
                <button className="studio-secondary-button" type="button" onClick={() => setActiveStep('describe')}>
                  Edit brief
                </button>
              </div>
            </div>
          ) : null}

          {activeStep === 'review' ? (
            <div className="studio-step-content">
              <CreatorSchemaReview draft={requireCreatorDraft(generatedDraft)} />
              <div className="studio-actions">
                <button className="studio-primary-button" type="button" onClick={() => setActiveStep('validate')}>
                  Continue to validate
                </button>
                <button className="studio-secondary-button" type="button" onClick={handleGenerate}>
                  Regenerate mock
                </button>
              </div>
            </div>
          ) : null}

          {activeStep === 'validate' ? (
            <div className="studio-step-content">
              <div className="studio-validation-box">
                <strong>{validated ? 'Creator checkpoint complete' : 'Ready for UI-only validation'}</strong>
                <p>
                  {validated
                    ? 'Validated in Studio UI only. No database rows, files, assets, or API calls were created.'
                    : 'This confirms the generated schema and prompt are reviewable before future persistence exists.'}
                </p>
              </div>
              <ul className="studio-validation-list">
                {requireCreatorDraft(generatedDraft).validation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                className="studio-primary-button"
                type="button"
                onClick={() => setValidated(true)}
                disabled={!canValidate || validated}
              >
                Validate draft
              </button>
            </div>
          ) : null}
        </section>

        <aside className="studio-preview-panel black-coated-paper" aria-label="Creator preview">
          <div className="studio-section-heading">
            <div>
              <p className="studio-eyebrow">AI Output</p>
              <h2>{generatedDraft?.title ?? module.label}</h2>
            </div>
            <span className="studio-status-pill" data-state={validated ? 'complete' : 'draft'}>
              {validated ? 'Validated' : 'Draft'}
            </span>
          </div>

          {generatedDraft ? (
            <div className="studio-draft-preview">
              <p>{generatedDraft.summary}</p>
              <div className="studio-tag-row" aria-label="Creator tags">
                {generatedDraft.tags.map((tag) => (
                  <span className="studio-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="studio-prompt-box">{generatedDraft.prompt}</p>
              <div className="studio-preview-code">
                <span>ID</span>
                <strong>{generatedDraft.id}</strong>
              </div>
            </div>
          ) : (
            <div className="studio-empty-state">
              <strong>No creator draft</strong>
              <p>Write a brief or generate a complete AI design from world tone.</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}

function EventFactoryPanel({
  module,
  characters,
  locations,
  eventIdeas,
  eventDrafts,
}: {
  module: StudioModule
  characters: MockDatabaseCharacter[]
  locations: MockDatabaseLocation[]
  eventIdeas: EventIdea[]
  eventDrafts: EventDraft[]
}) {
  const [selectedCharacterId, setSelectedCharacterId] = useState(characters[0]?.id ?? '')
  const [selectedLocationId, setSelectedLocationId] = useState(locations[0]?.id ?? '')
  const [eventCount, setEventCount] = useState(6)
  const [ideasVisible, setIdeasVisible] = useState(false)
  const [selectedIdeaIds, setSelectedIdeaIds] = useState<Set<string>>(new Set())
  const [draftsVisible, setDraftsVisible] = useState(false)

  const selectedCharacter = useMemo(
    () => characters.find((character) => character.id === selectedCharacterId),
    [characters, selectedCharacterId],
  )
  const selectedLocation = useMemo(
    () => locations.find((location) => location.id === selectedLocationId),
    [locations, selectedLocationId],
  )
  const visibleDrafts = draftsVisible ? eventDrafts.slice(0, Math.min(eventDrafts.length, eventCount)) : []

  const handleGenerateIdeas = () => {
    setIdeasVisible(true)
    setDraftsVisible(false)
    setSelectedIdeaIds(new Set(eventIdeas.slice(0, 2).map((idea) => idea.id)))
  }

  const handleToggleIdea = (ideaId: string) => {
    setSelectedIdeaIds((current) => {
      const next = new Set(current)
      if (next.has(ideaId)) {
        next.delete(ideaId)
      } else {
        next.add(ideaId)
      }
      return next
    })
  }

  return (
    <section className="event-factory" aria-label={`${module.label} batch planner`}>
      <section className="event-factory__controls black-coated-paper" aria-label="Event factory controls">
        <div className="studio-section-heading">
          <div>
            <p className="studio-eyebrow">Batch Planner</p>
            <h2>Idea Inputs</h2>
          </div>
          <span className="studio-status-pill">Soft inspiration</span>
        </div>

        <div className="studio-step-content">
          <label className="studio-field">
            <span>Existing character</span>
            <select value={selectedCharacterId} onChange={(event) => setSelectedCharacterId(event.target.value)}>
              {characters.map((character) => (
                <option value={character.id} key={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </label>
          <label className="studio-field">
            <span>Existing location</span>
            <select value={selectedLocationId} onChange={(event) => setSelectedLocationId(event.target.value)}>
              {locations.map((location) => (
                <option value={location.id} key={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </label>
          <label className="studio-field">
            <span>Event count</span>
            <input
              min={1}
              max={24}
              type="number"
              value={eventCount}
              onChange={(event) => setEventCount(Number(event.target.value))}
            />
          </label>
          <div className="studio-validation-box">
            <strong>Selection is not mandatory</strong>
            <p>
              {selectedCharacter?.name ?? 'Selected character'} and {selectedLocation?.name ?? 'selected location'}
              {' '}guide the idea pass, but parsed valid events may use any existing mock database entry.
            </p>
          </div>
          <button className="studio-primary-button" type="button" onClick={handleGenerateIdeas}>
            Generate ideas
          </button>
        </div>
      </section>

      <section className="event-factory__ideas black-coated-paper" aria-label="Generated event ideas">
        <div className="studio-section-heading">
          <div>
            <p className="studio-eyebrow">LLM Ideas</p>
            <h2>Choose Hooks</h2>
          </div>
          <span className="studio-status-pill">{selectedIdeaIds.size} selected</span>
        </div>

        <div className="studio-step-content">
          {ideasVisible ? (
            eventIdeas.map((idea) => (
              <button
                className="event-idea-card"
                data-selected={selectedIdeaIds.has(idea.id)}
                type="button"
                key={idea.id}
                onClick={() => handleToggleIdea(idea.id)}
              >
                <span>{idea.suggestedCharacterId} / {idea.suggestedLocationId}</span>
                <strong>{idea.title}</strong>
                <p>{idea.hook}</p>
              </button>
            ))
          ) : (
            <div className="studio-empty-state">
              <strong>No ideas generated</strong>
              <p>Select existing data and generate a mock LLM idea set.</p>
            </div>
          )}
          <button
            className="studio-primary-button"
            type="button"
            onClick={() => setDraftsVisible(true)}
            disabled={selectedIdeaIds.size === 0}
          >
            Parse valid events
          </button>
        </div>
      </section>

      <aside className="event-factory__drafts black-coated-paper" aria-label="Parsed event drafts">
        <div className="studio-section-heading">
          <div>
            <p className="studio-eyebrow">Valid Drafts</p>
            <h2>Event Cards</h2>
          </div>
          <span className="studio-status-pill" data-state={draftsVisible ? 'complete' : 'draft'}>
            {draftsVisible ? 'Parsed' : 'Waiting'}
          </span>
        </div>

        <div className="studio-step-content">
          {visibleDrafts.length > 0 ? (
            visibleDrafts.map((draft) => (
              <article className="event-draft-card" key={draft.id}>
                <span>{draft.id}</span>
                <h3>{draft.description}</h3>
                <p>{draft.priority}</p>
                <div className="studio-field-grid">
                  {draft.conditions.map((condition) => (
                    <div className="studio-readonly-field" key={`${draft.id}-${condition.label}`}>
                      <span>{condition.label}</span>
                      <strong>{condition.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="studio-preview-code">
                  <span>dialogue_id</span>
                  <strong>{draft.dialogueStart}</strong>
                </div>
              </article>
            ))
          ) : (
            <div className="studio-empty-state">
              <strong>No parsed events</strong>
              <p>Generate ideas, select hooks, then parse valid event-shaped drafts.</p>
            </div>
          )}
        </div>
      </aside>
    </section>
  )
}

function CreatorDraftSummary({ draft }: { draft: CreatorDraft }) {
  return (
    <div className="studio-draft-card">
      <span>{draft.category}</span>
      <h3>{draft.title}</h3>
      <p>{draft.summary}</p>
    </div>
  )
}

function CreatorSchemaReview({ draft }: { draft: CreatorDraft }) {
  return (
    <>
      <div className="studio-field-grid" aria-label="Generated schema fields">
        {draft.schemaFields.map((field) => (
          <div className="studio-readonly-field" key={field.label}>
            <span>{field.label}</span>
            <strong>{field.value}</strong>
          </div>
        ))}
      </div>
      <p className="studio-prompt-box">{draft.prompt}</p>
    </>
  )
}

function buildCreatorSteps(
  activeStep: CreatorStepId,
  hasDraft: boolean,
  validated: boolean,
): PipelineStep[] {
  return [
    {
      id: 'describe',
      number: 1,
      label: 'AI Design',
      state: hasDraft ? 'complete' : activeStep === 'describe' ? 'active' : 'pending',
    },
    {
      id: 'generate',
      number: 2,
      label: 'Generated Schema',
      state: hasDraft && activeStep !== 'generate' ? 'complete' : activeStep === 'generate' ? 'active' : 'pending',
    },
    {
      id: 'review',
      number: 3,
      label: 'Review',
      state: activeStep === 'validate' || validated ? 'complete' : activeStep === 'review' ? 'active' : 'pending',
    },
    {
      id: 'validate',
      number: 4,
      label: 'Validate',
      state: validated ? 'complete' : activeStep === 'validate' ? 'active' : 'pending',
    },
  ]
}

function getCreatorStepEyebrow(step: CreatorStepId): string {
  return {
    describe: 'Step 1',
    generate: 'Step 2',
    review: 'Step 3',
    validate: 'Step 4',
  }[step]
}

function getCreatorStepTitle(step: CreatorStepId): string {
  return {
    describe: 'AI Design Brief',
    generate: 'Generated Schema',
    review: 'Review Contract',
    validate: 'Validate Only',
  }[step]
}

function requireCreatorDraft(draft: CreatorDraft | null): CreatorDraft {
  if (!draft) throw new Error('Creator draft is required for this step')
  return draft
}
