interface DialogueBoxProps {
  speaker?: string // Speaker name or character ID (undefined = narration)
  text: string
}

export default function DialogueBox({ speaker, text }: DialogueBoxProps) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        border: '2px solid var(--color-lavender)',
        borderRadius: '6px',
        padding: '16px 20px',
        minHeight: '100px',
        overflow: 'auto',
        backdropFilter: 'blur(10px)',
      }}
    >
      {speaker && (
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--color-lavender)',
            marginBottom: '8px',
            fontFamily: 'var(--font-sans)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {speaker}
        </div>
      )}
      <div
        style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#E8E8E8',
          fontFamily: 'var(--font-serif)',
          fontWeight: 400,
        }}
      >
        {text}
      </div>
    </div>
  )
}
