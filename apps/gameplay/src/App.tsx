import { useState } from 'react'
import DialoguePage from './scenes/dialogue/dialogue-page'
import MapPage from './scenes/map/map-page'
import LegacyMapPage from './scenes/map/legacy-map-page'
import DebugImageGenPage from './tools/debug-image-gen/debug-image-gen-page'
import CharacterPage from './tools/character-page/character-page'
import StyleGalleryPage from './tools/style-gallery/style-gallery-page'
import { mockGameState } from './mocks/game-state'
import ClickParticles from './components/click-particles'

type PageType = 'dialogue' | 'map' | 'legacy-map' | 'debug-image-gen' | 'character' | 'style-gallery'

export default function App() {
  const [gameState, setGameState] = useState(mockGameState)
  const [currentPage, setCurrentPage] = useState<PageType>('dialogue')

  const handleShowMap = () => {
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
    setGameState((prev) => ({
      ...prev,
      currentDialogueId: dialogueId,
    }))
  }

  const handleLocationSelect = (locationId: string) => {
    setGameState((prev) => ({
      ...prev,
      currentLocation: (() => {
        if (!prev.mapState) throw new Error('mapState is required')

        const selectedLocation = prev.mapState.locations.find((location) => location.id === locationId)
        if (!selectedLocation) throw new Error(`Location not found: ${locationId}`)

        return selectedLocation.name
      })(),
      mapState: {
        ...prev.mapState!,
        currentLocationId: locationId,
        visitedLocationIds: Array.from(
          new Set([...prev.mapState!.visitedLocationIds, locationId]),
        ),
        locations: prev.mapState!.locations.map((loc) =>
          loc.id === locationId ? { ...loc, visited: true } : loc,
        ),
      },
    }))

    setCurrentPage('dialogue')
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ClickParticles />
      {currentPage === 'dialogue' ? (
        <DialoguePage
          gameState={gameState}
          currentDialogueId={gameState.currentDialogueId}
          onDialogueChange={handleDialogueChange}
          onShowMap={handleShowMap}
          onShowDebugPanel={handleShowDebugPanel}
          onShowCharacterPage={handleShowCharacterPage}
          onShowStyleGallery={handleShowStyleGallery}
        />
      ) : currentPage === 'map' ? (
        <MapPage
          gameState={gameState}
          onLocationSelect={handleLocationSelect}
          onBackToDialogue={handleBackToDialogue}
          onShowDebugPanel={handleShowDebugPanel}
          onShowLegacyMap={handleShowLegacyMap}
        />
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
        <CharacterPage onBackToDialogue={handleBackToDialogue} />
      ) : (
        <DebugImageGenPage onBackToDialogue={handleBackToDialogue} />
      )}
    </div>
  )
}
