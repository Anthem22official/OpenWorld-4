import { useState } from 'react'
import DialoguePage from './pages/dialogue'
import MapPage from './pages/map'
import LegacyMapPage from './pages/legacy-map'
import DebugImageGenPage from './pages/debug-image-gen'
import StyleGalleryPage from './pages/style-gallery'
import { mockGameState } from './mocks/game-state'

type PageType = 'dialogue' | 'map' | 'legacy-map' | 'debug-image-gen' | 'style-gallery'

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

  const handleShowStyleGallery = () => {
    setCurrentPage('style-gallery')
  }

  const handleShowLegacyMap = () => {
    setCurrentPage('legacy-map')
  }

  const handleLocationSelect = (locationId: string) => {
    if (!gameState.mapState) throw new Error('mapState is required')

    setGameState((prev) => ({
      ...prev,
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
      {currentPage === 'dialogue' ? (
        <DialoguePage
          gameState={gameState}
          onShowMap={handleShowMap}
          onShowDebugPanel={handleShowDebugPanel}
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
      ) : (
        <DebugImageGenPage onBackToDialogue={handleBackToDialogue} />
      )}
    </div>
  )
}
