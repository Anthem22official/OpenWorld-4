import { KeyboardEvent, useState } from 'react'
import { Location } from '../types/game'
import { MapAreaMap, getLocationForBuilding } from './map-area-data'

interface MapBuildingLayerProps {
  areaMap: MapAreaMap
  locations: Location[]
  currentLocationId: string
  onLocationSelect: (locationId: string) => void
  onBuildingFocus: (location: Location | null) => void
}

export default function MapBuildingLayer({
  areaMap,
  locations,
  currentLocationId,
  onLocationSelect,
  onBuildingFocus,
}: MapBuildingLayerProps) {
  const [activeBuildingId, setActiveBuildingId] = useState<string | null>(null)

  const selectBuilding = (buildingId: string) => {
    const location = getLocationForBuilding(locations, areaMap.id, buildingId)
    onLocationSelect(location.id)
  }

  const handleKeyDown = (event: KeyboardEvent<SVGGElement>, buildingId: string) => {
    if (event.code !== 'Enter' && event.code !== 'Space') return
    event.preventDefault()
    selectBuilding(buildingId)
  }

  return (
    <g>
      {areaMap.buildings.map((building) => {
        const location = getLocationForBuilding(locations, areaMap.id, building.id)
        const isCurrent = location.id === currentLocationId
        const isActive = activeBuildingId === building.id
        const fill = isCurrent
          ? 'rgba(184, 134, 11, 0.72)'
          : isActive
            ? 'rgba(159, 122, 234, 0.72)'
            : 'rgba(30, 41, 59, 0.86)'

        return (
          <g
            key={building.id}
            role="button"
            tabIndex={0}
            aria-label={`${location.name}${isCurrent ? ' current location' : ''}`}
            onClick={() => selectBuilding(building.id)}
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
              fill={fill}
              stroke={isCurrent ? '#F7C948' : isActive ? '#C4B5FD' : '#64748B'}
              strokeWidth={isActive || isCurrent ? 5 : 3}
              style={{
                transition: 'fill 160ms ease, stroke 160ms ease, stroke-width 160ms ease',
                filter: isActive || isCurrent ? 'drop-shadow(0 0 12px rgba(159, 122, 234, 0.42))' : 'none',
              }}
            />
            <circle
              cx={building.labelX}
              cy={building.labelY}
              r={isCurrent ? 9 : 6}
              fill={isCurrent ? '#F7C948' : '#C4B5FD'}
              stroke="#0F172A"
              strokeWidth="3"
              style={{ pointerEvents: 'none' }}
            />
          </g>
        )
      })}
    </g>
  )
}
