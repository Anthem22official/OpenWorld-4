import { useState, CSSProperties } from 'react'
import PromptInput from './components/prompt-input'
import ImagePreview from './components/image-preview'
import ErrorDisplay from './components/error-display'

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
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)
  const [generatedImagePreviewUrl, setGeneratedImagePreviewUrl] = useState<string | null>(null)
  const [backgroundRemovedImageUrl, setBackgroundRemovedImageUrl] = useState<string | null>(null)
  const [backgroundRemovedImagePreviewUrl, setBackgroundRemovedImagePreviewUrl] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [activeStep, setActiveStep] = useState<'generation' | 'background-removal'>('generation')
  const [errorMessage, setErrorMessage] = useState('')
  const [elapsedTime, setElapsedTime] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (prompt.trim() === '') return

    setStatus('loading')
    setActiveStep('generation')
    setErrorMessage('')
    setGeneratedImageUrl(null)
    setGeneratedImagePreviewUrl(null)
    setBackgroundRemovedImageUrl(null)
    setBackgroundRemovedImagePreviewUrl(null)
    setElapsedTime(null)

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

      const submitResult = await readJsonResponse(
        submitResponse,
        'Image generation submit',
      )

      if (submitResponse.status !== 202) {
        throw new Error(
          getErrorMessage(submitResult, 'Failed to start image generation'),
        )
      }

      const prediction = submitResult
      const predictionId = getPredictionId(prediction)

      let result: unknown = prediction
      let predictionStatus = getPredictionStatus(result)
      while (
        predictionStatus === 'processing' ||
        predictionStatus === 'pending' ||
        predictionStatus === 'queued'
      ) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const pollResponse = await fetch(`/api/images/generations/${predictionId}`)

        result = await readJsonResponse(
          pollResponse,
          'Image generation poll',
        )

        if (!pollResponse.ok) {
          throw new Error(
            getErrorMessage(result, 'Failed to poll image generation status'),
          )
        }
        predictionStatus = getPredictionStatus(result)
      }

      if (predictionStatus !== 'completed' && predictionStatus !== 'succeeded') {
        throw new Error(`Image generation failed (status: ${predictionStatus})`)
      }

      const imageUrl = getGeneratedImageUrl(result)
      const previewUrl = getPreviewImageUrl(imageUrl)
      await validatePreviewImage(previewUrl, 'Generated image preview')

      setGeneratedImageUrl(imageUrl)
      setGeneratedImagePreviewUrl(previewUrl)
      const duration = ((Date.now() - startTime) / 1000).toFixed(1)
      setElapsedTime(`${duration}s`)
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to generate image',
      )
      setStatus('error')
    }
  }

  const handleRemoveBackground = async () => {
    if (!generatedImageUrl) {
      throw new Error('Cannot remove background before image generation succeeds')
    }

    setStatus('loading')
    setActiveStep('background-removal')
    setErrorMessage('')
    setElapsedTime(null)

    const startTime = Date.now()

    try {
      const response = await fetch('/api/images/background-removals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_url: generatedImageUrl,
        }),
      })

      const result = await readJsonResponse(response, 'Fal background removal')

      if (!response.ok) {
        throw new Error(getErrorMessage(result, 'Failed to remove background'))
      }

      const imageUrl = getFalBackgroundRemovalImageUrl(result)
      const previewUrl = getPreviewImageUrl(imageUrl)
      await validatePreviewImage(previewUrl, 'Background-removed image preview')

      setBackgroundRemovedImageUrl(imageUrl)
      setBackgroundRemovedImagePreviewUrl(previewUrl)
      const duration = ((Date.now() - startTime) / 1000).toFixed(1)
      setElapsedTime(`${duration}s`)
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to remove background',
      )
      setStatus('error')
    }
  }

  const handleClear = () => {
    setPrompt('')
    setGeneratedImageUrl(null)
    setGeneratedImagePreviewUrl(null)
    setBackgroundRemovedImageUrl(null)
    setBackgroundRemovedImagePreviewUrl(null)
    setStatus('idle')
    setActiveStep('generation')
    setErrorMessage('')
    setElapsedTime(null)
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
          Back
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
            onRemoveBackground={handleRemoveBackground}
            isLoading={status === 'loading' && activeStep === 'generation'}
            canRemoveBackground={Boolean(generatedImageUrl) && !backgroundRemovedImageUrl}
            isRemovingBackground={
              status === 'loading' && activeStep === 'background-removal'
            }
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
            imageUrl={backgroundRemovedImagePreviewUrl ?? generatedImagePreviewUrl}
            status={status}
            generationTime={elapsedTime}
            loadingLabel={
              activeStep === 'background-removal'
                ? 'Removing background with Fal...'
                : 'Generating image...'
            }
            resultLabel={
              activeStep === 'background-removal'
                ? 'Background removal time'
                : 'Generation time'
            }
            onImageError={() => {
              setStatus('error')
              setErrorMessage('Image preview failed to render in the browser')
            }}
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

function getPredictionId(value: unknown): string {
  if (typeof value !== 'object' || value === null) {
    throw new Error('Image generation response is not an object')
  }

  const id = (value as Record<string, unknown>).id
  if (typeof id !== 'string' || id.trim().length === 0) {
    throw new Error('Image generation response is missing id')
  }

  return id
}

function getPredictionStatus(value: unknown): string {
  if (typeof value !== 'object' || value === null) {
    throw new Error('Image generation response is not an object')
  }

  const status = (value as Record<string, unknown>).status
  if (typeof status !== 'string' || status.trim().length === 0) {
    throw new Error('Image generation response is missing status')
  }

  return status
}

function getGeneratedImageUrl(value: unknown): string {
  if (typeof value !== 'object' || value === null) {
    throw new Error('Image generation result is not an object')
  }

  const outputs = (value as Record<string, unknown>).outputs
  if (!Array.isArray(outputs) || outputs.length === 0) {
    throw new Error('Image generation result is missing outputs')
  }

  const imageUrl = outputs[0]
  if (typeof imageUrl !== 'string' || imageUrl.trim().length === 0) {
    throw new Error('Image generation result output is not a URL')
  }

  return imageUrl
}

function getFalBackgroundRemovalImageUrl(value: unknown): string {
  if (typeof value !== 'object' || value === null) {
    throw new Error('Fal background-removal result is not an object')
  }

  const image = (value as Record<string, unknown>).image
  if (typeof image !== 'object' || image === null) {
    throw new Error('Fal background-removal result is missing image')
  }

  const imageUrl = (image as Record<string, unknown>).url
  if (typeof imageUrl !== 'string' || imageUrl.trim().length === 0) {
    throw new Error('Fal background-removal result is missing image.url')
  }

  return imageUrl
}

function getPreviewImageUrl(imageUrl: string): string {
  return isAtlasImageUrl(imageUrl)
    ? `/api/images/preview?url=${encodeURIComponent(imageUrl)}`
    : imageUrl
}

function isAtlasImageUrl(imageUrl: string): boolean {
  try {
    const parsedUrl = new URL(imageUrl)
    return (
      parsedUrl.protocol === 'https:' &&
      parsedUrl.hostname === 'atlas-img.oss-us-west-1.aliyuncs.com' &&
      parsedUrl.pathname.startsWith('/images/')
    )
  } catch {
    throw new Error('Image output is not a valid URL')
  }
}

async function validatePreviewImage(
  previewUrl: string,
  operationName: string,
): Promise<void> {
  if (!previewUrl.startsWith('/api/images/preview?')) {
    return
  }

  const response = await fetch(previewUrl, {
    method: 'GET',
    cache: 'no-store',
  })

  if (!response.ok) {
    const details = await readJsonResponse(response, operationName)
    throw new Error(getErrorMessage(details, `${operationName} failed`))
  }

  const contentType = response.headers.get('content-type')
  if (!contentType || !contentType.toLowerCase().startsWith('image/')) {
    throw new Error(`${operationName} returned non-image content`)
  }

  const blob = await response.blob()
  if (blob.size === 0) {
    throw new Error(`${operationName} returned an empty image body`)
  }
}

function getErrorMessage(value: unknown, fallbackMessage: string): string {
  if (typeof value !== 'object' || value === null) {
    return fallbackMessage
  }

  const message = (value as Record<string, unknown>).message
  if (typeof message !== 'string' || message.trim().length === 0) {
    return fallbackMessage
  }

  return message
}

async function readJsonResponse(
  response: Response,
  operationName: string,
): Promise<unknown> {
  const text = await response.text()

  if (text.trim().length === 0) {
    throw new Error(
      `${operationName} returned an empty response body (HTTP ${response.status})`,
    )
  }

  try {
    return JSON.parse(text) as unknown
  } catch {
    throw new Error(
      `${operationName} returned non-JSON response body (HTTP ${response.status})`,
    )
  }
}
