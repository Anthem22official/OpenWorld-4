import type { LocationEventMatch } from '../../events/location-event-handler'
import type { Choice } from '../../types/game'
import ChoicePanel from '../dialogue/components/choice-panel'
import DialogueBox from '../dialogue/components/dialogue-box'

interface EventPanelProps {
  locationName: string
  locationDescription?: string
  locationBackgroundAssetKey?: string
  optionalEvents: LocationEventMatch[]
  onStartEvent: (eventId: string) => void
  onBackToMap: () => void
}

const DATABASE_ASSET_PUBLIC_PREFIX = '/assets/database/'
const BACK_TO_MAP_CHOICE_ID = 'back-to-map'
const OPTIONAL_EVENT_TEXT = 'この場所で起きている出来事を選ぶ。'
const NO_EVENT_TEXT = 'ここでは、何も起きていない。'

export default function EventPanel({
  locationName,
  locationDescription,
  locationBackgroundAssetKey,
  optionalEvents,
  onStartEvent,
  onBackToMap,
}: EventPanelProps) {
  const hasEvents = optionalEvents.length > 0
  const eventText = hasEvents ? OPTIONAL_EVENT_TEXT : NO_EVENT_TEXT
  const choices = buildEventChoices(optionalEvents, hasEvents)

  const handleChoice = (choiceId: string) => {
    if (choiceId === BACK_TO_MAP_CHOICE_ID) {
      onBackToMap()
      return
    }

    onStartEvent(choiceId)
  }

  return (
    <div className="dialogue-stage event-dialogue-stage" data-can-continue="false">
      {locationBackgroundAssetKey && (
        <div className="event-location-mock" aria-hidden="true">
          <div className="event-location-mock__frame">
            <img
              src={resolveLocationBackgroundUrl(locationBackgroundAssetKey)}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      <header className="dialogue-status black-coated-paper" onClick={(event) => event.stopPropagation()}>
        <div className="dialogue-status__scene">
          <span className="dialogue-status__label">Location Event</span>
          <div className="dialogue-status__title-row">
            <strong>{locationName}</strong>
            <div className="dialogue-now-playing" aria-label="Now playing Shibuya Glass Drift">
              <span className="dialogue-now-playing__pulse" aria-hidden="true" />
              <span className="dialogue-now-playing__label">Playing</span>
              <span className="dialogue-now-playing__title">Shibuya Glass Drift</span>
              <span className="dialogue-now-playing__length">map</span>
              <span className="dialogue-now-playing__meter" aria-hidden="true">
                <span style={{ width: '0%' }} />
              </span>
            </div>
          </div>
        </div>
        <div className="dialogue-status__center">
          <span>18:42</span>
          <span>{locationName}</span>
        </div>
        <div className="dialogue-hud-actions">
          <button className="dialogue-hud-button" type="button" onClick={onBackToMap}>
            Map
          </button>
          <div className="dialogue-menu-corner" aria-label="Menu">
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      <div className="dialogue-scene">
        <aside className="dialogue-chapter-card black-coated-paper" onClick={(event) => event.stopPropagation()}>
          <p className="dialogue-eyebrow">Current Location</p>
          <h2>{locationName}</h2>
          <p>{locationDescription || 'A city location waiting for a rendered scene image.'}</p>
          <div className="dialogue-progress" aria-hidden="true">
            <span />
          </div>
        </aside>

        <aside className="dialogue-choice-dock" onClick={(event) => event.stopPropagation()}>
          <ChoicePanel choices={choices} onChoose={handleChoice} />
        </aside>
      </div>

      <footer className="dialogue-footer" onClick={(event) => event.stopPropagation()}>
        <DialogueBox speaker="Location" text={eventText} />

        <div className="dialogue-continue" data-visible="false" aria-hidden="true">
          Select an option
        </div>
      </footer>
    </div>
  )
}

function resolveLocationBackgroundUrl(backgroundAssetKey: string): string {
  const trimmedKey = backgroundAssetKey.trim()
  if (trimmedKey.length === 0) throw new Error('Location background asset key cannot be empty')
  if (trimmedKey.startsWith('/')) throw new Error('Location background asset key must be a storage key, not a public URL')
  if (trimmedKey.includes('..')) throw new Error('Location background asset key cannot contain parent directory segments')
  if (!trimmedKey.endsWith('.jpg') && !trimmedKey.endsWith('.jpeg') && !trimmedKey.endsWith('.png')) {
    throw new Error('Location background asset key must reference an image file')
  }

  return `${DATABASE_ASSET_PUBLIC_PREFIX}${trimmedKey}`
}

function buildEventChoices(optionalEvents: LocationEventMatch[], hasEvents: boolean): Choice[] {
  if (!hasEvents) {
    return [
      {
        id: BACK_TO_MAP_CHOICE_ID,
        text: '地図に戻る',
        nextDialogueId: BACK_TO_MAP_CHOICE_ID,
      },
    ]
  }

  return [
    ...optionalEvents.map((event) => ({
      id: event.id,
      text: event.description,
      nextDialogueId: event.dialogueId,
    })),
    {
      id: BACK_TO_MAP_CHOICE_ID,
      text: 'Ignore / Back',
      nextDialogueId: BACK_TO_MAP_CHOICE_ID,
    },
  ]
}
