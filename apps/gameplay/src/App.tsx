import { useState } from 'react'
import DialoguePage from './pages/dialogue'
import MapPage from './pages/map'
import { mockGameState } from './mocks/game-state'

type PageType = 'dialogue' | 'map'

export default function App() {
  const [gameState, setGameState] = useState(mockGameState)
  const [currentPage, setCurrentPage] = useState<PageType>('dialogue')

  const handleShowMap = () => {
    setCurrentPage('map')
  }

  const handleBackToDialogue = () => {
    setCurrentPage('dialogue')
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
        <DialoguePage gameState={gameState} onShowMap={handleShowMap} />
      ) : (
        <MapPage
          gameState={gameState}
          onLocationSelect={handleLocationSelect}
          onBackToDialogue={handleBackToDialogue}
        />
      )}
    </div>
  )
}
