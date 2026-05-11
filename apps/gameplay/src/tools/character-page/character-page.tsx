import LiquidGlass from 'liquid-glass-react'
import { useMemo, useState } from 'react'
import type { Character, CharacterState, Memory, ScheduleBlock } from '../../types/game'
import { mockGameState } from '../../mocks/game-state'
import {
  mockCharacters,
  mockCharacterStates,
  mockMemories,
  mockScheduleBlocks,
} from '../../mocks/characters'

interface CharacterPageProps {
  onBackToDialogue: () => void
}

const characterPortraits: Record<string, string> = {
  'alex-kiriya': '/assets/alex/alex-placeholder-darkgrey-cutout.png',
}

export default function CharacterPage({ onBackToDialogue }: CharacterPageProps) {
  const [selectedCharacterId, setSelectedCharacterId] = useState(() => {
    const firstCharacter = mockCharacters[0]
    if (!firstCharacter) throw new Error('At least one mock character is required')

    return firstCharacter.id
  })

  const character = findCharacter(selectedCharacterId)
  const characterState = findCharacterState(character.id)
  const characterMemories = findCharacterMemories(character.id)
  const characterSchedule = useMemo(
    () => findCharacterSchedule(character.id),
    [character.id],
  )
  const portraitSrc = getCharacterPortrait(character.id)
  const currentLocationName = getLocationName(characterState.location_id)

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
                {mockCharacters.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </LiquidGlass>
          </div>
        </label>
      </header>

      <section className="character-page-grid" aria-label={`${character.name} profile`}>
        <article className="character-portrait-card black-coated-paper">
          <div className="character-portrait-frame">
            <img src={portraitSrc} alt={`${character.name} portrait`} />
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

          <div className="character-tag-row" aria-label="Personality traits">
            {character.personality.map((trait) => (
              <span className="character-trait" key={trait}>
                {trait}
              </span>
            ))}
          </div>
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
          <ol className="character-schedule-list">
            {characterSchedule.map((block) => (
              <li className="character-schedule-item" key={block.id}>
                <time>{formatTimeRange(block)}</time>
                <div>
                  <strong>{getLocationName(block.location_id)}</strong>
                  <p>{block.activity}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="character-memory-card black-coated-paper">
          <div className="character-section-heading">
            <p className="character-page-eyebrow">Memory</p>
            <span>{characterMemories[0]?.game_date}</span>
          </div>
          {characterMemories.map((memory) => (
            <article className="character-memory-entry" key={memory.id}>
              <p>{memory.summary}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

function ReadOnlyMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="character-readonly-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function findCharacter(characterId: string): Character {
  const character = mockCharacters.find((item) => item.id === characterId)
  if (!character) throw new Error(`Character not found: ${characterId}`)

  return character
}

function findCharacterState(characterId: string): CharacterState {
  const state = mockCharacterStates.find((item) => item.character_id === characterId)
  if (!state) throw new Error(`Character state not found: ${characterId}`)

  return state
}

function findCharacterSchedule(characterId: string): ScheduleBlock[] {
  const schedule = mockScheduleBlocks
    .filter((item) => item.character_id === characterId)
    .sort((a, b) => a.start_time - b.start_time)

  if (schedule.length === 0) throw new Error(`Character schedule not found: ${characterId}`)

  return schedule
}

function findCharacterMemories(characterId: string): Memory[] {
  const memories = mockMemories.filter((item) => item.character_id === characterId)
  if (memories.length === 0) throw new Error(`Character memories not found: ${characterId}`)

  return memories
}

function getCharacterPortrait(characterId: string): string {
  const portraitSrc = characterPortraits[characterId]
  if (!portraitSrc) throw new Error(`Character portrait not found: ${characterId}`)

  return portraitSrc
}

function getLocationName(locationId: string): string {
  if (!mockGameState.mapState) throw new Error('mapState is required for character locations')

  const location = mockGameState.mapState.locations.find((item) => item.id === locationId)
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
