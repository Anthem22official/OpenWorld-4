import { useCallback, useEffect, useRef, useState } from 'react'
import { Character, DialogueNode, DialogueScene, GameState } from '../../types/game'
import CharacterArea from './components/character-area'
import DialogueBox from './components/dialogue-box'
import ChoicePanel from './components/choice-panel'
import { CONVERSATION_MUSIC_TITLE, MUSIC_STATE_EVENT, MusicStateDetail } from '../../audio/music-handler'
import { createDialogueVoicePlayer, DialogueVoicePlayer } from './dialogue-voice-player'

interface DialoguePageProps {
  gameState: GameState
  dialogueNodes: Record<string, DialogueNode>
  characters: Character[]
  currentDialogueId: string
  onDialogueChange: (dialogueId: string) => void
  onShowMap?: () => void
  onShowMapSelection?: () => void
  onShowDebugPanel?: () => void
  onShowCharacterPage?: () => void
  onShowStyleGallery?: () => void
}

export default function DialoguePage({
  gameState,
  dialogueNodes,
  characters,
  currentDialogueId,
  onDialogueChange,
  onShowMap,
  onShowMapSelection,
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

  const speakerName = currentDialogue.speaker
    ? getCharacterName(characters, currentDialogue.speaker)
    : undefined
  const hasChoices = !!currentDialogue.choices?.length
  const characterNames = getCharacterNames(characters)
  assertDialogueScene(currentDialogue)
  const sceneImageUrl = resolveDialogueSceneImageUrl(currentDialogue.scene, currentDialogue.id)

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
      data-scene-mode={currentDialogue.scene.mode}
      data-can-continue={!hasChoices && !isDialogueTyping && !!currentDialogue.nextDialogueId}
      onClick={() => {
        if (!hasChoices && !isDialogueTyping && currentDialogue.nextDialogueId) handleContinue()
      }}
    >
      <div className="dialogue-scene-art" aria-hidden="true">
        <img src={sceneImageUrl} alt="" />
      </div>

      <header className="dialogue-status black-coated-paper" onClick={(event) => event.stopPropagation()}>
        <div className="dialogue-status__scene">
          <div className="dialogue-status__scene-top">
            {onShowMapSelection && (
              <button className="dialogue-area-selection-button" type="button" onClick={onShowMapSelection}>
                Area Selection
              </button>
            )}
            <span className="dialogue-status__label">Chapter 01</span>
          </div>
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
          <span>{formatGameTime(gameState.gameTimeDetail)}</span>
          <span>{gameState.currentLocation}</span>
        </div>
        <div className="dialogue-hud-actions">
          {onShowMap && (
            <button className="dialogue-hud-button" type="button" onClick={onShowMap}>
              Return to Map
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

        {currentDialogue.scene.mode === 'dialogue' && currentDialogue.scene.characterIds.length > 0 && (
          <CharacterArea
            characterIds={currentDialogue.scene.characterIds}
            activeCharacterId={currentDialogue.speaker}
            characterNames={characterNames}
          />
        )}

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
        <DialogueBox speaker={speakerName} text={currentDialogue.text} onTypingChange={handleTypingChange} />

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

function getCharacterName(characters: Character[], characterId: string): string {
  const character = characters.find((item) => item.id === characterId)
  if (!character) throw new Error(`Dialogue speaker character not found: ${characterId}`)

  return character.name
}

function getCharacterNames(characters: Character[]): Record<string, string> {
  return Object.fromEntries(characters.map((character) => [character.id, character.name]))
}

function assertDialogueScene(dialogue: DialogueNode): void {
  const { scene } = dialogue
  if (scene.characterIds.length > 4) {
    throw new Error(`Dialogue node ${dialogue.id} scene supports at most 4 characters`)
  }

  if (scene.mode === 'dialogue') {
    if (!scene.backgroundAssetKey) throw new Error(`Dialogue node ${dialogue.id} requires scene.backgroundAssetKey`)
    if (dialogue.speaker && !scene.characterIds.includes(dialogue.speaker)) {
      throw new Error(`Dialogue node ${dialogue.id} speaker must be included in scene.characterIds`)
    }
    return
  }

  if (scene.mode === 'cg') {
    if (!scene.cgAssetKey) throw new Error(`Dialogue node ${dialogue.id} requires scene.cgAssetKey`)
    if (scene.characterIds.length > 1) throw new Error(`Dialogue node ${dialogue.id} CG mode supports at most 1 character`)
    if (dialogue.speaker && scene.characterIds.length > 0 && !scene.characterIds.includes(dialogue.speaker)) {
      throw new Error(`Dialogue node ${dialogue.id} speaker must be included in scene.characterIds`)
    }
    return
  }

  throw new Error(`Dialogue node ${dialogue.id} has unsupported scene mode`)
}

function resolveDialogueSceneImageUrl(scene: DialogueScene, dialogueId: string): string {
  const assetKey = scene.mode === 'cg' ? scene.cgAssetKey : scene.backgroundAssetKey
  if (!assetKey) throw new Error(`Dialogue node ${dialogueId} is missing scene image asset key`)

  return resolveAssetUrl(validateImageAssetKey(assetKey, `Dialogue node ${dialogueId} scene image`))
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

function validateImageAssetKey(assetKey: string, label: string): string {
  const trimmedKey = assetKey.trim()
  if (trimmedKey.length === 0) throw new Error(`${label} cannot be empty`)
  if (trimmedKey.startsWith('/')) throw new Error(`${label} must be a storage key, not a public URL`)
  if (trimmedKey.includes('..')) throw new Error(`${label} cannot contain parent directory segments`)
  if (!trimmedKey.endsWith('.jpg') && !trimmedKey.endsWith('.jpeg') && !trimmedKey.endsWith('.png')) {
    throw new Error(`${label} must reference an image file`)
  }

  return trimmedKey
}

function formatGameTime(gameTimeDetail: string): string {
  const match = gameTimeDetail.match(/\b(\d{2}:\d{2})\b/)
  if (!match) throw new Error(`Invalid gameTimeDetail: ${gameTimeDetail}`)

  return match[1]
}
