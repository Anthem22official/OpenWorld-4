import { useState, CSSProperties } from 'react'
import PromptInput from '../components/debug/prompt-input'
import ImagePreview from '../components/debug/image-preview'
import ErrorDisplay from '../components/debug/error-display'

interface DebugImageGenPageProps {
  onBackToDialogue: () => void
  onShowDebugPanel?: () => void
}

export default function DebugImageGenPage({
  onBackToDialogue,
}: DebugImageGenPageProps) {
  const [prompt, setPrompt] = useState('')
  const [quality, setQuality] = useState<'low' | 'medium' | 'high'>('medium')
  const [size, setSize] = useState('1024x1024')
  const [format, setFormat] = useState<'jpeg' | 'png'>('jpeg')
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')
  const [generationTime, setGenerationTime] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (prompt.trim() === '') return

    setStatus('loading')
    setErrorMessage('')
    setImageUrl(null)

    const startTime = Date.now()

    try {
      const submitResponse = await fetch('/api/images/generations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt.trim(),
          size,
          quality,
          output_format: format,
        }),
      })

      if (submitResponse.status !== 202) {
        const errorData = await submitResponse.json()
        throw new Error(errorData.message || 'Failed to start image generation')
      }

      const prediction = await submitResponse.json()
      const predictionId = prediction.id

      let result = prediction
      while (result.status === 'processing' || result.status === 'pending' || result.status === 'queued') {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const pollResponse = await fetch(`/api/images/generations/${predictionId}`)

        if (!pollResponse.ok) {
          throw new Error('Failed to poll image generation status')
        }

        result = await pollResponse.json()
      }

      if (result.status !== 'completed' && result.status !== 'succeeded') {
        throw new Error(`Image generation failed (status: ${result.status})`)
      }

      if (!result.outputs || result.outputs.length === 0) {
        throw new Error('No image generated')
      }

      setImageUrl(result.outputs[0])
      const duration = ((Date.now() - startTime) / 1000).toFixed(1)
      setGenerationTime(`${duration}s`)
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to generate image',
      )
      setStatus('error')
    }
  }

  const handleClear = () => {
    setPrompt('')
    setImageUrl(null)
    setStatus('idle')
    setErrorMessage('')
    setGenerationTime(null)
    setQuality('medium')
    setSize('1024x1024')
    setFormat('jpeg')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onBackToDialogue()
    }
  }

  const pageStyle: CSSProperties = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0F172A',
    color: '#F1F5F9',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  }

  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid #334155',
    gap: '16px',
  }

  const backButtonStyle: CSSProperties = {
    minWidth: '44px',
    height: '44px',
    padding: '8px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#CBD5E1',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 150ms ease',
  }

  const backButtonHoverStyle: CSSProperties = {
    ...backButtonStyle,
    color: '#F1F5F9',
    backgroundColor: '#334155',
  }

  const titleStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#F1F5F9',
    flex: 1,
  }

  const containerStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    gap: '16px',
    padding: '16px',
    overflow: 'hidden',
  }

  const inputPanelStyle: CSSProperties = {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    overflow: 'auto',
  }

  const previewPanelStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    overflow: 'auto',
  }

  return (
    <div
      style={pageStyle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="main"
      aria-label="Image generation debug panel"
    >
      <header style={headerStyle}>
        <button
          onClick={onBackToDialogue}
          style={backButtonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, backButtonHoverStyle)
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, backButtonStyle)
          }}
          aria-label="Return to dialogue"
          title="Escape key"
        >
          ← Back
        </button>
        <h1 style={titleStyle}>Image Generator Debug</h1>
      </header>

      <div style={containerStyle}>
        <section style={inputPanelStyle}>
          <PromptInput
            prompt={prompt}
            onPromptChange={setPrompt}
            onSubmit={handleSubmit}
            onClear={handleClear}
            isLoading={status === 'loading'}
            quality={quality}
            onQualityChange={setQuality}
            size={size}
            onSizeChange={setSize}
            format={format}
            onFormatChange={setFormat}
          />
        </section>

        <section style={previewPanelStyle}>
          <ImagePreview
            imageUrl={imageUrl}
            status={status}
            generationTime={generationTime}
          />
          <ErrorDisplay
            message={errorMessage}
            visible={status === 'error'}
          />
        </section>
      </div>
    </div>
  )
}
