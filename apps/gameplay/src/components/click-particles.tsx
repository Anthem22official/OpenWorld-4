import { CSSProperties, useEffect, useRef, useState } from 'react'

const CLICK_MOVE_THRESHOLD_PX = 5
const BURST_LIFETIME_MS = 520
const MAX_ACTIVE_BURSTS = 8
const PARTICLE_COUNT = 9

const PARTICLE_COLORS = [
  'var(--prism-cyan)',
  'var(--prism-pink)',
  'var(--prism-violet)',
  'var(--silver-foil)',
]

type ParticleShape = 'dot' | 'shard' | 'speck'

interface PendingPointer {
  startX: number
  startY: number
  hasMoved: boolean
}

interface ClickParticle {
  id: string
  offsetX: number
  offsetY: number
  size: number
  color: string
  shape: ParticleShape
  rotation: number
  delay: number
}

interface ClickBurst {
  id: number
  x: number
  y: number
  particles: ClickParticle[]
}

type BurstStyle = CSSProperties & {
  '--burst-x': string
  '--burst-y': string
}

type ParticleStyle = CSSProperties & {
  '--particle-x': string
  '--particle-y': string
  '--particle-size': string
  '--particle-color': string
  '--particle-rotation': string
}

export default function ClickParticles() {
  const [bursts, setBursts] = useState<ClickBurst[]>([])
  const nextBurstIdRef = useRef(0)
  const timeoutsRef = useRef<number[]>([])

  useEffect(() => {
    const pendingPointers = new Map<number, PendingPointer>()

    const removeBurst = (burstId: number) => {
      setBursts((currentBursts) => currentBursts.filter((burst) => burst.id !== burstId))
    }

    const addBurst = (x: number, y: number) => {
      if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) return

      const burstId = nextBurstIdRef.current
      nextBurstIdRef.current += 1

      const burst: ClickBurst = {
        id: burstId,
        x,
        y,
        particles: createParticles(burstId),
      }

      setBursts((currentBursts) => [
        ...currentBursts.slice(-(MAX_ACTIVE_BURSTS - 1)),
        burst,
      ])

      const timeoutId = window.setTimeout(() => removeBurst(burstId), BURST_LIFETIME_MS)
      timeoutsRef.current.push(timeoutId)
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!event.isPrimary) return
      if (event.pointerType === 'mouse' && event.button !== 0) return

      pendingPointers.set(event.pointerId, {
        startX: event.clientX,
        startY: event.clientY,
        hasMoved: false,
      })
    }

    const handlePointerMove = (event: PointerEvent) => {
      const pendingPointer = pendingPointers.get(event.pointerId)
      if (!pendingPointer || pendingPointer.hasMoved) return

      const deltaX = event.clientX - pendingPointer.startX
      const deltaY = event.clientY - pendingPointer.startY
      if (Math.hypot(deltaX, deltaY) >= CLICK_MOVE_THRESHOLD_PX) {
        pendingPointer.hasMoved = true
      }
    }

    const handlePointerUp = (event: PointerEvent) => {
      const pendingPointer = pendingPointers.get(event.pointerId)
      if (!pendingPointer) return

      pendingPointers.delete(event.pointerId)
      if (pendingPointer.hasMoved) return

      addBurst(event.clientX, event.clientY)
    }

    const handlePointerCancel = (event: PointerEvent) => {
      pendingPointers.delete(event.pointerId)
    }

    window.addEventListener('pointerdown', handlePointerDown, true)
    window.addEventListener('pointermove', handlePointerMove, true)
    window.addEventListener('pointerup', handlePointerUp, true)
    window.addEventListener('pointercancel', handlePointerCancel, true)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown, true)
      window.removeEventListener('pointermove', handlePointerMove, true)
      window.removeEventListener('pointerup', handlePointerUp, true)
      window.removeEventListener('pointercancel', handlePointerCancel, true)
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
    }
  }, [])

  return (
    <div className="click-particle-layer" aria-hidden="true">
      {bursts.map((burst) => {
        const burstStyle: BurstStyle = {
          '--burst-x': `${burst.x}px`,
          '--burst-y': `${burst.y}px`,
        }

        return (
          <span key={burst.id} className="click-particle-burst" style={burstStyle}>
            {burst.particles.map((particle) => {
              const particleStyle: ParticleStyle = {
                '--particle-x': `${particle.offsetX}px`,
                '--particle-y': `${particle.offsetY}px`,
                '--particle-size': `${particle.size}px`,
                '--particle-color': particle.color,
                '--particle-rotation': `${particle.rotation}deg`,
                animationDelay: `${particle.delay}ms`,
              }

              return (
                <span
                  key={particle.id}
                  className={`click-particle click-particle--${particle.shape}`}
                  style={particleStyle}
                />
              )
            })}
          </span>
        )
      })}
    </div>
  )
}

function createParticles(burstId: number): ClickParticle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const angle = ((Math.PI * 2) / PARTICLE_COUNT) * index + (burstId % 5) * 0.12
    const distance = 24 + ((index * 13 + burstId * 3) % 20)
    const shape = getParticleShape(index)

    return {
      id: `${burstId}-${index}`,
      offsetX: Math.cos(angle) * distance,
      offsetY: Math.sin(angle) * distance,
      size: shape === 'dot' ? 5 : shape === 'shard' ? 8 : 3,
      color: PARTICLE_COLORS[(index + burstId) % PARTICLE_COLORS.length],
      shape,
      rotation: (index * 41 + burstId * 17) % 180,
      delay: index * 8,
    }
  })
}

function getParticleShape(index: number): ParticleShape {
  if (index % 3 === 0) return 'shard'
  if (index % 3 === 1) return 'dot'
  return 'speck'
}
