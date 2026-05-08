import { CSSProperties } from 'react'

interface PromptInputProps {
  prompt: string
  onPromptChange: (value: string) => void
  onSubmit: () => void
  onClear: () => void
  isLoading: boolean
  quality: 'low' | 'medium' | 'high'
  onQualityChange: (value: 'low' | 'medium' | 'high') => void
  size: string
  onSizeChange: (value: string) => void
  format: 'jpeg' | 'png'
  onFormatChange: (value: 'jpeg' | 'png') => void
}

export default function PromptInput({
  prompt,
  onPromptChange,
  onSubmit,
  onClear,
  isLoading,
  quality,
  onQualityChange,
  size,
  onSizeChange,
  format,
  onFormatChange,
}: PromptInputProps) {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  }

  const labelStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: '#F1F5F9',
    marginBottom: '4px',
  }

  const selectStyle: CSSProperties = {
    width: '100%',
    padding: '8px',
    border: '1px solid #334155',
    borderRadius: '4px',
    backgroundColor: '#1E293B',
    color: '#F1F5F9',
    fontSize: '13px',
    fontFamily: 'system-ui',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 150ms ease',
    cursor: 'pointer',
  }

  const settingsGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
  }

  const textareaStyle: CSSProperties = {
    width: '100%',
    height: '120px',
    padding: '12px',
    border: '1px solid #334155',
    borderRadius: '4px',
    backgroundColor: '#1E293B',
    color: '#F1F5F9',
    fontSize: '14px',
    fontFamily: 'monospace',
    lineHeight: '1.6',
    resize: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 150ms ease',
  }

  const textareaFocusStyle: CSSProperties = {
    ...textareaStyle,
    borderColor: '#3B82F6',
    borderWidth: '2px',
    padding: '11px',
  }

  const buttonStyle: CSSProperties = {
    width: '100%',
    height: '40px',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 150ms ease',
    boxSizing: 'border-box',
  }

  const submitButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: isLoading ? '#64748B' : '#3B82F6',
    color: '#FFFFFF',
    opacity: isLoading ? 0.8 : 1,
    cursor: isLoading ? 'not-allowed' : 'pointer',
  }

  const submitButtonHoverStyle: CSSProperties = {
    ...submitButtonStyle,
    backgroundColor: isLoading ? '#64748B' : '#2563EB',
    boxShadow: isLoading ? 'none' : '0 4px 6px rgba(0,0,0,0.3)',
  }

  const clearButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#334155',
    color: '#CBD5E1',
    opacity: prompt.trim() === '' ? 0.5 : 1,
    cursor: prompt.trim() === '' ? 'not-allowed' : 'pointer',
  }

  const clearButtonHoverStyle: CSSProperties = {
    ...clearButtonStyle,
    backgroundColor: prompt.trim() === '' ? '#334155' : '#475569',
  }

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>Prompt</label>
      <textarea
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        onFocus={(e) => {
          Object.assign(e.currentTarget.style, textareaFocusStyle)
        }}
        onBlur={(e) => {
          Object.assign(e.currentTarget.style, textareaStyle)
        }}
        style={textareaStyle}
        placeholder="Describe the image you want to generate..."
        disabled={isLoading}
        aria-label="Image prompt"
      />

      <div>
        <label style={labelStyle}>Settings</label>
        <div style={settingsGridStyle}>
          <div>
            <label style={{ ...labelStyle, marginBottom: '6px', display: 'block' }}>
              Quality
            </label>
            <select
              value={quality}
              onChange={(e) =>
                onQualityChange(e.target.value as 'low' | 'medium' | 'high')
              }
              style={selectStyle}
              disabled={isLoading}
              aria-label="Image quality"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label style={{ ...labelStyle, marginBottom: '6px', display: 'block' }}>
              Format
            </label>
            <select
              value={format}
              onChange={(e) => onFormatChange(e.target.value as 'jpeg' | 'png')}
              style={selectStyle}
              disabled={isLoading}
              aria-label="Image format"
            >
              <option value="jpeg">JPEG</option>
              <option value="png">PNG</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: '8px' }}>
          <label style={{ ...labelStyle, marginBottom: '6px', display: 'block' }}>
            Size
          </label>
          <select
            value={size}
            onChange={(e) => onSizeChange(e.target.value)}
            style={selectStyle}
            disabled={isLoading}
            aria-label="Image size"
          >
            <option value="1024x768">1024×768 (Landscape)</option>
            <option value="768x1024">768×1024 (Portrait)</option>
            <option value="1024x1024">1024×1024 (Square)</option>
            <option value="1024x1536">1024×1536 (Tall)</option>
            <option value="1536x1024">1536×1024 (Wide)</option>
            <option value="2560x1440">2560×1440 (2K Wide)</option>
            <option value="1440x2560">1440×2560 (2K Tall)</option>
            <option value="3840x2160">3840×2160 (4K Wide)</option>
            <option value="2160x3840">2160×3840 (4K Tall)</option>
          </select>
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={isLoading || prompt.trim() === ''}
        style={submitButtonStyle}
        onMouseEnter={(e) => {
          if (!isLoading && prompt.trim() !== '') {
            Object.assign(e.currentTarget.style, submitButtonHoverStyle)
          }
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, submitButtonStyle)
        }}
        aria-label="Generate image"
        aria-busy={isLoading}
      >
        {isLoading ? 'Generating...' : 'Submit'}
      </button>

      <button
        onClick={onClear}
        disabled={prompt.trim() === '' || isLoading}
        style={clearButtonStyle}
        onMouseEnter={(e) => {
          if (prompt.trim() !== '' && !isLoading) {
            Object.assign(e.currentTarget.style, clearButtonHoverStyle)
          }
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, clearButtonStyle)
        }}
        aria-label="Clear prompt"
      >
        Clear
      </button>
    </div>
  )
}
