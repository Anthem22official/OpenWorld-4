import { useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEvent, PointerEvent } from 'react'
import { Character, CharacterState, Location } from '../../../types/game'
import MapBuildingLayer from './map-building-layer'
import MapCharacterLayer from './map-character-layer'
import { MapAreaMap } from '../data/map-area-data'

const MAP_DRAG_ZOOM = 1.28
const DRAG_CLICK_THRESHOLD_PX = 5
const CLICK_SUPPRESSION_MS = 180

interface MapViewBox {
  x: number
  y: number
  width: number
  height: number
}

interface DragSession {
  pointerId: number
  startClientX: number
  startClientY: number
  startViewBox: MapViewBox
  hasMoved: boolean
  hasPointerCapture: boolean
}

interface MapAreaSvgProps {
  areaMap: MapAreaMap
  locations: Location[]
  characters: Character[]
  characterStates: CharacterState[]
  currentLocationId: string
  onLocationPick: (locationId: string) => void
  onMapDismiss: () => void
  onBuildingFocus: (location: Location | null) => void
}

export default function MapAreaSvg({
  areaMap,
  locations,
  characters,
  characterStates,
  currentLocationId,
  onLocationPick,
  onMapDismiss,
  onBuildingFocus,
}: MapAreaSvgProps) {
  const baseViewBox = useMemo(() => parseMapViewBox(areaMap.viewBox), [areaMap.viewBox])
  const initialViewBox = useMemo(
    () => areaMap.initialViewBox ? parseMapViewBox(areaMap.initialViewBox) : getInitialDragViewBox(baseViewBox),
    [areaMap.initialViewBox, baseViewBox],
  )
  const [dragViewBox, setDragViewBox] = useState(() => initialViewBox)
  const [isDragging, setIsDragging] = useState(false)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragSessionRef = useRef<DragSession | null>(null)
  const suppressClicksUntilRef = useRef(0)

  useEffect(() => {
    setDragViewBox(clampMapViewBox(initialViewBox, baseViewBox))
  }, [baseViewBox, initialViewBox])

  const handlePointerDown = (event: PointerEvent<SVGSVGElement>) => {
    if (event.button !== 0) return

    const svg = svgRef.current
    if (!svg) throw new Error('Map SVG ref is required for dragging')

    dragSessionRef.current = {
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startViewBox: dragViewBox,
      hasMoved: false,
      hasPointerCapture: false,
    }
  }

  const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
    const session = dragSessionRef.current
    if (!session || session.pointerId !== event.pointerId) return

    const deltaX = event.clientX - session.startClientX
    const deltaY = event.clientY - session.startClientY
    const dragDistance = Math.hypot(deltaX, deltaY)

    if (!session.hasMoved && dragDistance < DRAG_CLICK_THRESHOLD_PX) return
    if (!session.hasMoved) {
      session.hasMoved = true
      setIsDragging(true)
    }

    const svg = svgRef.current
    if (!svg) throw new Error('Map SVG ref is required while dragging')
    if (!session.hasPointerCapture) {
      svg.setPointerCapture(event.pointerId)
      session.hasPointerCapture = true
    }

    const bounds = svg.getBoundingClientRect()
    if (bounds.width <= 0 || bounds.height <= 0) {
      throw new Error('Map SVG must be visible before it can be dragged')
    }

    event.preventDefault()
    setDragViewBox(
      clampMapViewBox(
        {
          ...session.startViewBox,
          x: session.startViewBox.x - (deltaX * session.startViewBox.width) / bounds.width,
          y: session.startViewBox.y - (deltaY * session.startViewBox.height) / bounds.height,
        },
        baseViewBox,
      ),
    )
  }

  const finishDrag = (event: PointerEvent<SVGSVGElement>) => {
    const session = dragSessionRef.current
    if (!session || session.pointerId !== event.pointerId) return

    const svg = svgRef.current
    if (!svg) throw new Error('Map SVG ref is required to finish dragging')
    if (session.hasPointerCapture && svg.hasPointerCapture(event.pointerId)) {
      svg.releasePointerCapture(event.pointerId)
    }

    if (session.hasMoved) {
      suppressClicksUntilRef.current = window.performance.now() + CLICK_SUPPRESSION_MS
    }

    dragSessionRef.current = null
    setIsDragging(false)
  }

  const cancelPendingDrag = (event: PointerEvent<SVGSVGElement>) => {
    const session = dragSessionRef.current
    if (!session || session.pointerId !== event.pointerId || session.hasMoved) return

    dragSessionRef.current = null
  }

  const handleClickCapture = (event: MouseEvent<SVGSVGElement>) => {
    if (window.performance.now() > suppressClicksUntilRef.current) return

    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <svg
      ref={svgRef}
      viewBox={formatMapViewBox(dragViewBox)}
      role="img"
      aria-label={`${areaMap.name} draggable local area map`}
      preserveAspectRatio="xMidYMid meet"
      className={`map-area-svg${isDragging ? ' map-area-svg--dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onPointerLeave={cancelPendingDrag}
      onClickCapture={handleClickCapture}
      onClick={onMapDismiss}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    >
      <title>{areaMap.name}</title>
      <desc>
        Local optimized SVG map generated from OpenStreetMap features inside the active area bounds.
      </desc>
      <defs>
        <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" className="map-svg-grid-line" fill="none" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1000" height="680" className="map-svg-ground" />
      <rect width="1000" height="680" fill="url(#map-grid)" />

      <g className="map-svg-background-buildings" strokeWidth="1">
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
            className={road.kind === 'footway' || road.kind === 'path' ? 'map-svg-road map-svg-road--footway' : 'map-svg-road'}
            strokeWidth={road.kind === 'tertiary' ? 2 : road.kind === 'pedestrian' ? 1.5 : 1}
          />
        ))}
        {areaMap.rails.map((rail) => (
          <path
            key={`${rail.kind}-${rail.path}`}
            d={rail.path}
            className={rail.kind === 'subway' ? 'map-svg-rail map-svg-rail--subway' : 'map-svg-rail'}
            strokeWidth="1.5"
          />
        ))}
      </g>

      <MapBuildingLayer
        areaMap={areaMap}
        locations={locations}
        currentLocationId={currentLocationId}
        onLocationPick={onLocationPick}
        onBuildingFocus={onBuildingFocus}
      />

      <MapCharacterLayer
        areaMap={areaMap}
        characters={characters}
        characterStates={characterStates}
        locations={locations}
        currentLocationId={currentLocationId}
      />

      <g className="map-svg-labels" fontFamily="-apple-system, Segoe UI, sans-serif" fontSize="18" fontWeight="600">
        {areaMap.labels.map((label) => (
          <text key={label.id} x={label.x} y={label.y}>{label.text}</text>
        ))}
      </g>
    </svg>
  )
}

function parseMapViewBox(viewBox: string): MapViewBox {
  const values = viewBox.trim().split(/\s+/).map(Number)
  if (values.length !== 4) throw new Error(`Invalid map viewBox: ${viewBox}`)

  const [x, y, width, height] = values
  if (
    !Number.isFinite(x) ||
    !Number.isFinite(y) ||
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0
  ) {
    throw new Error(`Invalid map viewBox: ${viewBox}`)
  }

  return { x, y, width, height }
}

function getInitialDragViewBox(baseViewBox: MapViewBox): MapViewBox {
  const width = baseViewBox.width / MAP_DRAG_ZOOM
  const height = baseViewBox.height / MAP_DRAG_ZOOM

  return {
    x: baseViewBox.x + (baseViewBox.width - width) / 2,
    y: baseViewBox.y + (baseViewBox.height - height) / 2,
    width,
    height,
  }
}

function clampMapViewBox(viewBox: MapViewBox, baseViewBox: MapViewBox): MapViewBox {
  const maxX = baseViewBox.x + baseViewBox.width - viewBox.width
  const maxY = baseViewBox.y + baseViewBox.height - viewBox.height

  return {
    ...viewBox,
    x: clamp(viewBox.x, baseViewBox.x, maxX),
    y: clamp(viewBox.y, baseViewBox.y, maxY),
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

function formatMapViewBox(viewBox: MapViewBox): string {
  return [viewBox.x, viewBox.y, viewBox.width, viewBox.height]
    .map((value) => value.toFixed(2))
    .join(' ')
}
