import { CSSProperties } from 'react'
import StatusIndicator from './status-indicator'

interface ImagePreviewProps {
  imageUrl: string | null
  status: 'idle' | 'loading' | 'success' | 'error'
  generationTime: string | null
}

export default function ImagePreview({
  imageUrl,
  status,
  generationTime,
}: ImagePreviewProps) {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
  }

  const previewAreaStyle: CSSProperties = {
    flex: 1,
    border: '1px solid #334155',
    borderRadius: '4px',
    backgroundColor: '#1E293B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    boxSizing: 'border-box',
    overflow: 'auto',
    position: 'relative',
  }

  const loadingSpinnerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  }

  const spinnerStyle: CSSProperties = {
    width: '40px',
    height: '40px',
    border: '3px solid #334155',
    borderTopColor: '#8B5CF6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }

  const loadingTextStyle: CSSProperties = {
    fontSize: '14px',
    color: '#CBD5E1',
  }

  const emptyMessageStyle: CSSProperties = {
    fontSize: '14px',
    color: '#64748B',
    textAlign: 'center',
  }

  const imageStyle: CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  }

  const generationTimeBadgeStyle: CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    color: '#CBD5E1',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '12px',
  }

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={previewAreaStyle}>
        {status === 'loading' ? (
          <div style={loadingSpinnerStyle}>
            <div style={spinnerStyle} aria-label="Loading"></div>
            <p style={loadingTextStyle}>Generating image...</p>
          </div>
        ) : imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="Generated image"
              style={imageStyle}
              role="img"
            />
            {generationTime && (
              <div style={generationTimeBadgeStyle}>
                Generation time: {generationTime}
              </div>
            )}
          </>
        ) : (
          <p style={emptyMessageStyle}>
            {status === 'error'
              ? 'Error occurred. Try again.'
              : 'Enter a prompt and submit to generate an image.'}
          </p>
        )}
      </div>

      <StatusIndicator status={status} />
    </div>
  )
}
