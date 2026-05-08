import { useState } from 'react'

interface MapNavButtonProps {
  onBackToDialogue: () => void
  onShowDebugPanel?: () => void
}

export default function MapNavButton({
  onBackToDialogue,
  onShowDebugPanel,
}: MapNavButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDebugHovered, setIsDebugHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 'clamp(12px, 2vh, 24px)',
        right: 'clamp(12px, 2vw, 24px)',
        display: 'flex',
        gap: '8px',
        zIndex: 10,
      }}
    >
      {/* Back Button */}
      <button
        onClick={onBackToDialogue}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={(e) => {
          if (e.code === 'Enter' || e.code === 'Space') {
            e.preventDefault()
            onBackToDialogue()
          }
        }}
        style={{
          padding: '12px 16px',
          minHeight: '44px',
          backgroundColor: isHovered ? '#9F7AEA' : 'transparent',
          border: '2px solid #9F7AEA',
          borderRadius: '6px',
          color: isHovered ? '#0F172A' : '#F1F5F9',
          fontSize: '13px',
          fontFamily: '-apple-system, Segoe UI, sans-serif',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 150ms ease-in-out',
          outline: 'none',
        }}
        aria-label="Back to dialogue"
      >
        ← Back
      </button>

      {/* Debug Button */}
      {onShowDebugPanel && (
        <button
          onClick={onShowDebugPanel}
          onMouseEnter={() => setIsDebugHovered(true)}
          onMouseLeave={() => setIsDebugHovered(false)}
          onKeyDown={(e) => {
            if (e.code === 'Enter' || e.code === 'Space') {
              e.preventDefault()
              onShowDebugPanel()
            }
          }}
          style={{
            padding: '12px 16px',
            minHeight: '44px',
            backgroundColor: isDebugHovered ? '#8B5CF6' : 'transparent',
            border: '2px solid #8B5CF6',
            borderRadius: '6px',
            color: isDebugHovered ? '#F1F5F9' : '#8B5CF6',
            fontSize: '13px',
            fontFamily: '-apple-system, Segoe UI, sans-serif',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 150ms ease-in-out',
            outline: 'none',
          }}
          aria-label="Open debug panel"
        >
          Debug
        </button>
      )}
    </div>
  )
}
