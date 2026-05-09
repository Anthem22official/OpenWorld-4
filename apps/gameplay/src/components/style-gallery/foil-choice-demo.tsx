import LiquidGlass from 'liquid-glass-react'
import { useEffect, useRef, useState } from 'react'
import { foilChoices } from './style-gallery-data'

type ChoicePhase = 'showing' | 'hovering' | 'choosing' | 'selected' | 'disappearing' | 'idle'

const CHOOSING_MS = 520
const EXITING_MS = 360
const RESET_MS = 260
const HOVER_RELEASE_MS = 100

export default function FoilChoiceDemo() {
  const [selectedIndex, setSelectedIndex] = useState<string | null>('02')
  const [previewIndex, setPreviewIndex] = useState<string | null>(null)
  const [choosingIndex, setChoosingIndex] = useState<string | null>(null)
  const [exitingIndex, setExitingIndex] = useState<string | null>(null)
  const [isChoiceSetExiting, setIsChoiceSetExiting] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [revealVersion, setRevealVersion] = useState(0)
  const timersRef = useRef<number[]>([])
  const hoverReleaseTimerRef = useRef<number | null>(null)

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer))
    timersRef.current = []
    if (hoverReleaseTimerRef.current !== null) {
      window.clearTimeout(hoverReleaseTimerRef.current)
      hoverReleaseTimerRef.current = null
    }
  }

  const queueTimer = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay)
    timersRef.current.push(timer)
  }

  const holdPreview = (choiceIndex: string) => {
    if (hoverReleaseTimerRef.current !== null) {
      window.clearTimeout(hoverReleaseTimerRef.current)
      hoverReleaseTimerRef.current = null
    }
    setPreviewIndex(choiceIndex)
  }

  const releasePreviewSoon = () => {
    if (hoverReleaseTimerRef.current !== null) {
      window.clearTimeout(hoverReleaseTimerRef.current)
    }

    hoverReleaseTimerRef.current = window.setTimeout(() => {
      setPreviewIndex(null)
      hoverReleaseTimerRef.current = null
    }, HOVER_RELEASE_MS)
  }

  useEffect(() => clearTimers, [])

  const getChoicePhase = (choiceIndex: string): ChoicePhase => {
    if (isResetting || isChoiceSetExiting || exitingIndex === choiceIndex) return 'disappearing'
    if (choosingIndex === choiceIndex) return 'choosing'
    if (selectedIndex === choiceIndex) return 'selected'
    if (previewIndex === choiceIndex) return 'hovering'
    if (revealVersion >= 0) return 'showing'
    return 'idle'
  }

  const handleChoiceClick = (choiceIndex: string) => {
    if (choosingIndex || isResetting) throw new Error('Choice transition is already in progress')

    setPreviewIndex(null)
    setChoosingIndex(choiceIndex)

    queueTimer(() => {
      setChoosingIndex(null)
      setIsChoiceSetExiting(true)

      queueTimer(() => {
        setSelectedIndex(choiceIndex)
        setIsChoiceSetExiting(false)
        setRevealVersion((current) => current + 1)
      }, EXITING_MS)

      document.dispatchEvent(new CustomEvent('style-gallery-action', { detail: `Choice ${choiceIndex} chosen` }))
    }, CHOOSING_MS)
  }

  const handleReset = () => {
    if (choosingIndex || isResetting) throw new Error('Choice transition is already in progress')

    clearTimers()
    setIsResetting(true)
    setPreviewIndex(null)
    setChoosingIndex(null)
    setExitingIndex(null)
    setIsChoiceSetExiting(false)

    queueTimer(() => {
      setSelectedIndex(null)
      setIsResetting(false)
      setRevealVersion((current) => current + 1)
      document.dispatchEvent(new CustomEvent('style-gallery-action', { detail: 'Choice UX reset' }))
    }, RESET_MS)
  }

  return (
    <section className="gallery-section" aria-labelledby="foil-demo-title">
      <div className="gallery-section__intro">
        <p className="gallery-eyebrow">Laser Foil</p>
        <h2 id="foil-demo-title">Emphasis is selective</h2>
        <p>
          Normal choices stay quiet. The selected or narratively important state receives the
          holographic edge and stronger glass response.
        </p>
      </div>

      <div className="foil-choice-demo-toolbar">
        <div className="foil-choice-lifecycle" aria-live="polite">
          {isResetting
            ? 'Disappearing'
            : choosingIndex
              ? `Choosing ${choosingIndex}`
              : previewIndex
                ? `Hovering ${previewIndex}`
                : selectedIndex
                  ? `Selected ${selectedIndex}`
                  : 'No selection'}
        </div>
        <button className="foil-choice-reset" type="button" disabled={!!choosingIndex || isResetting} onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="foil-choice-list" key={revealVersion} data-resetting={isResetting}>
        {foilChoices.map((choice, index) => {
          const phase = getChoicePhase(choice.index)
          const isChoosing = phase === 'choosing'
          const isSelected = phase === 'selected'
          const isExiting = phase === 'disappearing'
          const isLiquid = isSelected || isChoosing
          const statusClass = [
            ` foil-choice--${phase}`,
            isSelected || isChoosing ? ' foil-choice--active' : '',
          ].join('')
          const disabled = !!choosingIndex || isResetting

          const button = (
            <button
              className={`foil-choice${isLiquid ? '' : ' black-coated-paper'}${statusClass}`}
              type="button"
              aria-busy={isChoosing}
              aria-pressed={isSelected}
              disabled={disabled}
              onBlur={releasePreviewSoon}
              onClick={() => handleChoiceClick(choice.index)}
              onFocus={() => {
                if (!disabled && !isSelected) holdPreview(choice.index)
              }}
              onMouseEnter={() => {
                if (!disabled && !isSelected) holdPreview(choice.index)
              }}
              onMouseLeave={releasePreviewSoon}
            >
              <span>{choice.index}</span>
              <div>
                <strong>{choice.title}</strong>
                <p>{choice.description}</p>
              </div>
              {isLiquid && <em>{isChoosing ? 'Choosing' : 'Selected'}</em>}
            </button>
          )

          return (
            <div
              className={`foil-choice-shell${isExiting ? ' foil-choice-shell--exiting' : ''}`}
              key={choice.index}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {isLiquid ? (
                <div className="gallery-liquid-stage gallery-liquid-stage--choice">
                  <LiquidGlass
                    displacementScale={isChoosing ? 64 : 42}
                    blurAmount={0.05}
                    saturation={140}
                    aberrationIntensity={isChoosing ? 2.2 : 1.7}
                    elasticity={isChoosing ? 0.065 : 0.035}
                    cornerRadius={26}
                    padding="0"
                    style={{ position: 'absolute', top: '50%', left: '50%' }}
                  >
                    {button}
                  </LiquidGlass>
                </div>
              ) : (
                button
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
