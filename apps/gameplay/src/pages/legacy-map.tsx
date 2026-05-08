import { useEffect } from 'react'
import { GameState } from '../types/game'
import StatusBar from '../components/status-bar'
import MapCanvas from '../components/map-canvas'
import LocationPoints from '../components/location-points'
import MapNavButton from '../components/map-nav-button'

interface LegacyMapPageProps {
  gameState: GameState
  onLocationSelect: (locationId: string) => void
  onBackToDialogue: () => void
  onShowDebugPanel?: () => void
}

export default function LegacyMapPage({
  gameState,
  onLocationSelect,
  onBackToDialogue,
  onShowDebugPanel,
}: LegacyMapPageProps) {
  const mapState = gameState.mapState
  if (!mapState) throw new Error('mapState is required')

  const currentLocation = mapState.locations.find(
    (location) => location.id === mapState.currentLocationId,
  )
  if (!currentLocation) throw new Error(`Location ${mapState.currentLocationId} not found`)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') onBackToDialogue()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBackToDialogue])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      <StatusBar currentLocationName={currentLocation.name} />
      <MapCanvas>
        <LocationPoints
          locations={mapState.locations}
          currentLocationId={mapState.currentLocationId}
          onLocationClick={onLocationSelect}
        />
        <MapNavButton
          onBackToDialogue={onBackToDialogue}
          onShowDebugPanel={onShowDebugPanel}
        />
      </MapCanvas>
    </div>
  )
}
