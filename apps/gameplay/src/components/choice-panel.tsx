import { useEffect, useRef, useState } from 'react'
import LiquidGlass from 'liquid-glass-react'
import { Choice } from '../types/game'

interface ChoicePanelProps {
  choices: Choice[]
  onChoose: (choiceId: string) => void
}

type ChoicePhase = 'showing' | 'hovering' | 'choosing' | 'active' | 'disappearing'

const CHOOSING_MS = 520
const EXITING_MS = 360
const HOVER_RELEASE_MS = 100

export default function ChoicePanel({ choices, onChoose }: ChoicePanelProps) {
  if (!choices.length) throw new Error('ChoicePanel requires at least one choice')

  const [activeChoiceId, setActiveChoiceId] = useState(choices[0].id)
  const [previewChoiceId, setPreviewChoiceId] = useState<string | null>(null)
  const [choosingChoiceId, setChoosingChoiceId] = useState<string | null>(null)
  const [isChoiceSetExiting, setIsChoiceSetExiting] = useState(false)
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

  const holdPreview = (choiceId: string) => {
    if (hoverReleaseTimerRef.current !== null) {
      window.clearTimeout(hoverReleaseTimerRef.current)
      hoverReleaseTimerRef.current = null
    }
    setPreviewChoiceId(choiceId)
    setActiveChoiceId(choiceId)
  }

  const releasePreviewSoon = () => {
    if (hoverReleaseTimerRef.current !== null) {
      window.clearTimeout(hoverReleaseTimerRef.current)
    }

    hoverReleaseTimerRef.current = window.setTimeout(() => {
      setPreviewChoiceId(null)
      hoverReleaseTimerRef.current = null
    }, HOVER_RELEASE_MS)
  }

  const getChoicePhase = (choiceId: string): ChoicePhase => {
    if (isChoiceSetExiting) return 'disappearing'
    if (choosingChoiceId === choiceId) return 'choosing'
    if (previewChoiceId === choiceId) return 'hovering'
    if (activeChoiceId === choiceId) return 'active'
    return 'showing'
  }

  const handleChoiceClick = (choiceId: string) => {
    if (choosingChoiceId || isChoiceSetExiting) throw new Error('Choice transition is already in progress')

    setPreviewChoiceId(null)
    setActiveChoiceId(choiceId)
    setChoosingChoiceId(choiceId)

    queueTimer(() => {
      setChoosingChoiceId(null)
      setIsChoiceSetExiting(true)

      queueTimer(() => {
        onChoose(choiceId)
      }, EXITING_MS)
    }, CHOOSING_MS)
  }

  useEffect(() => {
    setActiveChoiceId(choices[0].id)
    setPreviewChoiceId(null)
    setChoosingChoiceId(null)
    setIsChoiceSetExiting(false)
    clearTimers()
  }, [choices])

  useEffect(() => clearTimers, [])

  return (
    <div className="dialogue-choice-panel" aria-label="Choices">
      <p className="dialogue-eyebrow">Choose</p>
      {choices.map((choice, index) => {
        const choiceNumber = String(index + 1).padStart(2, '0')
        const phase = getChoicePhase(choice.id)
        const isLiquid = phase === 'active' || phase === 'choosing' || phase === 'hovering'
        const isChoosing = phase === 'choosing'
        const disabled = !!choosingChoiceId || isChoiceSetExiting
        const button = (
          <button
            className={`dialogue-choice black-coated-paper dialogue-choice--${phase}${isLiquid ? ' dialogue-choice--active' : ''}`}
            type="button"
            aria-busy={isChoosing}
            aria-pressed={phase === 'active'}
            disabled={disabled}
            onBlur={releasePreviewSoon}
            onClick={() => handleChoiceClick(choice.id)}
            onFocus={() => {
              if (!disabled) holdPreview(choice.id)
            }}
            onMouseEnter={() => {
              if (!disabled) holdPreview(choice.id)
            }}
            onMouseLeave={releasePreviewSoon}
          >
            <span className="dialogue-choice__number">{choiceNumber}</span>
            <span className="dialogue-choice__copy">{choice.text}</span>
            <span className="dialogue-choice__arrow" aria-hidden="true" />
            {(phase === 'choosing' || phase === 'active') && (
              <em className="dialogue-choice__status">{phase === 'choosing' ? 'Choosing' : 'Ready'}</em>
            )}
          </button>
        )

        return (
          <div className={`dialogue-choice-shell dialogue-choice-shell--${phase}`} key={choice.id}>
            {isLiquid ? (
              <div className="dialogue-liquid-choice">
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
  )
}
