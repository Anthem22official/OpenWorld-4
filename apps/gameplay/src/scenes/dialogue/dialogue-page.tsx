import { useCallback, useEffect, useRef, useState } from 'react'
import { DialogueNode, GameState } from '../../types/game'
import CharacterArea from './components/character-area'
import DialogueBox from './components/dialogue-box'
import ChoicePanel from './components/choice-panel'
import { CONVERSATION_MUSIC_TITLE, MUSIC_STATE_EVENT, MusicStateDetail } from '../../audio/music-handler'
import { createDialogueVoicePlayer, DialogueVoicePlayer } from './dialogue-voice-player'

interface DialoguePageProps {
  gameState: GameState
  dialogueNodes: Record<string, DialogueNode>
  currentDialogueId: string
  onDialogueChange: (dialogueId: string) => void
  onShowMap?: () => void
  onShowDebugPanel?: () => void
  onShowCharacterPage?: () => void
  onShowStyleGallery?: () => void
}

export default function DialoguePage({
  gameState,
  dialogueNodes,
  currentDialogueId,
  onDialogueChange,
  onShowMap,
  onShowDebugPanel,
  onShowCharacterPage,
  onShowStyleGallery,
}: DialoguePageProps) {
  const [isDialogueTyping, setIsDialogueTyping] = useState(false)
  const [musicState, setMusicState] = useState<MusicStateDetail | null>(null)
  const voicePlayerRef = useRef<DialogueVoicePlayer | null>(null)
  const handleTypingChange = useCallback((isTyping: boolean) => {
    setIsDialogueTyping(isTyping)
  }, [])

  const currentDialogue = dialogueNodes[currentDialogueId]
  if (!currentDialogue) throw new Error(`Dialogue node not found: ${currentDialogueId}`)

  const hasChoices = !!currentDialogue.choices?.length

  const handleContinue = () => {
    if (isDialogueTyping) return
    if (!currentDialogue.nextDialogueId) throw new Error('nextDialogueId is required to continue')
    voicePlayerRef.current?.stop()
    onDialogueChange(currentDialogue.nextDialogueId)
  }

  const handleChoice = (choiceId: string) => {
    if (!currentDialogue.choices) throw new Error('choices are required to choose')

    const choice = currentDialogue.choices.find((item) => item.id === choiceId)
    if (!choice) throw new Error(`Choice not found: ${choiceId}`)

    voicePlayerRef.current?.stop()
    onDialogueChange(choice.nextDialogueId)
  }

  useEffect(() => {
    const voicePlayer = createDialogueVoicePlayer()
    voicePlayerRef.current = voicePlayer

    return () => {
      voicePlayer.dispose()
      voicePlayerRef.current = null
    }
  }, [])

  useEffect(() => {
    voicePlayerRef.current?.play(currentDialogue.voiceAssetKey)
  }, [currentDialogueId, currentDialogue.voiceAssetKey])

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

  useEffect(() => {
    const handleMusicState = (event: Event) => {
      const musicEvent = event as CustomEvent<MusicStateDetail>
      setMusicState(musicEvent.detail)
    }

    window.addEventListener(MUSIC_STATE_EVENT, handleMusicState)
    return () => window.removeEventListener(MUSIC_STATE_EVENT, handleMusicState)
  }, [])

  const musicTitle = musicState?.title ?? CONVERSATION_MUSIC_TITLE
  const musicProgress = musicState?.duration ? `${Math.min(100, (musicState.currentTime / musicState.duration) * 100)}%` : '0%'
  const musicLength = musicState?.duration ? `${formatMusicTime(musicState.currentTime)} / ${formatMusicTime(musicState.duration)}` : 'loading'

  return (
    <div
      className="dialogue-stage"
      data-can-continue={!hasChoices && !isDialogueTyping && !!currentDialogue.nextDialogueId}
      onClick={() => {
        if (!hasChoices && !isDialogueTyping && currentDialogue.nextDialogueId) handleContinue()
      }}
    >
      <header className="dialogue-status black-coated-paper" onClick={(event) => event.stopPropagation()}>
        <div className="dialogue-status__scene">
          <span className="dialogue-status__label">Chapter 01</span>
          <div className="dialogue-status__title-row">
            <strong>Sharp Evening</strong>
            <div className="dialogue-now-playing" aria-label={`Now playing ${musicTitle}, ${musicLength}`}>
              <span className="dialogue-now-playing__pulse" aria-hidden="true" />
              <span className="dialogue-now-playing__label">Playing</span>
              <span className="dialogue-now-playing__title">{musicTitle}</span>
              <span className="dialogue-now-playing__length">{musicLength}</span>
              <span className="dialogue-now-playing__meter" aria-hidden="true">
                <span style={{ width: musicProgress }} />
              </span>
            </div>
          </div>
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
          {onShowCharacterPage && (
            <button className="dialogue-hud-button" type="button" onClick={onShowCharacterPage}>
              Character
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

function formatMusicTime(seconds: number) {
  if (!Number.isFinite(seconds)) throw new Error(`Invalid music time: ${seconds}`)

  const roundedSeconds = Math.floor(seconds)
  const minutes = Math.floor(roundedSeconds / 60)
  const remainingSeconds = roundedSeconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}
