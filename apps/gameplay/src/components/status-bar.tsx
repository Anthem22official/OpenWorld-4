interface StatusBarProps {
  currentLocationName: string
}

export default function StatusBar({ currentLocationName }: StatusBarProps) {
  return (
    <div
      style={{
        height: 'clamp(36px, 5vh, 44px)',
        padding: '0 clamp(12px, 2vw, 20px)',
        backgroundColor: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(8px, 1vw, 16px)',
      }}
    >
      <span
        style={{
          fontSize: 'clamp(11px, 1.5vw, 13px)',
          color: '#94A3B8',
          fontFamily: '-apple-system, Segoe UI, sans-serif',
          fontWeight: 400,
          whiteSpace: 'nowrap',
        }}
      >
        Location:
      </span>
      <span
        style={{
          fontSize: 'clamp(11px, 1.5vw, 13px)',
          color: '#F1F5F9',
          fontFamily: '-apple-system, Segoe UI, sans-serif',
          fontWeight: 500,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {currentLocationName}
      </span>
    </div>
  )
}
