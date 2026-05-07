import { useState } from 'react'

interface MapNavButtonProps {
  onBackToDialogue: () => void
}

export default function MapNavButton({ onBackToDialogue }: MapNavButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
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
        position: 'absolute',
        bottom: 'clamp(12px, 2vh, 24px)',
        right: 'clamp(12px, 2vw, 24px)',
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
        zIndex: 10,
      }}
      aria-label="Back to dialogue"
    >
      ← Back
    </button>
  )
}
