import { useEffect, useMemo, useState } from 'react'
import { GameState, Location } from '../../types/game'
import MapShell from './components/map-shell'
import { getArea, getAreaMap } from './data/map-area-data'

interface MapPageProps {
  gameState: GameState
  onLocationSelect: (locationId: string) => void
  onBackToDialogue: () => void
  onShowDebugPanel?: () => void
  onShowLegacyMap?: () => void
}

export default function MapPage({
  gameState,
  onLocationSelect,
  onBackToDialogue,
  onShowDebugPanel,
  onShowLegacyMap,
}: MapPageProps) {
  const mapState = gameState.mapState
  if (!mapState) throw new Error('mapState is required')

  const currentLocation = mapState.locations.find(
    (location) => location.id === mapState.currentLocationId,
  )
  if (!currentLocation) throw new Error(`Location ${mapState.currentLocationId} not found`)

  const areaMapId = currentLocation.areaMapId ?? 'shibuya-crossing'
  const areaMap = useMemo(() => getAreaMap(areaMapId), [areaMapId])
  const area = useMemo(() => getArea(areaMap.areaId), [areaMap.areaId])
  const [focusedLocation, setFocusedLocation] = useState<Location | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') onBackToDialogue()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBackToDialogue])

  return (
    <MapShell
      area={area}
      areaMap={areaMap}
      locations={mapState.locations}
      currentLocation={currentLocation}
      focusedLocation={focusedLocation}
      onLocationSelect={onLocationSelect}
      onBuildingFocus={setFocusedLocation}
      onBackToDialogue={onBackToDialogue}
      onShowDebugPanel={onShowDebugPanel}
      onShowLegacyMap={onShowLegacyMap}
    />
  )
}
