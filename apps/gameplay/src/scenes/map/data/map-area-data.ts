import { Location } from '../../../types/game'
import {
  OsmRenderLine,
  OsmRenderPolygon,
  shibuyaCrossingBuildings,
  shibuyaCrossingInteractiveBuildings,
  shibuyaCrossingOsmBounds,
  shibuyaCrossingOsmCenter,
  shibuyaCrossingRails,
  shibuyaCrossingRoads,
} from './map-osm-source'
import {
  ebisuStationGardenPlaceBuildings,
  ebisuStationGardenPlaceOsmBounds,
  ebisuStationGardenPlaceOsmCenter,
  ebisuStationGardenPlaceViewBox,
} from './ebisu-station-osm-source'

export interface MapArea {
  id: string
  name: string
  description: string
  defaultAreaMapId: string
}

export interface MapBuilding extends OsmRenderPolygon {
  id: string
  locationId: string
}

export interface MapAreaMap {
  id: string
  areaId: string
  name: string
  description: string
  viewBox: string
  initialViewBox?: string
  center: {
    lat: number
    lng: number
  }
  bounds: {
    south: number
    west: number
    north: number
    east: number
  }
  buildings: MapBuilding[]
  backgroundBuildings: OsmRenderPolygon[]
  roads: OsmRenderLine[]
  rails: OsmRenderLine[]
  labels: MapLabel[]
}

export interface MapLabel {
  id: string
  text: string
  x: number
  y: number
}

const shibuyaCrossingInteractiveOsmIds = new Set(
  shibuyaCrossingInteractiveBuildings.map((building) => building.osmId),
)

const shibuyaCrossingClickableBuildings: MapBuilding[] =
  shibuyaCrossingInteractiveBuildings.map((interactiveBuilding) => {
    const sourceBuilding = shibuyaCrossingBuildings.find(
      (building) => building.osmId === interactiveBuilding.osmId,
    )
    if (!sourceBuilding) {
      throw new Error(`OSM building ${interactiveBuilding.osmId} not found`)
    }

    return {
      ...sourceBuilding,
      id: interactiveBuilding.buildingId,
      locationId: interactiveBuilding.locationId,
      name: interactiveBuilding.label,
    }
  })

export const mapAreas: MapArea[] = [
  {
    id: 'shibuya',
    name: 'Shibuya',
    description: 'Crossing-side retail, station flow, and first-night character routes.',
    defaultAreaMapId: 'shibuya-crossing',
  },
  {
    id: 'ebisu',
    name: 'Ebisu',
    description: 'Station exits, gallery towers, and polished nightlife south of Shibuya.',
    defaultAreaMapId: 'ebisu-station-garden-place',
  },
]

export const mapAreaMaps: MapAreaMap[] = [
  {
    id: 'shibuya-crossing',
    areaId: 'shibuya',
    name: 'Shibuya Crossing',
    description: 'The active MVP social map around Shibuya 109, QFRONT, MAGNET, and Hachiko.',
    viewBox: '0 0 1000 680',
    center: shibuyaCrossingOsmCenter,
    bounds: shibuyaCrossingOsmBounds,
    buildings: shibuyaCrossingClickableBuildings,
    backgroundBuildings: shibuyaCrossingBuildings.filter(
      (building) => !shibuyaCrossingInteractiveOsmIds.has(building.osmId),
    ),
    roads: shibuyaCrossingRoads,
    rails: shibuyaCrossingRails,
    labels: [
      { id: 'shibuya-crossing', text: 'Shibuya Crossing', x: 460, y: 345 },
      { id: 'dogenzaka', text: 'Dogenzaka', x: 160, y: 520 },
      { id: 'jinnan', text: 'Jinnan', x: 700, y: 180 },
      { id: 'hachiko-side', text: 'Hachiko side', x: 360, y: 585 },
    ],
  },
  {
    id: 'ebisu-station-garden-place',
    areaId: 'ebisu',
    name: 'Ebisu Station / Garden Place',
    description: 'A building-only OSM base map spanning Ebisu Station, LIQUIDROOM, and Yebisu Garden Place.',
    viewBox: ebisuStationGardenPlaceViewBox,
    initialViewBox: '187 662 781 531',
    center: ebisuStationGardenPlaceOsmCenter,
    bounds: ebisuStationGardenPlaceOsmBounds,
    buildings: [],
    backgroundBuildings: ebisuStationGardenPlaceBuildings,
    roads: [],
    rails: [],
    labels: [
      { id: 'liquidroom', text: 'LIQUIDROOM', x: 842, y: 250 },
      { id: 'ebisu-station', text: 'Ebisu Station', x: 577, y: 927 },
      { id: 'garden-place', text: 'Yebisu Garden Place', x: 1703, y: 2259 },
    ],
  },
]

export const mapAttribution = '© OpenStreetMap contributors  © OpenMapTiles'

export function getAreaMap(areaMapId: string): MapAreaMap {
  const areaMap = mapAreaMaps.find((candidate) => candidate.id === areaMapId)
  if (!areaMap) throw new Error(`Area map ${areaMapId} not found`)
  return areaMap
}

export function getArea(areaId: string): MapArea {
  const area = mapAreas.find((candidate) => candidate.id === areaId)
  if (!area) throw new Error(`Area ${areaId} not found`)
  return area
}

export function getAreaMapsForArea(areaId: string): MapAreaMap[] {
  const areaMaps = mapAreaMaps.filter((candidate) => candidate.areaId === areaId)
  if (areaMaps.length === 0) throw new Error(`Area ${areaId} has no area maps`)
  return areaMaps
}

export function getLocationForMapBuilding(
  locations: Location[],
  building: MapBuilding,
): Location {
  const location = locations.find((candidate) => candidate.id === building.locationId)
  if (!location) throw new Error(`Location ${building.locationId} not found`)

  if (
    location.mapKind !== 'building-shape' ||
    location.buildingId !== building.id
  ) {
    throw new Error(`Location ${building.locationId} is not linked to building ${building.id}`)
  }

  return location
}
