import { useEffect, useRef } from 'react'

export type MusicPage = 'dialogue' | 'map-select' | 'map' | 'event' | 'legacy-map' | 'debug-image-gen' | 'character' | 'style-gallery'

export const MUSIC_STATE_EVENT = 'openworld:music-state'

export interface MusicStateDetail {
  title: string
  currentTime: number
  duration: number | null
}

const musicTracks = {
  map: {
    path: '/assets/music/shibuya-glass-drift-map.mp3',
    title: 'Shibuya Glass Drift',
  },
  conversation: {
    path: '/assets/music/shibuya-glass-drift-conversation.mp3',
    title: 'Afterglass Conversation',
  },
} as const

const musicByPage: Record<MusicPage, (typeof musicTracks)[keyof typeof musicTracks]> = {
  dialogue: musicTracks.conversation,
  'map-select': musicTracks.map,
  map: musicTracks.map,
  event: musicTracks.map,
  'legacy-map': musicTracks.map,
  'debug-image-gen': musicTracks.map,
  character: musicTracks.map,
  'style-gallery': musicTracks.map,
}

export const CONVERSATION_MUSIC_TITLE = musicTracks.conversation.title

function publishMusicState(audio: HTMLAudioElement, title: string) {
  const duration = Number.isFinite(audio.duration) ? audio.duration : null
  const detail: MusicStateDetail = {
    title,
    currentTime: audio.currentTime,
    duration,
  }

  window.dispatchEvent(new CustomEvent<MusicStateDetail>(MUSIC_STATE_EVENT, { detail }))
}

interface MusicHandlerProps {
  currentPage: MusicPage
}

export default function MusicHandler({ currentPage }: MusicHandlerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    let isEffectActive = true
    let removePlaybackUnlock: (() => void) | undefined
    const musicTrack = musicByPage[currentPage]
    if (!musicTrack) throw new Error(`Music track not found for page: ${currentPage}`)

    if (!audioRef.current) {
      audioRef.current = new Audio(musicTrack.path)
      audioRef.current.loop = true
      audioRef.current.volume = 0.42
    }

    const audio = audioRef.current
    if (audio.src !== new URL(musicTrack.path, window.location.href).href) {
      audio.pause()
      audio.src = musicTrack.path
      audio.currentTime = 0
    }

    const handleMusicStateChange = () => publishMusicState(audio, musicTrack.title)
    audio.addEventListener('loadedmetadata', handleMusicStateChange)
    audio.addEventListener('timeupdate', handleMusicStateChange)
    audio.addEventListener('durationchange', handleMusicStateChange)
    handleMusicStateChange()

    audio.play().catch((error: unknown) => {
      if (!isEffectActive) return

      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        const unlockPlayback = () => {
          removePlaybackUnlock?.()
          audio.play().catch((playbackError: unknown) => {
            throw playbackError
          })
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

    return () => {
      isEffectActive = false
      removePlaybackUnlock?.()
      audio.removeEventListener('loadedmetadata', handleMusicStateChange)
      audio.removeEventListener('timeupdate', handleMusicStateChange)
      audio.removeEventListener('durationchange', handleMusicStateChange)
      audio.pause()
    }
  }, [currentPage])

  return null
}
