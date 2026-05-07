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
  const [focusedId, setFocusedId] = useState<string | null>(null)

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 12px rgba(184, 134, 11, 0.3); }
          50% { box-shadow: 0 0 20px rgba(184, 134, 11, 0.5); }
        }
        @keyframes hover-scale {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.15); }
        }
      `}</style>

      {locations.map((location) => {
        const isCurrent = location.id === currentLocationId
        const isVisited = location.visited
        const isHovered = hoveredId === location.id
        const isFocused = focusedId === location.id

        return (
          <button
            key={location.id}
            onClick={() => onLocationClick(location.id)}
            onMouseEnter={() => setHoveredId(location.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setFocusedId(location.id)}
            onBlur={() => setFocusedId(null)}
            onKeyDown={(e) => {
              if (e.code === 'Enter' || e.code === 'Space') {
                e.preventDefault()
                onLocationClick(location.id)
              }
            }}
            style={{
              position: 'absolute',
              left: `${location.x}%`,
              top: `${location.y}%`,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: `2px solid ${isCurrent ? '#B8860B' : isVisited ? '#9F7AEA' : '#64748B'}`,
              backgroundColor: isCurrent
                ? 'rgba(184, 134, 11, 0.2)'
                : isHovered || isFocused
                  ? 'rgba(159, 122, 234, 0.15)'
                  : 'rgba(30, 41, 59, 0.5)',
              cursor: 'pointer',
              transition: isHovered || isFocused ? 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)' : 'all 150ms ease-in-out',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isHovered || isFocused ? 'translate(-50%, -50%) scale(1.15)' : 'translate(-50%, -50%)',
              boxShadow:
                isHovered || isFocused
                  ? `0 0 24px ${isCurrent ? 'rgba(184, 134, 11, 0.6)' : 'rgba(159, 122, 234, 0.6)'}`
                  : isCurrent
                    ? '0 0 12px rgba(184, 134, 11, 0.3)'
                    : 'none',
              outline: isFocused ? '2px solid #7C3AED' : 'none',
              outlineOffset: isFocused ? '2px' : '0',
            }}
            title={location.name}
            aria-label={`${location.name}${isCurrent ? ' (current location)' : isVisited ? ' (visited)' : ''}`}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: isCurrent ? '#B8860B' : '#9F7AEA',
                transition: 'all 150ms ease-in-out',
                transform: isHovered || isFocused ? 'scale(1.3)' : 'scale(1)',
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
            animation: 'fadeIn 150ms ease-in',
          } as React.CSSProperties & { animation: string }}
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
