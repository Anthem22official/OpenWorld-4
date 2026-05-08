import { Location } from '../types/game'
import MapBuildingLayer from './map-building-layer'
import { MapAreaMap } from './map-area-data'

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
      <desc>Local optimized SVG map with clickable building footprints.</desc>
      <defs>
        <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94A3B8" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1000" height="680" fill="#07111F" />
      <rect width="1000" height="680" fill="url(#map-grid)" />

      <g fill="#101827" stroke="#334155" strokeWidth="2">
        {areaMap.backgroundBuildings.map((points) => (
          <polygon key={points} points={points} />
        ))}
      </g>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 0 310 C 197 292, 358 287, 501 315 C 674 349, 826 354, 1000 335" stroke="#1E293B" strokeWidth="120" />
        <path d="M 445 0 C 435 151, 437 284, 474 397 C 507 496, 546 596, 594 680" stroke="#1E293B" strokeWidth="116" />
        <path d="M 0 626 C 166 549, 314 487, 448 417 C 613 331, 743 234, 1000 98" stroke="#172033" strokeWidth="84" />
        <path d="M 0 310 C 197 292, 358 287, 501 315 C 674 349, 826 354, 1000 335" stroke="#64748B" strokeOpacity="0.32" strokeWidth="3" />
        <path d="M 445 0 C 435 151, 437 284, 474 397 C 507 496, 546 596, 594 680" stroke="#64748B" strokeOpacity="0.32" strokeWidth="3" />
        <path d="M 0 626 C 166 549, 314 487, 448 417 C 613 331, 743 234, 1000 98" stroke="#64748B" strokeOpacity="0.26" strokeWidth="3" />
      </g>

      <g fill="#F8FAFC" opacity="0.86">
        <polygon points="422,308 456,310 404,386 370,382" />
        <polygon points="475,314 510,319 572,410 538,416" />
        <polygon points="423,388 463,329 506,418 466,481" />
        <polygon points="552,317 598,321 466,515 423,507" />
        <polygon points="337,292 382,291 521,349 487,367" />
      </g>

      <g fill="none" stroke="#38BDF8" strokeOpacity="0.35" strokeWidth="3">
        <path d="M 60 624 C 234 544, 394 462, 530 378 C 666 294, 792 213, 945 127" />
        <path d="M 480 52 C 472 186, 477 315, 512 433 C 535 508, 570 588, 616 654" />
      </g>

      <MapBuildingLayer
        areaMap={areaMap}
        locations={locations}
        currentLocationId={currentLocationId}
        onLocationSelect={onLocationSelect}
        onBuildingFocus={onBuildingFocus}
      />

      <g fontFamily="-apple-system, Segoe UI, sans-serif" fontSize="18" fontWeight="600" fill="#CBD5E1" opacity="0.72">
        <text x="414" y="296">Shibuya Crossing</text>
        <text x="116" y="395">Dogenzaka</text>
        <text x="682" y="356">Jinnan</text>
        <text x="116" y="650">Hachiko Exit</text>
      </g>
    </svg>
  )
}
