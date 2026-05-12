import LiquidGlass from 'liquid-glass-react'
import { Character, CharacterState, Location } from '../../../types/game'
import MapAreaSvg from './map-area-svg'
import { MapArea, MapAreaMap, mapAttribution } from '../data/map-area-data'

interface MapShellProps {
  area: MapArea
  areaMap: MapAreaMap
  locations: Location[]
  characters: Character[]
  characterStates: CharacterState[]
  currentLocation: Location
  focusedLocation: Location | null
  selectedLocation: Location | null
  onLocationPick: (locationId: string) => void
  onLocationGo: (locationId: string) => void
  onMapDismiss: () => void
  onBuildingFocus: (location: Location | null) => void
  onBackToDialogue: () => void
  onShowMapSelection: () => void
  onShowDebugPanel?: () => void
  onShowLegacyMap?: () => void
}

export default function MapShell({
  area,
  areaMap,
  locations,
  characters,
  characterStates,
  currentLocation,
  focusedLocation,
  selectedLocation,
  onLocationPick,
  onLocationGo,
  onMapDismiss,
  onBuildingFocus,
  onBackToDialogue,
  onShowMapSelection,
  onShowDebugPanel,
  onShowLegacyMap,
}: MapShellProps) {
  const panelStatus = selectedLocation?.id === currentLocation.id
    ? 'Current location'
    : selectedLocation?.visited
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
          <button className="map-tool-button" type="button" onClick={onShowMapSelection}>
            Area Selection
          </button>
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
            characters={characters}
            characterStates={characterStates}
            currentLocationId={currentLocation.id}
            onLocationPick={onLocationPick}
            onMapDismiss={onMapDismiss}
            onBuildingFocus={onBuildingFocus}
          />
        </div>

        {selectedLocation && (
          <section
            className="map-location-card black-coated-paper"
            aria-live="polite"
          >
            <div className="map-location-card__meta">
              <span>{focusedLocation?.id === selectedLocation.id ? 'Building' : 'Location'}</span>
              <span>{panelStatus}</span>
            </div>
            <div className="map-location-card__image" aria-label={`${selectedLocation.name} image preview`}>
              {selectedLocation.backgroundAssetKey && (
                <img
                  src={resolveLocationBackgroundUrl(selectedLocation.backgroundAssetKey)}
                  alt=""
                  aria-hidden="true"
                />
              )}
              <span>{selectedLocation.name}</span>
            </div>
            <h1>{selectedLocation.name}</h1>
            {selectedLocation.description && (
              <p>{selectedLocation.description}</p>
            )}
            <div className="map-location-card__go-glass">
              <LiquidGlass
                displacementScale={58}
                blurAmount={0.06}
                saturation={136}
                aberrationIntensity={1.8}
                elasticity={0.04}
                cornerRadius={999}
                padding="0"
                style={{ position: 'absolute', top: '50%', left: '50%' }}
              >
                <button
                  className="map-location-card__go-button"
                  type="button"
                  onClick={() => onLocationGo(selectedLocation.id)}
                >
                  Go
                </button>
              </LiquidGlass>
            </div>
          </section>
        )}

        <div className="map-attribution">
          {mapAttribution}
        </div>
      </main>
    </div>
  )
}

function resolveLocationBackgroundUrl(backgroundAssetKey: string): string {
  const trimmedKey = backgroundAssetKey.trim()
  if (trimmedKey.length === 0) throw new Error('Location background asset key cannot be empty')
  if (trimmedKey.startsWith('/')) throw new Error('Location background asset key must be a storage key, not a public URL')
  if (trimmedKey.includes('..')) throw new Error('Location background asset key cannot contain parent directory segments')
  if (!trimmedKey.endsWith('.jpg') && !trimmedKey.endsWith('.jpeg') && !trimmedKey.endsWith('.png')) {
    throw new Error('Location background asset key must reference an image file')
  }

  return resolveAssetUrl(trimmedKey)
}

function resolveAssetUrl(assetKey: string): string {
  const assetBaseUrl = getViteEnvValue('VITE_ASSET_BASE_URL')
  const baseUrl = assetBaseUrl || '/assets/database'

  return `${baseUrl.replace(/\/+$/, '')}/${assetKey}`
}

function getViteEnvValue(name: string): string | undefined {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
  const value = env?.[name]?.trim()
  return value && value.length > 0 ? value : undefined
}
