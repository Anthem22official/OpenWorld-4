import { Location } from '../types/game'
import { useState } from 'react'

interface LocationPointsProps {
  locations: Location[]
  currentLocationId: string
  onLocationClick: (locationId: string) => void
}

export default function LocationPoints({
  locations,
  currentLocationId,
  onLocationClick,
}: LocationPointsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      {locations.map((location) => {
        const isCurrent = location.id === currentLocationId
        const isVisited = location.visited

        return (
          <button
            key={location.id}
            onClick={() => onLocationClick(location.id)}
            onMouseEnter={() => setHoveredId(location.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'absolute',
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: `2px solid ${isCurrent ? '#B8860B' : isVisited ? '#9F7AEA' : '#64748B'}`,
              backgroundColor: isCurrent
                ? 'rgba(184, 134, 11, 0.2)'
                : hoveredId === location.id
                  ? 'rgba(159, 122, 234, 0.15)'
                  : 'rgba(30, 41, 59, 0.5)',
              cursor: 'pointer',
              transition: 'all 150ms ease-in-out',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                hoveredId === location.id
                  ? `0 0 16px rgba(159, 122, 234, 0.4)`
                  : isCurrent
                    ? `0 0 12px rgba(184, 134, 11, 0.3)`
                    : 'none',
              outline: 'none',
            }}
            title={location.name}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: isCurrent ? '#B8860B' : '#9F7AEA',
              }}
            />
          </button>
        )
      })}

      {hoveredId && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '1px solid rgba(148, 163, 184, 0.3)',
            borderRadius: '6px',
            padding: '8px 12px',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              color: '#F1F5F9',
              fontFamily: '-apple-system, Segoe UI, sans-serif',
              fontWeight: 500,
            }}
          >
            {locations.find((l) => l.id === hoveredId)?.name}
          </p>
        </div>
      )}
    </>
  )
}
