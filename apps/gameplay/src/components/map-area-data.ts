import { Location } from '../types/game'

export interface MapArea {
  id: string
  name: string
  defaultAreaMapId: string
}

export interface MapBuilding {
  id: string
  name: string
  points: string
  labelX: number
  labelY: number
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
  buildings: MapBuilding[]
  backgroundBuildings: string[]
}

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
    center: {
      lat: 35.6595,
      lng: 139.7005,
    },
    buildings: [
      {
        id: 'shibuya-109',
        name: 'Shibuya 109',
        points: '158,111 322,83 357,237 190,265',
        labelX: 254,
        labelY: 178,
      },
      {
        id: 'qfront',
        name: 'QFRONT / Tsutaya',
        points: '566,98 804,124 780,283 545,260',
        labelX: 665,
        labelY: 190,
      },
      {
        id: 'magnet',
        name: 'MAGNET by SHIBUYA109',
        points: '674,394 867,424 831,592 641,557',
        labelX: 748,
        labelY: 497,
      },
      {
        id: 'hachiko-station',
        name: 'Shibuya Station / Hachiko',
        points: '98,421 349,387 381,589 132,622',
        labelX: 238,
        labelY: 514,
      },
    ],
    backgroundBuildings: [
      '62,94 130,79 148,190 76,204',
      '366,62 509,79 489,184 386,174',
      '827,139 953,158 930,287 812,275',
      '416,406 572,384 593,520 445,544',
      '474,235 538,242 529,318 468,310',
      '371,126 459,139 444,228 377,220',
      '854,334 962,361 932,493 829,467',
      '44,308 147,292 164,378 62,397',
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

export function getLocationForBuilding(
  locations: Location[],
  areaMapId: string,
  buildingId: string,
): Location {
  const location = locations.find(
    (candidate) =>
      candidate.mapKind === 'building-shape' &&
      candidate.areaMapId === areaMapId &&
      candidate.buildingId === buildingId,
  )
  if (!location) throw new Error(`Location for building ${buildingId} not found`)
  return location
}
