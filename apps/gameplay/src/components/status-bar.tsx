interface StatusBarProps {
  currentLocationName: string
}

export default function StatusBar({ currentLocationName }: StatusBarProps) {
  return (
    <div
      style={{
        height: '40px',
        padding: '0 16px',
        backgroundColor: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <span
        style={{
          fontSize: '13px',
          color: '#94A3B8',
          fontFamily: '-apple-system, Segoe UI, sans-serif',
          fontWeight: 400,
        }}
      >
        Location:
      </span>
      <span
        style={{
          fontSize: '13px',
          color: '#F1F5F9',
          fontFamily: '-apple-system, Segoe UI, sans-serif',
          fontWeight: 500,
        }}
      >
        {currentLocationName}
      </span>
    </div>
  )
}
