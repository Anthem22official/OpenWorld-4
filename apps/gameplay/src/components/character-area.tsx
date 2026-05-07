interface CharacterAreaProps {
  speaker?: string // Speaker name or character ID
}

export default function CharacterArea({ speaker }: CharacterAreaProps) {
  return (
    <div
      style={{
        maxWidth: '500px',
        maxHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 0 20px rgba(159, 122, 234, 0.3))',
      }}
    >
      <div
        style={{
          width: '300px',
          height: '500px',
          backgroundColor: 'rgba(159, 122, 234, 0.1)',
          borderRadius: '12px',
          border: '2px dashed var(--color-lavender)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-lavender)',
          fontSize: '16px',
          textAlign: 'center',
          padding: '20px',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div>Character sprite placeholder</div>
        {speaker && <div style={{ fontSize: '14px', opacity: 0.7 }}>({speaker})</div>}
      </div>
    </div>
  )
}
