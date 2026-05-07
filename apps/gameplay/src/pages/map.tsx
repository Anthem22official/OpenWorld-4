import { GameState } from '../types/game'
import StatusBar from '../components/status-bar'
import MapCanvas from '../components/map-canvas'
import LocationPoints from '../components/location-points'
import MapNavButton from '../components/map-nav-button'

interface MapPageProps {
  gameState: GameState
  onLocationSelect: (locationId: string) => void
  onBackToDialogue: () => void
}

export default function MapPage({
  gameState,
  onLocationSelect,
  onBackToDialogue,
}: MapPageProps) {
  const mapState = gameState.mapState
  if (!mapState) throw new Error('mapState is required')

  const currentLocation = mapState.locations.find(
    (l) => l.id === mapState.currentLocationId,
  )
  if (!currentLocation) throw new Error(`Location ${mapState.currentLocationId} not found`)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <StatusBar currentLocationName={currentLocation.name} />
      <MapCanvas>
        <LocationPoints
          locations={mapState.locations}
          currentLocationId={mapState.currentLocationId}
          onLocationClick={onLocationSelect}
        />
        <MapNavButton onBackToDialogue={onBackToDialogue} />
      </MapCanvas>
    </div>
  )
}
