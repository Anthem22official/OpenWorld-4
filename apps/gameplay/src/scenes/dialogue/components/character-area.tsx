import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, RefObject, SyntheticEvent } from 'react'

interface CharacterAreaProps {
  characterIds: string[]
  activeCharacterId?: string
  characterNames: Record<string, string>
}

interface CharacterAlphaBounds {
  top: number
  bottom: number
  height: number
  cowboyCut: number
}

type CharacterSlotStyle = CSSProperties & {
  '--character-visible-top'?: string
  '--character-visible-bottom'?: string
  '--character-visible-height'?: string
  '--character-cowboy-cut'?: string
  '--character-render-height'?: string
  '--character-frame-y'?: string
  '--character-cowboy-origin'?: string
}

const COWBOY_SHOT_BODY_RATIO = 0.72

export default function CharacterArea({ characterIds, activeCharacterId, characterNames }: CharacterAreaProps) {
  const areaRef = useRef<HTMLDivElement | null>(null)
  const areaHeight = useElementHeight(areaRef)

  if (characterIds.length > 4) throw new Error(`CharacterArea supports at most 4 characters, got ${characterIds.length}`)
  if (activeCharacterId && !characterIds.includes(activeCharacterId)) {
    throw new Error(`Active dialogue character is not in the scene lineup: ${activeCharacterId}`)
  }

  return (
    <div ref={areaRef} className="dialogue-character-area" data-count={characterIds.length} aria-label="Scene characters">
      {characterIds.map((characterId, index) => (
        <CharacterSpriteSlot
          active={activeCharacterId ? characterId === activeCharacterId : true}
          areaHeight={areaHeight}
          characterId={characterId}
          key={characterId}
          label={characterNames[characterId] || characterId}
          slot={getSlotName(characterIds.length, index)}
        />
      ))}
    </div>
  )
}

function CharacterSpriteSlot({
  active,
  areaHeight,
  characterId,
  label,
  slot,
}: {
  active: boolean
  areaHeight: number
  characterId: string
  label: string
  slot: string
}) {
  const [alphaBounds, setAlphaBounds] = useState<CharacterAlphaBounds | null>(null)
  const [measurementError, setMeasurementError] = useState<Error | null>(null)

  if (measurementError) throw measurementError

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    try {
      setAlphaBounds(measureCharacterAlphaBounds(event.currentTarget, characterId))
    } catch (error) {
      setMeasurementError(error instanceof Error ? error : new Error(String(error)))
    }
  }

  const handleError = () => {
    setMeasurementError(new Error(`Failed to load character sprite: ${characterId}`))
  }

  return (
    <div
      className="dialogue-character-slot"
      data-active={active}
      data-measured={alphaBounds ? 'true' : 'false'}
      data-slot={slot}
      style={getCharacterSlotStyle(alphaBounds, areaHeight)}
      aria-label={label}
    >
      <div className="dialogue-character-sprite" aria-hidden="true">
        <img
          className="dialogue-character-sprite__image"
          src={getCharacterSpriteUrl(characterId)}
          alt={label}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  )
}

function measureCharacterAlphaBounds(image: HTMLImageElement, characterId: string): CharacterAlphaBounds {
  const width = image.naturalWidth
  const height = image.naturalHeight
  if (width <= 0 || height <= 0) throw new Error(`Invalid character sprite size: ${characterId}`)

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) throw new Error(`Unable to read character sprite pixels: ${characterId}`)

  context.drawImage(image, 0, 0)
  const pixels = context.getImageData(0, 0, width, height).data
  let top = height
  let bottom = -1

  for (let index = 3; index < pixels.length; index += 4) {
    if (pixels[index] === 0) continue

    const pixelIndex = (index - 3) / 4
    const y = Math.floor(pixelIndex / width)
    if (y < top) top = y
    if (y > bottom) bottom = y
  }

  if (bottom < top) throw new Error(`No visible character pixels found: ${characterId}`)

  const visibleTop = top / height
  const visibleBottom = (bottom + 1) / height
  const visibleHeight = visibleBottom - visibleTop
  const cowboyCut = visibleTop + visibleHeight * COWBOY_SHOT_BODY_RATIO

  return {
    top: visibleTop,
    bottom: visibleBottom,
    height: visibleHeight,
    cowboyCut,
  }
}

function useElementHeight(ref: RefObject<HTMLElement | null>): number {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) throw new Error('Character area element was not mounted')

    const updateHeight = () => {
      const nextHeight = element.getBoundingClientRect().height
      if (nextHeight <= 0) throw new Error(`Invalid character area height: ${nextHeight}`)
      setHeight(nextHeight)
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()
  }, [ref])

  return height
}

function getCharacterSlotStyle(alphaBounds: CharacterAlphaBounds | null, areaHeight: number): CharacterSlotStyle | undefined {
  if (!alphaBounds || areaHeight <= 0) return undefined

  const framedBodyRatio = alphaBounds.cowboyCut - alphaBounds.top
  if (framedBodyRatio <= 0) throw new Error(`Invalid character cowboy frame ratio: ${framedBodyRatio}`)

  const renderHeight = areaHeight / framedBodyRatio
  const frameY = -alphaBounds.top * renderHeight

  return {
    '--character-visible-top': formatCssNumber(alphaBounds.top),
    '--character-visible-bottom': formatCssNumber(alphaBounds.bottom),
    '--character-visible-height': formatCssNumber(alphaBounds.height),
    '--character-cowboy-cut': formatCssNumber(alphaBounds.cowboyCut),
    '--character-render-height': `${formatCssNumber(renderHeight)}px`,
    '--character-frame-y': `${formatCssNumber(frameY)}px`,
    '--character-cowboy-origin': `${formatCssNumber((alphaBounds.cowboyCut * renderHeight) + frameY)}px`,
  }
}

function formatCssNumber(value: number): string {
  if (!Number.isFinite(value)) throw new Error(`Invalid character framing value: ${value}`)

  return value.toFixed(4)
}

function getSlotName(characterCount: number, index: number): string {
  const layouts: Record<number, string[]> = {
    0: [],
    1: ['center'],
    2: ['left', 'right'],
    3: ['left', 'center', 'right'],
    4: ['far-left', 'left', 'right', 'far-right'],
  }

  const layout = layouts[characterCount]
  if (!layout) throw new Error(`Unsupported character layout count: ${characterCount}`)

  const slot = layout[index]
  if (!slot) throw new Error(`Missing character layout slot ${index} for count ${characterCount}`)

  return slot
}

function getCharacterSpriteUrl(characterId: string): string {
  const trimmedId = characterId.trim()
  if (trimmedId.length === 0) throw new Error('Character sprite id cannot be empty')
  if (trimmedId.startsWith('/') || trimmedId.includes('..')) {
    throw new Error(`Invalid character sprite id: ${characterId}`)
  }

  return resolveAssetUrl(`characters/${trimmedId}/full-body/full-body-transparent.png`)
}

function resolveAssetUrl(assetKey: string): string {
  const assetBaseUrl = getViteEnvValue('VITE_ASSET_BASE_URL')
  const baseUrl = assetBaseUrl || '/assets/database'

  return `${baseUrl.replace(/\/+$/, '')}/${assetKey}`
}

function getViteEnvValue(name: string): string | undefined {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
  const value = env?.[name]?.trim()
  return value && value.length > 0 ? value : undefined
}
