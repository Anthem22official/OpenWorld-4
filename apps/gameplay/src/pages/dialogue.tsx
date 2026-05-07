import { useState, useEffect } from 'react'
import { GameState } from '../types/game'
import { dialogueNodes } from '../mocks/game-state'
import CharacterArea from '../components/character-area'
import DialogueBox from '../components/dialogue-box'
import ChoicePanel from '../components/choice-panel'

interface DialoguePageProps {
  gameState: GameState
}

export default function DialoguePage({ gameState }: DialoguePageProps) {
  const [currentDialogueId, setCurrentDialogueId] = useState(gameState.currentDialogueId)

  const currentDialogue = dialogueNodes[currentDialogueId]
  const hasChoices = currentDialogue.choices && currentDialogue.choices.length > 0

  const handleContinue = () => {
    if (currentDialogue.nextDialogueId) {
      setCurrentDialogueId(currentDialogue.nextDialogueId)
    }
  }

  const handleChoice = (choiceId: string) => {
    if (!currentDialogue.choices) return
    const choice = currentDialogue.choices.find((c) => c.id === choiceId)
    if (choice) {
      setCurrentDialogueId(choice.nextDialogueId)
    }
  }

  // Keyboard listener for space/enter to continue
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault()
        if (hasChoices) return
        // Only continue if there's a next dialogue
        if (currentDialogue.nextDialogueId) {
          handleContinue()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentDialogueId])

  return (
    <div
      onClick={() => {
        if (!hasChoices && currentDialogue.nextDialogueId) {
          handleContinue()
        }
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#1a1a2e',
        backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
        position: 'relative',
        overflow: 'hidden',
        cursor: !hasChoices && currentDialogue.nextDialogueId ? 'pointer' : 'default',
      }}
    >
      {/* Character Sprite - Full Screen Center */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <CharacterArea speaker={currentDialogue.speaker} />
      </div>

      {/* Bottom UI Panel - Fixed Height */}
      <div
        style={{
          backgroundColor: 'rgba(15, 52, 96, 0.95)',
          borderTop: '3px solid var(--color-lavender)',
          backdropFilter: 'blur(10px)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'relative',
          height: '220px',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        {/* Dialogue Box */}
        <DialogueBox speaker={currentDialogue.speaker} text={currentDialogue.text} />

        {/* Continue Indicator - Always reserves space, only visible when applicable */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: '12px',
            color: 'rgba(159, 122, 234, 0.6)',
            fontFamily: 'var(--font-sans)',
            height: '20px',
            visibility: !hasChoices && currentDialogue.nextDialogueId ? 'visible' : 'hidden',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }
          `}</style>
          Click or press SPACE to continue ▼
        </div>
      </div>

      {/* Choices Modal - Center Pop-up */}
      {hasChoices && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 100,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              backgroundColor: 'rgba(15, 52, 96, 0.95)',
              border: '2px solid var(--color-lavender)',
              borderRadius: '8px',
              padding: '32px',
              maxWidth: '500px',
              width: '90%',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 40px rgba(159, 122, 234, 0.4)',
            }}
          >
            <h3
              style={{
                fontSize: '14px',
                color: 'var(--color-lavender)',
                marginBottom: '20px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              What will you do?
            </h3>
            <ChoicePanel choices={currentDialogue.choices} onChoose={handleChoice} />
          </div>
        </div>
      )}
    </div>
  )
}
