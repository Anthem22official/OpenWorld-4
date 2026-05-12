export interface DialogueVoicePlayer {
  play: (voiceAssetKey?: string) => void
  stop: () => void
  dispose: () => void
}

export function createDialogueVoicePlayer(): DialogueVoicePlayer {
  let audio: HTMLAudioElement | null = null
  let pendingVoiceAssetKey: string | undefined
  let removePlaybackUnlock: (() => void) | undefined

  const clearPlaybackUnlock = () => {
    removePlaybackUnlock?.()
    removePlaybackUnlock = undefined
  }

  const ensureAudio = () => {
    if (!audio) {
      audio = new Audio()
      audio.preload = 'auto'
    }

    return audio
  }

  const stop = () => {
    pendingVoiceAssetKey = undefined
    clearPlaybackUnlock()

    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    audio.removeAttribute('src')
    audio.load()
  }

  const playResolvedKey = (voiceAssetKey: string, canRetryAfterGesture: boolean) => {
    const voiceUrl = resolveDialogueVoiceUrl(voiceAssetKey)
    const voiceAudio = ensureAudio()

    voiceAudio.pause()
    voiceAudio.src = voiceUrl
    voiceAudio.currentTime = 0

    voiceAudio.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'NotAllowedError' && canRetryAfterGesture) {
        pendingVoiceAssetKey = voiceAssetKey

        const unlockPlayback = () => {
          const queuedVoiceAssetKey = pendingVoiceAssetKey
          pendingVoiceAssetKey = undefined
          clearPlaybackUnlock()
          if (queuedVoiceAssetKey) playResolvedKey(queuedVoiceAssetKey, false)
        }

        window.addEventListener('pointerdown', unlockPlayback, { once: true })
        window.addEventListener('keydown', unlockPlayback, { once: true })
        removePlaybackUnlock = () => {
          window.removeEventListener('pointerdown', unlockPlayback)
          window.removeEventListener('keydown', unlockPlayback)
        }
        return
      }

      throw error
    })
  }

  return {
    play(voiceAssetKey?: string) {
      stop()
      if (!voiceAssetKey) return
      playResolvedKey(voiceAssetKey, true)
    },
    stop,
    dispose() {
      stop()
      audio = null
    },
  }
}

export function resolveDialogueVoiceUrl(voiceAssetKey: string): string {
  const trimmedKey = voiceAssetKey.trim()
  if (trimmedKey.length === 0) throw new Error('Dialogue voice asset key cannot be empty')
  if (trimmedKey.startsWith('/')) throw new Error('Dialogue voice asset key must be a storage key, not a public URL')
  if (trimmedKey.includes('..')) throw new Error('Dialogue voice asset key cannot contain parent directory segments')
  if (!trimmedKey.endsWith('.wav')) throw new Error('Dialogue voice asset key must reference a .wav file')

  return resolveAssetUrl(trimmedKey)
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
