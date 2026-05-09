import { useCallback, useEffect, useState } from 'react'
import { GameState } from '../types/game'
import { dialogueNodes } from '../mocks/game-state'
import CharacterArea from '../components/character-area'
import DialogueBox from '../components/dialogue-box'
import ChoicePanel from '../components/choice-panel'

interface DialoguePageProps {
  gameState: GameState
  onShowMap?: () => void
  onShowDebugPanel?: () => void
  onShowStyleGallery?: () => void
}

export default function DialoguePage({
  gameState,
  onShowMap,
  onShowDebugPanel,
  onShowStyleGallery,
}: DialoguePageProps) {
  const [currentDialogueId, setCurrentDialogueId] = useState(gameState.currentDialogueId)
  const [isDialogueTyping, setIsDialogueTyping] = useState(false)
  const handleTypingChange = useCallback((isTyping: boolean) => {
    setIsDialogueTyping(isTyping)
  }, [])

  const currentDialogue = dialogueNodes[currentDialogueId]
  if (!currentDialogue) throw new Error(`Dialogue node not found: ${currentDialogueId}`)

  const hasChoices = !!currentDialogue.choices?.length

  const handleContinue = () => {
    if (isDialogueTyping) return
    if (!currentDialogue.nextDialogueId) throw new Error('nextDialogueId is required to continue')
    setCurrentDialogueId(currentDialogue.nextDialogueId)
  }

  const handleChoice = (choiceId: string) => {
    if (!currentDialogue.choices) throw new Error('choices are required to choose')

    const choice = currentDialogue.choices.find((item) => item.id === choiceId)
    if (!choice) throw new Error(`Choice not found: ${choiceId}`)

    setCurrentDialogueId(choice.nextDialogueId)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'Space' && event.code !== 'Enter') return

      event.preventDefault()
      if (hasChoices || isDialogueTyping || !currentDialogue.nextDialogueId) return

      handleContinue()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentDialogueId, hasChoices, isDialogueTyping, currentDialogue.nextDialogueId])

  return (
    <div
      className="dialogue-stage"
      data-can-continue={!hasChoices && !isDialogueTyping && !!currentDialogue.nextDialogueId}
      onClick={() => {
        if (!hasChoices && !isDialogueTyping && currentDialogue.nextDialogueId) handleContinue()
      }}
    >
      <header className="dialogue-status black-coated-paper" onClick={(event) => event.stopPropagation()}>
        <div>
          <span className="dialogue-status__label">Chapter 01</span>
          <strong>Sharp Evening</strong>
        </div>
        <div className="dialogue-status__center">
          <span>18:42</span>
          <span>{gameState.currentLocation}</span>
        </div>
        <div className="dialogue-hud-actions">
          {onShowMap && (
            <button className="dialogue-hud-button" type="button" onClick={onShowMap}>
              Map
            </button>
          )}
          {onShowDebugPanel && (
            <button className="dialogue-hud-button" type="button" onClick={onShowDebugPanel}>
              Debug
            </button>
          )}
          {onShowStyleGallery && (
            <button className="dialogue-hud-button dialogue-hud-button--active" type="button" onClick={onShowStyleGallery}>
              Gallery
            </button>
          )}
          <div className="dialogue-menu-corner" aria-label="Menu">
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      <div className="dialogue-scene">
        <aside className="dialogue-chapter-card black-coated-paper" onClick={(event) => event.stopPropagation()}>
          <p className="dialogue-eyebrow">Current Scene</p>
          <h2>Shibuya Crossing</h2>
          <p>The city lights fold into the crowd while the conversation narrows to one decision.</p>
          <div className="dialogue-progress" aria-hidden="true">
            <span />
          </div>
        </aside>

        <CharacterArea speaker={currentDialogue.speaker} />

        {hasChoices && (
          <aside className="dialogue-choice-dock" onClick={(event) => event.stopPropagation()}>
            <ChoicePanel choices={currentDialogue.choices || []} onChoose={handleChoice} />
          </aside>
        )}
      </div>

      <footer
        className="dialogue-footer"
        onClick={() => {
          if (!hasChoices && !isDialogueTyping && currentDialogue.nextDialogueId) handleContinue()
        }}
      >
        <DialogueBox speaker={currentDialogue.speaker} text={currentDialogue.text} onTypingChange={handleTypingChange} />

        <div
          className="dialogue-continue"
          data-visible={!hasChoices && !isDialogueTyping && !!currentDialogue.nextDialogueId}
          aria-hidden={hasChoices || isDialogueTyping || !currentDialogue.nextDialogueId}
        >
          Click or press Space to continue
        </div>
      </footer>
    </div>
  )
}
