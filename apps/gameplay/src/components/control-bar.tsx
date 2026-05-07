interface ControlBarProps {
  onSave?: () => void
  onContinue?: () => void
  onBack?: () => void
}

export default function ControlBar({ onSave, onBack }: ControlBarProps) {
  const buttonStyle = {
    fontSize: '12px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    color: '#9F7AEA',
    padding: '6px 10px',
    cursor: 'pointer',
    transition: 'all 150ms ease-in-out',
    background: 'none',
    border: '1px solid rgba(159, 122, 234, 0.5)',
    borderRadius: '4px',
  } as const

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.borderColor = 'var(--color-lavender)'
            e.currentTarget.style.backgroundColor = 'rgba(159, 122, 234, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9F7AEA'
            e.currentTarget.style.borderColor = 'rgba(159, 122, 234, 0.5)'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          ← Back
        </button>
      )}
      {onSave && (
        <button
          onClick={onSave}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.borderColor = 'var(--color-lavender)'
            e.currentTarget.style.backgroundColor = 'rgba(159, 122, 234, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9F7AEA'
            e.currentTarget.style.borderColor = 'rgba(159, 122, 234, 0.5)'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          Save
        </button>
      )}
    </div>
  )
}
