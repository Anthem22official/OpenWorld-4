import { Location } from '../../../types/game'
import MapBuildingLayer from './map-building-layer'
import { MapAreaMap } from '../data/map-area-data'

interface MapAreaSvgProps {
  areaMap: MapAreaMap
  locations: Location[]
  currentLocationId: string
  onLocationSelect: (locationId: string) => void
  onBuildingFocus: (location: Location | null) => void
}

export default function MapAreaSvg({
  areaMap,
  locations,
  currentLocationId,
  onLocationSelect,
  onBuildingFocus,
}: MapAreaSvgProps) {
  return (
    <svg
      viewBox={areaMap.viewBox}
      role="img"
      aria-label={`${areaMap.name} local area map`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        background: '#07111F',
      }}
    >
      <title>{areaMap.name}</title>
      <desc>
        Local optimized SVG map generated from OpenStreetMap building, road,
        and rail ways inside the active area bounds.
      </desc>
      <defs>
        <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94A3B8" strokeOpacity="0.045" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1000" height="680" fill="#07111F" />
      <rect width="1000" height="680" fill="url(#map-grid)" />

      <g fill="#101827" stroke="#334155" strokeWidth="2">
        {areaMap.backgroundBuildings.map((building) => (
          <polygon
            key={building.osmId}
            points={building.points}
          />
        ))}
      </g>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {areaMap.roads.map((road) => (
          <path
            key={`${road.kind}-${road.path}`}
            d={road.path}
            stroke={road.kind === 'footway' || road.kind === 'path' ? '#CBD5E1' : '#475569'}
            strokeOpacity={road.kind === 'footway' || road.kind === 'path' ? 0.42 : 0.34}
            strokeWidth={road.kind === 'tertiary' ? 9 : road.kind === 'pedestrian' ? 7 : 4}
          />
        ))}
        {areaMap.rails.map((rail) => (
          <path
            key={`${rail.kind}-${rail.path}`}
            d={rail.path}
            stroke={rail.kind === 'subway' ? '#38BDF8' : '#9F7AEA'}
            strokeOpacity={0.55}
            strokeWidth={rail.kind === 'subway' ? 5 : 4}
          />
        ))}
      </g>

      <MapBuildingLayer
        areaMap={areaMap}
        locations={locations}
        currentLocationId={currentLocationId}
        onLocationSelect={onLocationSelect}
        onBuildingFocus={onBuildingFocus}
      />

      <g fontFamily="-apple-system, Segoe UI, sans-serif" fontSize="18" fontWeight="600" fill="#CBD5E1" opacity="0.72">
        <text x="460" y="345">Shibuya Crossing</text>
        <text x="160" y="520">Dogenzaka</text>
        <text x="700" y="180">Jinnan</text>
        <text x="360" y="585">Hachiko side</text>
      </g>
    </svg>
  )
}
