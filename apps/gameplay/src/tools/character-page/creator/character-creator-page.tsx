import { useMemo, useState } from 'react'
import CharacterCreatorFlow from './character-creator-flow'
import type {
  CharacterCreatorDraft,
  CharacterCreatorStep,
  CharacterCreatorStepId,
  CharacterCreatorStepState,
} from './character-creator-types'
import {
  getDraftValidationErrors,
  validateCreatorDescription,
} from './character-creator-validation'

interface CharacterCreatorPageProps {
  onBackToGallery: () => void
}

const mockDraft: CharacterCreatorDraft = {
  character: {
    id: 'mika-shirogane',
    name: 'Mika Shirogane',
    activated: false,
    appearance_description:
      'Adult woman in her late twenties with silver bobbed hair, sharp grey eyes, a cropped black rain jacket, layered translucent skirt panels, and mirrored ankle boots that catch neon light.',
    personality: ['precise', 'guarded', 'curious', 'wry'],
  },
  image_prompt:
    'Full-body visual novel character portrait of Mika Shirogane, silver bobbed hair, black rain jacket, layered translucent skirt, mirrored ankle boots, premium Shibuya near-future styling, transparent background ready pose.',
}

export default function CharacterCreatorPage({ onBackToGallery }: CharacterCreatorPageProps) {
  const [description, setDescription] = useState('')
  const [draft, setDraft] = useState<CharacterCreatorDraft | null>(null)
  const [imageReady, setImageReady] = useState(false)
  const [descriptionError, setDescriptionError] = useState<string | null>(null)
  const [saveMessage, setSaveMessage] = useState<string | null>(null)
  const [visibleStep, setVisibleStep] = useState<CharacterCreatorStepId>('describe')

  const draftErrors = useMemo(() => getDraftValidationErrors(draft), [draft])
  const canGenerateImage = draft !== null && draftErrors.length === 0
  const canValidate = canGenerateImage && imageReady
  const steps = buildCreatorSteps({
    descriptionError,
    draft,
    draftErrors,
    imageReady,
    saveMessage,
  })

  const handleMockParse = () => {
    const error = validateCreatorDescription(description)
    if (error) {
      setDescriptionError(error)
      setDraft(null)
      setImageReady(false)
      setSaveMessage(null)
      return
    }

    setDescriptionError(null)
    setDraft(mockDraft)
    setImageReady(false)
    setSaveMessage(null)
    setVisibleStep('parse')
  }

  const handleMockImage = () => {
    if (!canGenerateImage) throw new Error('Cannot generate mock image before draft is valid')

    setImageReady(true)
    setSaveMessage(null)
    setVisibleStep('validate')
  }

  const handleFakeSave = () => {
    if (!canValidate) throw new Error('Cannot validate fake save before draft and image are ready')

    setSaveMessage('Validated only. This character was not saved to database or local files.')
  }

  const handleReset = () => {
    setDescription('')
    setDraft(null)
    setImageReady(false)
    setDescriptionError(null)
    setSaveMessage(null)
    setVisibleStep('describe')
  }

  return (
    <section className="character-creator" aria-label="Fake character creator">
      <CharacterCreatorFlow steps={steps} />

      <div className="character-creator-step-shell">
        {visibleStep === 'describe' ? (
          <section
            className="character-creator-panel black-coated-paper"
            aria-label="Describe character step"
          >
            <div className="character-section-heading">
              <div>
                <p className="character-page-eyebrow">Step 1</p>
                <h2>Describe</h2>
              </div>
              <button className="character-creator-text-button" type="button" onClick={handleReset}>
                Reset
              </button>
            </div>

            <label className="character-creator-field">
              <span>Character description</span>
              <textarea
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value)
                  if (descriptionError) setDescriptionError(null)
                }}
                placeholder="A quiet hacker with chrome earrings, rain-dark clothes, and a soft spot for broken vending machines."
                rows={8}
              />
            </label>

            {descriptionError ? (
              <p className="character-creator-alert" role="alert">
                {descriptionError}
              </p>
            ) : null}

            <div className="character-creator-actions">
              <button className="character-creator-primary" type="button" onClick={handleMockParse}>
                Mock parse
              </button>
              <button className="character-creator-secondary" type="button" onClick={onBackToGallery}>
                Gallery
              </button>
            </div>
          </section>
        ) : null}

        {visibleStep === 'parse' ? (
          <section className="character-creator-panel black-coated-paper" aria-label="Parsed draft step">
            <div className="character-section-heading">
              <div>
                <p className="character-page-eyebrow">Step 2</p>
                <h2>Parsed Draft</h2>
              </div>
              <span>{draft ? 'Character format' : 'Waiting'}</span>
            </div>

            {draft ? (
              <div className="character-creator-draft">
                <h3>{draft.character.name}</h3>
                <p>{draft.character.appearance_description}</p>
                <div className="character-tag-row" aria-label="Draft personality traits">
                  {draft.character.personality.map((trait) => (
                    <span className="character-trait" key={trait}>
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="character-creator-code">
                  <span>ID</span>
                  <strong>{draft.character.id}</strong>
                </div>
              </div>
            ) : (
              <EmptyCreatorState label="No parsed draft yet." />
            )}

            {draft && draftErrors.length > 0 ? (
              <ul className="character-creator-error-list" aria-label="Draft validation errors">
                {draftErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            ) : null}

            <div className="character-creator-actions">
              <button
                className="character-creator-primary"
                type="button"
                onClick={() => setVisibleStep('image')}
                disabled={!canGenerateImage}
              >
                Continue to image
              </button>
              <button
                className="character-creator-secondary"
                type="button"
                onClick={() => setVisibleStep('describe')}
              >
                Edit description
              </button>
            </div>
          </section>
        ) : null}

        {visibleStep === 'image' ? (
          <section
            className="character-creator-panel character-creator-image-panel black-coated-paper"
            aria-label="Mock image step"
          >
            <div className="character-section-heading">
              <div>
                <p className="character-page-eyebrow">Step 3</p>
                <h2>Image</h2>
              </div>
              <span>{imageReady ? 'Background removed' : 'Mock only'}</span>
            </div>

            <div className="character-creator-preview" data-ready={imageReady}>
              {imageReady ? (
                <img
                  src="/assets/alex/alex-placeholder-darkgrey-cutout.png"
                  alt="Mock generated cutout"
                />
              ) : (
                <span>{canGenerateImage ? 'Ready for mock image' : 'Parse first'}</span>
              )}
            </div>

            <p className="character-creator-prompt">
              {draft?.image_prompt ?? 'Image prompt will appear after mock parsing.'}
            </p>

            <button
              className="character-creator-primary"
              type="button"
              onClick={handleMockImage}
              disabled={!canGenerateImage}
            >
              Mock image
            </button>
          </section>
        ) : null}

        {visibleStep === 'validate' ? (
          <section className="character-creator-panel black-coated-paper" aria-label="Validate only step">
            <div className="character-section-heading">
              <div>
                <p className="character-page-eyebrow">Step 4</p>
                <h2>Validate</h2>
              </div>
              <span>{saveMessage ? 'Checkpoint done' : 'Not saved'}</span>
            </div>

            <div className="character-creator-validation-note">
              <strong>Fake save status</strong>
              <p>{saveMessage ?? 'Draft and image must be complete before validation.'}</p>
            </div>

            <button
              className="character-creator-primary"
              type="button"
              onClick={handleFakeSave}
              disabled={!canValidate}
            >
              Validate only
            </button>
          </section>
        ) : null}
      </div>
    </section>
  )
}

function EmptyCreatorState({ label }: { label: string }) {
  return <div className="character-creator-empty">{label}</div>
}

function buildCreatorSteps({
  descriptionError,
  draft,
  draftErrors,
  imageReady,
  saveMessage,
}: {
  descriptionError: string | null
  draft: CharacterCreatorDraft | null
  draftErrors: string[]
  imageReady: boolean
  saveMessage: string | null
}): CharacterCreatorStep[] {
  return [
    {
      id: 'describe',
      number: 1,
      label: 'Describe',
      state: descriptionError ? 'error' : draft ? 'complete' : 'active',
    },
    {
      id: 'parse',
      number: 2,
      label: 'Parse',
      state: getParseStepState(draft, draftErrors),
    },
    {
      id: 'image',
      number: 3,
      label: 'Image',
      state: imageReady ? 'complete' : draft ? 'active' : 'pending',
    },
    {
      id: 'validate',
      number: 4,
      label: 'Validate',
      state: saveMessage ? 'complete' : imageReady ? 'active' : 'pending',
    },
  ]
}

function getParseStepState(
  draft: CharacterCreatorDraft | null,
  draftErrors: string[],
): CharacterCreatorStepState {
  if (!draft) return 'pending'
  if (draftErrors.length > 0) return 'error'

  return 'complete'
}
