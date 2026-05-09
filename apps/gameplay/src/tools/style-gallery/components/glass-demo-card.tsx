import LiquidGlass from 'liquid-glass-react'

export default function GlassDemoCard() {
  const handleLiquidAction = () => {
    document.dispatchEvent(new CustomEvent('style-gallery-action', { detail: 'Liquid control tested' }))
  }

  return (
    <section className="gallery-section gallery-glass-field" aria-labelledby="glass-demo-title">
      <div className="gallery-section__intro">
        <p className="gallery-eyebrow">Liquid Glass</p>
        <h2 id="glass-demo-title">Interactive transparent layer</h2>
        <p>
          Glass surfaces sit above the black paper and carry the interface moments that should
          feel responsive, tactile, and refractive.
        </p>
      </div>

      <div className="glass-demo-grid">
        <div className="gallery-liquid-stage gallery-liquid-stage--card">
          <LiquidGlass
            displacementScale={48}
            blurAmount={0.08}
            saturation={128}
            aberrationIntensity={1.4}
            elasticity={0.03}
            cornerRadius={32}
            padding="0"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          >
            <div className="glass-demo-card">
              <span className="glass-demo-card__label">Glass panel</span>
              <strong>Frosted, refractive, readable.</strong>
              <p>Use for floating overlays, selected controls, and panel rims.</p>
            </div>
          </LiquidGlass>
        </div>

        <div className="gallery-liquid-stage gallery-liquid-stage--button">
          <LiquidGlass
            displacementScale={58}
            blurAmount={0.06}
            saturation={136}
            aberrationIntensity={1.8}
            elasticity={0.04}
            cornerRadius={999}
            padding="0"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          >
            <button className="glass-action" type="button" onClick={handleLiquidAction}>
              Test liquid button
            </button>
          </LiquidGlass>
        </div>
      </div>
    </section>
  )
}
