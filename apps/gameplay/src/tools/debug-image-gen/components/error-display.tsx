import { CSSProperties } from 'react'

interface ErrorDisplayProps {
  message: string
  visible: boolean
}

export default function ErrorDisplay({ message, visible }: ErrorDisplayProps) {
  if (!visible || !message) return null

  const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    padding: '12px',
    marginTop: '12px',
    backgroundColor: '#7F1D1D',
    border: '1px solid #EF4444',
    borderRadius: '4px',
    animation: 'slideUp 200ms ease',
  }

  const iconStyle: CSSProperties = {
    fontSize: '16px',
    color: '#EF4444',
    flexShrink: 0,
    marginTop: '2px',
  }

  const messageStyle: CSSProperties = {
    fontSize: '13px',
    color: '#FCA5A5',
    lineHeight: '1.5',
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={containerStyle} role="alert">
        <span style={iconStyle}>✕</span>
        <p style={messageStyle}>{message}</p>
      </div>
    </>
  )
}
