import { type CSSProperties, useEffect, useState } from 'react'
import DialoguePage from './scenes/dialogue/dialogue-page'
import MapPage from './scenes/map/map-page'
import MapSelectionPage from './scenes/map/map-selection-page'
import EventPanel from './scenes/event/event-panel'
import LegacyMapPage from './scenes/map/legacy-map-page'
import DebugImageGenPage from './tools/debug-image-gen/debug-image-gen-page'
import CharacterPage from './tools/character-page/character-page'
import StyleGalleryPage from './tools/style-gallery/style-gallery-page'
import MusicHandler, { MusicPage } from './audio/music-handler'
import ClickParticles from './components/click-particles'
import { fetchGameBootstrap, type GameBootstrapData } from './api/game-bootstrap-client'
import { resolveLocationEvents, type LocationEventMatch } from './events/location-event-handler'
import type { GameState } from './types/game'
import { getAreaMap } from './scenes/map/data/map-area-data'
import { advanceGameTimeDetail, calculateLocationTravelMinutes } from './time/game-time'

type PageType = MusicPage

interface EventPanelState {
  locationId: string
  locationName: string
  locationDescription?: string
  locationBackgroundAssetKey?: string
  optionalEvents: LocationEventMatch[]
}

export default function App() {
  const [bootstrapData, setBootstrapData] = useState<GameBootstrapData | null>(null)
  const [gameState, setGameState] = useState<GameState | null>(null)
  const [bootstrapError, setBootstrapError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState<PageType>('dialogue')
  const [eventPanelState, setEventPanelState] = useState<EventPanelState | null>(null)
  const [activeAreaMapId, setActiveAreaMapId] = useState('shibuya-crossing')

  useEffect(() => {
    let isActive = true

    fetchGameBootstrap()
      .then((data) => {
        if (!isActive) return
        setBootstrapData(data)
        setGameState(data.gameState)
      })
      .catch((error: unknown) => {
        if (!isActive) return
        setBootstrapError(error instanceof Error ? error : new Error('Unknown bootstrap error'))
      })

    return () => {
      isActive = false
    }
  }, [])

  const handleReturnToMap = () => {
    getAreaMap(activeAreaMapId)
    setCurrentPage('map')
  }

  const handleShowMapSelection = () => {
    setCurrentPage('map-select')
  }

  const handleSelectAreaMap = (areaMapId: string) => {
    getAreaMap(areaMapId)
    setActiveAreaMapId(areaMapId)
    setCurrentPage('map')
  }

  const handleBackToDialogue = () => {
    setCurrentPage('dialogue')
  }

  const handleShowDebugPanel = () => {
    setCurrentPage('debug-image-gen')
  }

  const handleShowCharacterPage = () => {
    setCurrentPage('character')
  }

  const handleShowStyleGallery = () => {
    setCurrentPage('style-gallery')
  }

  const handleShowLegacyMap = () => {
    setCurrentPage('legacy-map')
  }

  const handleDialogueChange = (dialogueId: string) => {
    setGameState((prev) => {
      if (!prev) throw new Error('gameState is required to change dialogue')

      return {
        ...prev,
        currentDialogueId: dialogueId,
      }
    })
  }

  const handleLocationSelect = (locationId: string) => {
    if (!gameState) throw new Error('gameState is required to select location')
    if (!gameState.mapState) throw new Error('mapState is required')
    if (!bootstrapData) throw new Error('bootstrapData is required to select location')

    const selectedLocation = gameState.mapState.locations.find((location) => location.id === locationId)
    if (!selectedLocation) throw new Error(`Location not found: ${locationId}`)

    const travelMinutes = calculateLocationTravelMinutes(
      gameState.mapState.currentLocationId,
      locationId,
    )
    const arrivalGameTimeDetail = advanceGameTimeDetail(gameState.gameTimeDetail, travelMinutes)

    const eventResult = resolveLocationEvents({
      events: bootstrapData.events,
      dialogueNodes: bootstrapData.dialogueNodes,
      characterStates: bootstrapData.characterStates,
      locationId,
      gameTimeDetail: arrivalGameTimeDetail,
    })

    setGameState({
      ...gameState,
      currentDialogueId: eventResult.mandatoryEvent?.dialogueId ?? gameState.currentDialogueId,
      currentLocation: selectedLocation.name,
      gameTimeDetail: arrivalGameTimeDetail,
      mapState: {
        ...gameState.mapState,
        currentLocationId: locationId,
        visitedLocationIds: Array.from(
          new Set([...gameState.mapState.visitedLocationIds, locationId]),
        ),
        locations: gameState.mapState.locations.map((loc) =>
          loc.id === locationId ? { ...loc, visited: true } : loc,
        ),
      },
    })

    if (eventResult.mandatoryEvent) {
      setEventPanelState(null)
      setCurrentPage('dialogue')
      return
    }

    setEventPanelState({
      locationId,
      locationName: selectedLocation.name,
      ...(selectedLocation.description ? { locationDescription: selectedLocation.description } : {}),
      ...(selectedLocation.backgroundAssetKey ? { locationBackgroundAssetKey: selectedLocation.backgroundAssetKey } : {}),
      optionalEvents: eventResult.optionalEvents,
    })
    setCurrentPage('event')
  }

  const handleStartOptionalEvent = (eventId: string) => {
    if (!eventPanelState) throw new Error('eventPanelState is required to start an event')

    const event = eventPanelState.optionalEvents.find((candidate) => candidate.id === eventId)
    if (!event) throw new Error(`Optional event not found: ${eventId}`)

    handleDialogueChange(event.dialogueId)
    setEventPanelState(null)
    setCurrentPage('dialogue')
  }

  const handleEventBackToMap = () => {
    setEventPanelState(null)
    handleReturnToMap()
  }

  if (bootstrapError) {
    return (
      <main className="black-coated-paper" style={bootstrapStatusStyle}>
        <p>Database bootstrap failed</p>
        <pre>{bootstrapError.message}</pre>
      </main>
    )
  }

  if (!bootstrapData || !gameState) {
    return (
      <main className="black-coated-paper" style={bootstrapStatusStyle}>
        <p>Loading database bootstrap...</p>
      </main>
    )
  }

  if (!gameState.mapState) throw new Error('mapState is required after database bootstrap')
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MusicHandler currentPage={currentPage} />
      <ClickParticles />
      {currentPage === 'dialogue' ? (
        <DialoguePage
          gameState={gameState}
          dialogueNodes={bootstrapData.dialogueNodes}
          characters={bootstrapData.characters}
          currentDialogueId={gameState.currentDialogueId}
          onDialogueChange={handleDialogueChange}
          onShowMap={handleReturnToMap}
          onShowMapSelection={handleShowMapSelection}
          onShowDebugPanel={handleShowDebugPanel}
          onShowCharacterPage={handleShowCharacterPage}
          onShowStyleGallery={handleShowStyleGallery}
        />
      ) : currentPage === 'map' ? (
        <MapPage
          gameState={gameState}
          characters={bootstrapData.characters}
          characterStates={bootstrapData.characterStates}
          areaMapId={activeAreaMapId}
          onLocationSelect={handleLocationSelect}
          onBackToDialogue={handleBackToDialogue}
          onShowMapSelection={handleShowMapSelection}
          onShowDebugPanel={handleShowDebugPanel}
          onShowLegacyMap={handleShowLegacyMap}
        />
      ) : currentPage === 'map-select' ? (
        <MapSelectionPage
          gameState={gameState}
          activeAreaMapId={activeAreaMapId}
          onSelectAreaMap={handleSelectAreaMap}
          onBackToDialogue={handleBackToDialogue}
        />
      ) : currentPage === 'event' ? (
        renderEventPanel(eventPanelState, handleStartOptionalEvent, handleEventBackToMap)
      ) : currentPage === 'legacy-map' ? (
        <LegacyMapPage
          gameState={gameState}
          onLocationSelect={handleLocationSelect}
          onBackToDialogue={handleBackToDialogue}
          onShowDebugPanel={handleShowDebugPanel}
        />
      ) : currentPage === 'style-gallery' ? (
        <StyleGalleryPage onBackToDialogue={handleBackToDialogue} />
      ) : currentPage === 'character' ? (
        <CharacterPage
          onBackToDialogue={handleBackToDialogue}
          characters={bootstrapData.characters}
          characterStates={bootstrapData.characterStates}
          locations={gameState.mapState.locations}
          memories={bootstrapData.memories}
          scheduleBlocks={bootstrapData.scheduleBlocks}
        />
      ) : (
        <DebugImageGenPage onBackToDialogue={handleBackToDialogue} />
      )}
    </div>
  )
}

function renderEventPanel(
  eventPanelState: EventPanelState | null,
  handleStartOptionalEvent: (eventId: string) => void,
  handleEventBackToMap: () => void,
) {
  const activeEventPanelState = requireEventPanelState(eventPanelState)

  return (
    <EventPanel
      locationName={activeEventPanelState.locationName}
      locationDescription={activeEventPanelState.locationDescription}
      locationBackgroundAssetKey={activeEventPanelState.locationBackgroundAssetKey}
      optionalEvents={activeEventPanelState.optionalEvents}
      onStartEvent={handleStartOptionalEvent}
      onBackToMap={handleEventBackToMap}
    />
  )
}

function requireEventPanelState(eventPanelState: EventPanelState | null): EventPanelState {
  if (!eventPanelState) throw new Error('eventPanelState is required for event page')
  return eventPanelState
}

const bootstrapStatusStyle = {
  minHeight: '100vh',
  display: 'grid',
  placeContent: 'center',
  gap: '16px',
  padding: '32px',
  color: '#F4F1F6',
} satisfies CSSProperties
