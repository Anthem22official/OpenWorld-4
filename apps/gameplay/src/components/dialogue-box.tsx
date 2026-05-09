import { useEffect, useState } from 'react'

interface DialogueBoxProps {
  speaker?: string
  text: string
  onTypingChange?: (isTyping: boolean) => void
}

const TYPE_INTERVAL_MS = 28

export default function DialogueBox({ speaker, text, onTypingChange }: DialogueBoxProps) {
  if (!text) throw new Error('DialogueBox requires text')

  const [typedText, setTypedText] = useState('')
  const isTyping = typedText.length < text.length

  useEffect(() => {
    setTypedText('')
    onTypingChange?.(true)

    let characterIndex = 0
    const timer = window.setInterval(() => {
      characterIndex += 1
      setTypedText(text.slice(0, characterIndex))

      if (characterIndex >= text.length) {
        window.clearInterval(timer)
        onTypingChange?.(false)
      }
    }, TYPE_INTERVAL_MS)

    return () => {
      window.clearInterval(timer)
      onTypingChange?.(false)
    }
  }, [text, onTypingChange])

  return (
    <section className="dialogue-box black-coated-paper" aria-label="Dialogue">
      <div className="dialogue-box__glass-rim" aria-hidden="true" />
      <div className="dialogue-box__speaker-row">
        <span className="dialogue-box__mark" aria-hidden="true" />
        <div>
          <p className="dialogue-eyebrow">{speaker ? 'Speaker' : 'Narration'}</p>
          <h1>{speaker || 'The City'}</h1>
        </div>
      </div>
      <p className="dialogue-box__text" aria-live="polite">
        <span>{typedText}</span>
        <span className="dialogue-typewriter__cursor" data-active={isTyping} aria-hidden="true" />
      </p>
    </section>
  )
}
