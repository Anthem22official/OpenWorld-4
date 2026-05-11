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

export interface MapArea {
  id: string
  name: string
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
  viewBox: string
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
}

const interactiveOsmIds = new Set(
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
    defaultAreaMapId: 'shibuya-crossing',
  },
]

export const mapAreaMaps: MapAreaMap[] = [
  {
    id: 'shibuya-crossing',
    areaId: 'shibuya',
    name: 'Shibuya Crossing',
    viewBox: '0 0 1000 680',
    center: shibuyaCrossingOsmCenter,
    bounds: shibuyaCrossingOsmBounds,
    buildings: shibuyaCrossingClickableBuildings,
    backgroundBuildings: shibuyaCrossingBuildings.filter(
      (building) => !interactiveOsmIds.has(building.osmId),
    ),
    roads: shibuyaCrossingRoads,
    rails: shibuyaCrossingRails,
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
