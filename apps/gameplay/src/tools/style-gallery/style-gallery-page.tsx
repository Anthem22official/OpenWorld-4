import { useEffect, useState } from 'react'
import ControlDemo from './components/control-demo'
import FoilChoiceDemo from './components/foil-choice-demo'
import GlassDemoCard from './components/glass-demo-card'
import MaterialSwatch from './components/material-swatch'
import { materialMetrics, materialSwatches } from './components/style-gallery-data'

interface StyleGalleryPageProps {
  onBackToDialogue: () => void
}

const dialogueSampleText =
  'The dialogue surface keeps a dark coated-paper body under the text while glass and foil live around the rim.'

export default function StyleGalleryPage({ onBackToDialogue }: StyleGalleryPageProps) {
  const [typedText, setTypedText] = useState('')
  const [typeRun, setTypeRun] = useState(0)
  const isTyping = typedText.length < dialogueSampleText.length

  useEffect(() => {
    setTypedText('')

    let characterIndex = 0
    const timer = window.setInterval(() => {
      characterIndex += 1
      setTypedText(dialogueSampleText.slice(0, characterIndex))

      if (characterIndex >= dialogueSampleText.length) {
        window.clearInterval(timer)
      }
    }, 34)

    return () => window.clearInterval(timer)
  }, [typeRun])

  return (
    <main className="style-gallery-page">
      <div className="style-gallery-ambient" aria-hidden="true" />

      <header className="style-gallery-hero black-coated-paper">
        <div>
          <p className="gallery-eyebrow">OpenWorld UI/UX Gallery</p>
          <h1>Black coated paper, liquid glass, and restrained laser foil.</h1>
          <p>
            A general demonstration board for the new visual language: tactile black surfaces,
            refractive controls, silver typography, and holographic emphasis only where attention
            is earned.
          </p>
        </div>

        <div className="gallery-ratio-panel" aria-label="Material ratio">
          {materialMetrics.map((metric) => (
            <div className={`gallery-ratio gallery-ratio--${metric.tone}`} key={metric.label}>
              <span>{metric.value}</span>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="gallery-section" aria-labelledby="materials-title">
        <div className="gallery-section__intro">
          <p className="gallery-eyebrow">Material Stack</p>
          <h2 id="materials-title">The base is quiet and physical</h2>
          <p>
            Large surfaces use black coated paper. Silver provides the default system language.
            Prism color appears only as a selected-state finish.
          </p>
        </div>

        <div className="style-swatch-grid">
          {materialSwatches.map((item) => (
            <MaterialSwatch item={item} key={item.name} />
          ))}
        </div>
      </section>

      <GlassDemoCard />
      <FoilChoiceDemo />

      <section className="gallery-dialogue-sample black-coated-paper" aria-labelledby="sample-title">
        <div className="gallery-dialogue-sample__speaker">
          <span className="gallery-star" aria-hidden="true" />
          <div>
            <p className="gallery-eyebrow">Dialogue Surface</p>
            <h2 id="sample-title">Readable over atmosphere</h2>
          </div>
        </div>
        <p className="gallery-typewriter" aria-live="polite">
          <span>{typedText}</span>
          <span className="gallery-typewriter__cursor" data-active={isTyping} aria-hidden="true" />
        </p>
        <button className="gallery-typewriter__replay" type="button" onClick={() => setTypeRun((current) => current + 1)}>
          Replay text
        </button>
      </section>

      <ControlDemo onBack={onBackToDialogue} />
    </main>
  )
}
