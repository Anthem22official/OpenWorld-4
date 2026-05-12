import type { Character, CharacterState, Location } from '../../../types/game'
import type { MapAreaMap, MapBuilding } from '../data/map-area-data'

const CHARACTER_ICON_SIZE = 42
const CHARACTER_ICON_GAP = 34
const CHARACTER_ICON_Y_OFFSET = 48
interface MapCharacterLayerProps {
  areaMap: MapAreaMap
  characters: Character[]
  characterStates: CharacterState[]
  locations: Location[]
  currentLocationId: string
}

interface CharacterMarker {
  character: Character
  location: Location
  building: MapBuilding
}

export default function MapCharacterLayer({
  areaMap,
  characters,
  characterStates,
  locations,
  currentLocationId,
}: MapCharacterLayerProps) {
  const markers = resolveCharacterMarkers(areaMap, characters, characterStates, locations)
  const markersByLocation = groupMarkersByLocation(markers)

  return (
    <g className="map-character-layer" aria-label="Character positions">
      {Array.from(markersByLocation.entries()).map(([locationId, locationMarkers]) =>
        locationMarkers.map((marker, index) => {
          const offsetX = (index - (locationMarkers.length - 1) / 2) * CHARACTER_ICON_GAP
          const x = marker.building.labelX + offsetX
          const y = marker.building.labelY - CHARACTER_ICON_Y_OFFSET
          const isCurrentLocation = marker.location.id === currentLocationId
          const clipPathId = `map-character-icon-${marker.character.id}`

          return (
            <g
              key={`${locationId}-${marker.character.id}`}
              role="img"
              aria-label={`${marker.character.name} at ${marker.location.name}`}
              className={isCurrentLocation ? 'map-character-marker map-character-marker--current' : 'map-character-marker'}
              transform={`translate(${x} ${y})`}
            >
              <title>{`${marker.character.name} at ${marker.location.name}`}</title>
              <clipPath id={clipPathId}>
                <circle cx="0" cy="0" r={CHARACTER_ICON_SIZE / 2 - 4} />
              </clipPath>
              <circle className="map-character-marker__halo" cx="0" cy="0" r={CHARACTER_ICON_SIZE / 2 + 5} />
              <circle className="map-character-marker__backing" cx="0" cy="0" r={CHARACTER_ICON_SIZE / 2 + 1} />
              <image
                href={getCharacterIconUrl(marker.character.id)}
                x={-CHARACTER_ICON_SIZE / 2 + 4}
                y={-CHARACTER_ICON_SIZE / 2 + 4}
                width={CHARACTER_ICON_SIZE - 8}
                height={CHARACTER_ICON_SIZE - 8}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipPathId})`}
              />
              <circle className="map-character-marker__rim" cx="0" cy="0" r={CHARACTER_ICON_SIZE / 2 - 4} />
            </g>
          )
        }),
      )}
    </g>
  )
}

function resolveCharacterMarkers(
  areaMap: MapAreaMap,
  characters: Character[],
  characterStates: CharacterState[],
  locations: Location[],
): CharacterMarker[] {
  return characters
    .filter((character) => character.activated)
    .map((character): CharacterMarker | null => {
      const state = characterStates.find((candidate) => candidate.character_id === character.id)
      if (!state) throw new Error(`Character state not found: ${character.id}`)

      const location = locations.find((candidate) => candidate.id === state.location_id)
      if (!location) {
        throw new Error(`Location ${state.location_id} not found for character ${character.id}`)
      }

      if (location.areaMapId !== areaMap.id) return null

      const building = areaMap.buildings.find((candidate) => candidate.locationId === location.id)
      if (!building) {
        throw new Error(`Location ${location.id} is not linked to active map ${areaMap.id}`)
      }

      if (
        location.mapKind !== 'building-shape' ||
        location.buildingId !== building.id
      ) {
        throw new Error(`Location ${location.id} is not linked to building ${building.id}`)
      }

      return { character, location, building }
    })
    .filter((marker): marker is CharacterMarker => marker !== null)
}

function groupMarkersByLocation(markers: CharacterMarker[]): Map<string, CharacterMarker[]> {
  const groupedMarkers = new Map<string, CharacterMarker[]>()

  for (const marker of markers) {
    const locationMarkers = groupedMarkers.get(marker.location.id) || []
    locationMarkers.push(marker)
    groupedMarkers.set(marker.location.id, locationMarkers)
  }

  return groupedMarkers
}

function getCharacterIconUrl(characterId: string): string {
  const trimmedId = characterId.trim()
  if (trimmedId.length === 0) throw new Error('Character icon id cannot be empty')
  if (trimmedId.includes('/') || trimmedId.includes('\\') || trimmedId.includes('..')) {
    throw new Error(`Invalid character icon id: ${characterId}`)
  }

  return resolveAssetUrl(`characters/${trimmedId}/icons/header.png`)
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
