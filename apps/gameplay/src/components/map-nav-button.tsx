interface MapNavButtonProps {
  onBackToDialogue: () => void
}

export default function MapNavButton({ onBackToDialogue }: MapNavButtonProps) {
  return (
    <button
      onClick={onBackToDialogue}
      style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        padding: '12px 16px',
        backgroundColor: 'transparent',
        border: '2px solid #9F7AEA',
        borderRadius: '6px',
        color: '#F1F5F9',
        fontSize: '13px',
        fontFamily: '-apple-system, Segoe UI, sans-serif',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 150ms ease-in-out',
        outline: 'none',
        zIndex: 10,
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLButtonElement
        target.style.backgroundColor = '#9F7AEA'
        target.style.color = '#0F172A'
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLButtonElement
        target.style.backgroundColor = 'transparent'
        target.style.color = '#F1F5F9'
      }}
    >
      ← Back
    </button>
  )
}
