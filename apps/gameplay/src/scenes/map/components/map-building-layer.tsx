import { KeyboardEvent, MouseEvent, useState } from 'react'
import { Location } from '../../../types/game'
import { MapAreaMap, getLocationForMapBuilding } from '../data/map-area-data'

interface MapBuildingLayerProps {
  areaMap: MapAreaMap
  locations: Location[]
  currentLocationId: string
  onLocationPick: (locationId: string) => void
  onBuildingFocus: (location: Location | null) => void
}

export default function MapBuildingLayer({
  areaMap,
  locations,
  currentLocationId,
  onLocationPick,
  onBuildingFocus,
}: MapBuildingLayerProps) {
  const [activeBuildingId, setActiveBuildingId] = useState<string | null>(null)

  const selectBuilding = (buildingId: string) => {
    const building = areaMap.buildings.find((candidate) => candidate.id === buildingId)
    if (!building) throw new Error(`Building ${buildingId} not found`)

    const location = getLocationForMapBuilding(locations, building)
    onLocationPick(location.id)
  }

  const handleClick = (event: MouseEvent<SVGGElement>, buildingId: string) => {
    event.stopPropagation()
    selectBuilding(buildingId)
  }

  const handleKeyDown = (event: KeyboardEvent<SVGGElement>, buildingId: string) => {
    if (event.code !== 'Enter' && event.code !== 'Space') return
    event.preventDefault()
    selectBuilding(buildingId)
  }

  return (
    <g>
      {areaMap.buildings.map((building) => {
        const location = getLocationForMapBuilding(locations, building)
        const isCurrent = location.id === currentLocationId
        const isActive = activeBuildingId === building.id
        const isVisited = location.visited
        const labelWidth = Math.min(Math.max(location.name.length * 7.2 + 18, 78), 190)
        const stateClassName = isCurrent
          ? 'map-building map-building--current'
          : isActive
            ? 'map-building map-building--active'
            : isVisited
              ? 'map-building map-building--visited'
              : 'map-building'

        return (
          <g
            key={building.id}
            role="button"
            tabIndex={0}
            aria-label={`${location.name}${isCurrent ? ' current location' : ''}`}
            onClick={(event) => handleClick(event, building.id)}
            onKeyDown={(event) => handleKeyDown(event, building.id)}
            onMouseEnter={() => {
              setActiveBuildingId(building.id)
              onBuildingFocus(location)
            }}
            onMouseLeave={() => {
              setActiveBuildingId(null)
              onBuildingFocus(null)
            }}
            onFocus={() => {
              setActiveBuildingId(building.id)
              onBuildingFocus(location)
            }}
            onBlur={() => {
              setActiveBuildingId(null)
              onBuildingFocus(null)
            }}
            style={{ cursor: 'pointer', outline: 'none' }}
          >
            <polygon
              points={building.points}
              className={stateClassName}
            />
            {(isActive || isCurrent) && (
              <polygon
                points={building.points}
                className={isCurrent ? 'map-building-glow map-building-glow--current' : 'map-building-glow'}
              />
            )}
            <g className="map-building-label" style={{ pointerEvents: 'none' }}>
              <rect
                x={building.labelX - labelWidth / 2}
                y={building.labelY - 13}
                width={labelWidth}
                height="26"
                rx="7"
                className={isCurrent ? 'map-building-label__plate map-building-label__plate--current' : 'map-building-label__plate'}
              />
              <text
                x={building.labelX}
                y={building.labelY + 4}
                textAnchor="middle"
                textLength={labelWidth - 16}
                lengthAdjust="spacingAndGlyphs"
                className={isCurrent ? 'map-building-label__text map-building-label__text--current' : 'map-building-label__text'}
              >
                {location.name}
              </text>
            </g>
          </g>
        )
      })}
    </g>
  )
}
