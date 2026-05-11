import { Location } from '../../../types/game'
import MapAreaSvg from './map-area-svg'
import { MapArea, MapAreaMap, mapAttribution } from '../data/map-area-data'

interface MapShellProps {
  area: MapArea
  areaMap: MapAreaMap
  locations: Location[]
  currentLocation: Location
  focusedLocation: Location | null
  onLocationSelect: (locationId: string) => void
  onBuildingFocus: (location: Location | null) => void
  onBackToDialogue: () => void
  onShowDebugPanel?: () => void
  onShowLegacyMap?: () => void
}

export default function MapShell({
  area,
  areaMap,
  locations,
  currentLocation,
  focusedLocation,
  onLocationSelect,
  onBuildingFocus,
  onBackToDialogue,
  onShowDebugPanel,
  onShowLegacyMap,
}: MapShellProps) {
  const previewLocation = focusedLocation ?? currentLocation
  const previewStatus = previewLocation.id === currentLocation.id
    ? 'Current location'
    : previewLocation.visited
      ? 'Visited'
      : 'Undiscovered'

  return (
    <div className="map-scene">
      <header className="map-status black-coated-paper">
        <div className="map-status__identity">
          <span className="map-status__eyebrow">{area.name}</span>
          <strong>{areaMap.name}</strong>
        </div>

        <div className="map-status__current" aria-label={`Current location: ${currentLocation.name}`}>
          <span>Now</span>
          <strong>{currentLocation.name}</strong>
        </div>

        <div className="map-status__actions">
          {onShowLegacyMap && (
            <button className="map-tool-button" type="button" onClick={onShowLegacyMap}>
              Legacy
            </button>
          )}
          {onShowDebugPanel && (
            <button className="map-tool-button" type="button" onClick={onShowDebugPanel}>
              Debug
            </button>
          )}
          <button className="map-tool-button map-tool-button--primary" type="button" onClick={onBackToDialogue}>
            Back
          </button>
        </div>
      </header>

      <main className="map-stage">
        <div className="map-plate" aria-label={`${areaMap.name} city scan`}>
          <div className="map-plate__vignette" />
          <MapAreaSvg
            areaMap={areaMap}
            locations={locations}
            currentLocationId={currentLocation.id}
            onLocationSelect={onLocationSelect}
            onBuildingFocus={onBuildingFocus}
          />
        </div>

        <section
          className="map-location-card"
          aria-live="polite"
        >
          <div className="map-location-card__meta">
            <span>{focusedLocation ? 'Building' : 'Selected'}</span>
            <span>{previewStatus}</span>
          </div>
          <h1>{previewLocation.name}</h1>
          {previewLocation.description && (
            <p>{previewLocation.description}</p>
          )}
          {previewLocation.id !== currentLocation.id && (
            <div className="map-location-card__hint">Enter location</div>
          )}
        </section>

        <div className="map-attribution">
          {mapAttribution}
        </div>
      </main>
    </div>
  )
}
