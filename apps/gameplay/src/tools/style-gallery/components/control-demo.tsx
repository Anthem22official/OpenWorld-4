import LiquidGlass from 'liquid-glass-react'
import { useEffect, useState } from 'react'

interface ControlDemoProps {
  onBack: () => void
}

export default function ControlDemo({ onBack }: ControlDemoProps) {
  const [lastAction, setLastAction] = useState('No action selected')

  useEffect(() => {
    const handleGalleryAction = (event: Event) => {
      const customEvent = event as CustomEvent<string>
      setLastAction(customEvent.detail)
    }

    document.addEventListener('style-gallery-action', handleGalleryAction)
    return () => document.removeEventListener('style-gallery-action', handleGalleryAction)
  }, [])

  return (
    <section className="gallery-control-rail black-coated-paper" aria-label="Control examples">
      <button className="gallery-icon-button" type="button" aria-label="Grid menu">
        <span />
        <span />
        <span />
        <span />
      </button>
      <button
        className="gallery-control-button gallery-control-button--primary"
        type="button"
        onClick={() => setLastAction('Primary action pressed')}
      >
        Primary action
      </button>
      <button
        className="gallery-control-button"
        type="button"
        onClick={() => setLastAction('Secondary action pressed')}
      >
        Secondary action
      </button>
      <div className="gallery-liquid-stage gallery-liquid-stage--pill">
        <LiquidGlass
          displacementScale={36}
          blurAmount={0.05}
          saturation={130}
          aberrationIntensity={1.3}
          elasticity={0.035}
          cornerRadius={999}
          padding="0"
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        >
          <button className="gallery-control-button gallery-control-button--glass" type="button">
            Liquid control
          </button>
        </LiquidGlass>
      </div>
      <button className="gallery-control-button gallery-control-button--disabled" type="button" disabled>
        Disabled
      </button>
      <output className="gallery-control-status" aria-live="polite">
        {lastAction}
      </output>
      <button className="gallery-control-button" type="button" onClick={onBack}>
        Back to demo
      </button>
    </section>
  )
}
