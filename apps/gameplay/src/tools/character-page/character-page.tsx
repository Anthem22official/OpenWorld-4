import LiquidGlass from 'liquid-glass-react'
import { useMemo, useState } from 'react'
import type { Character, CharacterState, Location, Memory, ScheduleBlock } from '../../types/game'
import CharacterCreatorPage from './creator/character-creator-page'

interface CharacterPageProps {
  onBackToDialogue: () => void
  characters: Character[]
  characterStates: CharacterState[]
  locations: Location[]
  memories: Memory[]
  scheduleBlocks: ScheduleBlock[]
}

export default function CharacterPage({
  onBackToDialogue,
  characters,
  characterStates,
  locations,
  memories,
  scheduleBlocks,
}: CharacterPageProps) {
  const [activeView, setActiveView] = useState<'gallery' | 'creator'>('gallery')
  const [selectedCharacterId, setSelectedCharacterId] = useState(() => {
    const firstCharacter = characters[0]
    if (!firstCharacter) throw new Error('At least one character is required')

    return firstCharacter.id
  })

  const character = findCharacter(characters, selectedCharacterId)
  const characterState = findCharacterState(characterStates, character.id)
  const characterMemories = findCharacterMemories(memories, character.id)
  const characterSchedule = useMemo(
    () => findCharacterSchedule(scheduleBlocks, character.id),
    [character.id, scheduleBlocks],
  )
  const portraitSrc = getCharacterFullBodyUrl(character.id)
  const currentLocationName = getLocationName(locations, characterState.location_id)

  return (
    <main className="character-page">
      <header className="character-page-header black-coated-paper">
        <div className="character-liquid-control character-liquid-control--back">
          <LiquidGlass
            displacementScale={32}
            blurAmount={0.05}
            saturation={130}
            aberrationIntensity={1.2}
            elasticity={0.035}
            cornerRadius={999}
            padding="0"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          >
            <button className="character-page-back" type="button" onClick={onBackToDialogue}>
              Back
            </button>
          </LiquidGlass>
        </div>

        <div className="character-page-title">
          <p className="character-page-eyebrow">Character Registry</p>
          <h1>Character</h1>
        </div>

        <div className="character-page-header-actions">
          <div className="character-page-tabs" role="tablist" aria-label="Character gallery views">
            <button
              type="button"
              role="tab"
              aria-selected={activeView === 'gallery'}
              onClick={() => setActiveView('gallery')}
            >
              Gallery
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeView === 'creator'}
              onClick={() => setActiveView('creator')}
            >
              Creator
            </button>
          </div>

          {activeView === 'gallery' ? (
            <label className="character-page-picker">
              <span>Character</span>
              <div className="character-liquid-control character-liquid-control--select">
                <LiquidGlass
                  displacementScale={32}
                  blurAmount={0.05}
                  saturation={130}
                  aberrationIntensity={1.2}
                  elasticity={0.035}
                  cornerRadius={999}
                  padding="0"
                  style={{ position: 'absolute', top: '50%', left: '50%' }}
                >
                  <select
                    value={selectedCharacterId}
                    onChange={(event) => setSelectedCharacterId(event.target.value)}
                  >
                    {characters.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </LiquidGlass>
              </div>
            </label>
          ) : null}
        </div>
      </header>

      {activeView === 'creator' ? (
        <CharacterCreatorPage onBackToGallery={() => setActiveView('gallery')} />
      ) : (
        <section className="character-page-grid" aria-label={`${character.name} profile`}>
          <article className="character-portrait-card black-coated-paper">
            <div className="character-portrait-frame">
              <CharacterPortraitSlot
                key={character.id}
                characterName={character.name}
                portraitSrc={portraitSrc}
              />
            </div>
            <div className="character-activation-row">
              <span className="character-status-dot" data-active={character.activated} />
              <span>{character.activated ? 'Active in game' : 'Inactive'}</span>
            </div>
          </article>

          <section className="character-profile-card black-coated-paper">
            <p className="character-page-eyebrow">Identity</p>
            <h2>{character.name}</h2>
            <p>{character.appearance_description}</p>

            {character.personality.length > 0 ? (
              <div className="character-tag-row" aria-label="Personality traits">
                {character.personality.map((trait) => (
                  <span className="character-trait" key={trait}>
                    {trait}
                  </span>
                ))}
              </div>
            ) : (
              <EmptyCharacterSlot label="No personality traits recorded." />
            )}
          </section>

          <section className="character-state-card black-coated-paper">
            <p className="character-page-eyebrow">Current State</p>
            <div className="character-state-grid">
              <ReadOnlyMetric label="Location" value={currentLocationName} />
              <ReadOnlyMetric label="Time" value={characterState.game_time_detail} />
              <ReadOnlyMetric label="Activity" value={characterState.activity} />
            </div>
          </section>

          <section className="character-schedule-card black-coated-paper">
            <div className="character-section-heading">
              <p className="character-page-eyebrow">Daily Schedule</p>
              <span>{characterSchedule.length} blocks</span>
            </div>
            {characterSchedule.length > 0 ? (
              <ol className="character-schedule-list">
                {characterSchedule.map((block) => (
                  <li className="character-schedule-item" key={block.id}>
                    <time>{formatTimeRange(block)}</time>
                    <div>
                      <strong>{getLocationName(locations, block.location_id)}</strong>
                      <p>{block.activity}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <EmptyCharacterSlot label="No schedule blocks recorded." />
            )}
          </section>

          <section className="character-memory-card black-coated-paper">
            <div className="character-section-heading">
              <p className="character-page-eyebrow">Memory</p>
              {characterMemories.length > 0 ? <span>{characterMemories[0].game_date}</span> : null}
            </div>
            {characterMemories.length > 0 ? (
              characterMemories.map((memory) => (
                <article className="character-memory-entry" key={memory.id}>
                  <p>{memory.summary}</p>
                </article>
              ))
            ) : (
              <EmptyCharacterSlot label="No memories recorded." />
            )}
          </section>
        </section>
      )}
    </main>
  )
}

function CharacterPortraitSlot({
  characterName,
  portraitSrc,
}: {
  characterName: string
  portraitSrc: string
}) {
  const [imageFailed, setImageFailed] = useState(false)

  if (imageFailed) {
    return (
      <div className="character-portrait-empty" role="img" aria-label={`${characterName} portrait missing`}>
        <span>No full-body asset</span>
      </div>
    )
  }

  return (
    <img
      src={portraitSrc}
      alt={`${characterName} full-body portrait`}
      onError={() => setImageFailed(true)}
    />
  )
}

function EmptyCharacterSlot({ label }: { label: string }) {
  return <div className="character-empty-slot">{label}</div>
}

function ReadOnlyMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="character-readonly-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function findCharacter(characters: Character[], characterId: string): Character {
  const character = characters.find((item) => item.id === characterId)
  if (!character) throw new Error(`Character not found: ${characterId}`)

  return character
}

function findCharacterState(characterStates: CharacterState[], characterId: string): CharacterState {
  const state = characterStates.find((item) => item.character_id === characterId)
  if (!state) throw new Error(`Character state not found: ${characterId}`)

  return state
}

function findCharacterSchedule(scheduleBlocks: ScheduleBlock[], characterId: string): ScheduleBlock[] {
  return scheduleBlocks
    .filter((item) => item.character_id === characterId)
    .sort((a, b) => a.start_time - b.start_time)
}

function findCharacterMemories(memories: Memory[], characterId: string): Memory[] {
  return memories.filter((item) => item.character_id === characterId)
}

function getCharacterFullBodyUrl(characterId: string): string {
  return `/assets/database/characters/${characterId}/full-body/full-body-transparent.png`
}

function getLocationName(locations: Location[], locationId: string): string {
  const location = locations.find((item) => item.id === locationId)
  if (!location) throw new Error(`Location not found: ${locationId}`)

  return location.name
}

function formatTimeRange(block: ScheduleBlock): string {
  const startTime = formatTime(block.start_time)
  const endTime = formatTime(block.start_time + block.duration)

  return `${startTime} - ${endTime}`
}

function formatTime(totalMinutes: number): string {
  if (totalMinutes < 0 || totalMinutes > 1440) {
    throw new Error(`Schedule time is out of range: ${totalMinutes}`)
  }

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
