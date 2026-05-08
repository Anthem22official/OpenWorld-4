import { CSSProperties } from 'react'

interface StatusIndicatorProps {
  status: 'idle' | 'loading' | 'success' | 'error'
}

export default function StatusIndicator({ status }: StatusIndicatorProps) {
  const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '12px',
    padding: '8px 0',
  }

  const labelStyle: CSSProperties = {
    fontSize: '13px',
    fontWeight: 500,
    color: '#CBD5E1',
  }

  const getStatusColor = () => {
    switch (status) {
      case 'loading':
        return '#8B5CF6'
      case 'success':
        return '#10B981'
      case 'error':
        return '#EF4444'
      default:
        return '#CBD5E1'
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'loading':
        return 'Loading...'
      case 'success':
        return 'Success'
      case 'error':
        return 'Error'
      default:
        return 'Ready'
    }
  }

  const statusValueStyle: CSSProperties = {
    fontSize: '13px',
    fontWeight: 400,
    color: getStatusColor(),
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  }

  const spinnerStyle: CSSProperties = {
    width: '12px',
    height: '12px',
    border: '2px solid transparent',
    borderTopColor: getStatusColor(),
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <span style={labelStyle}>Status:</span>
      <div style={statusValueStyle} aria-live="polite" role="status">
        {status === 'loading' && <div style={spinnerStyle}></div>}
        <span>{getStatusText()}</span>
      </div>
    </div>
  )
}
