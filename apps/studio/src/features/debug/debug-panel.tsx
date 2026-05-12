import { useState, type ReactNode } from 'react'
import type { DebugRun, StudioModule } from '../pipeline/pipeline-types'

interface DebugPanelProps {
  module: StudioModule
  run: DebugRun
}

export default function DebugPanel({ module, run }: DebugPanelProps) {
  if (module.id === 'cg-debug') {
    return <CgDebugConsole module={module} run={run} />
  }

  return <TtsDebugConsole module={module} run={run} />
}

function CgDebugConsole({
  module,
  run,
}: {
  module: StudioModule
  run: DebugRun
}) {
  const [prompt, setPrompt] = useState(
    'Ren Takahashi at Shibuya Crossing night, glass reflections across black tailored coat, controlled expression, no readable text.',
  )
  const [size, setSize] = useState('2560x1440')
  const [quality, setQuality] = useState('medium')
  const [history, setHistory] = useState<DebugRun[]>([])

  const handleMockRun = () => {
    setHistory((current) => [run, ...current])
  }

  return (
    <section className="debug-console" aria-label={`${module.label} console`}>
      <DebugInputPanel
        title="CG Prompt"
        eyebrow="Input"
        onMockRun={handleMockRun}
        runLabel="Run mock CG"
      >
        <label className="studio-field">
          <span>Scene prompt</span>
          <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} rows={8} />
        </label>
        <label className="studio-field">
          <span>Size</span>
          <select value={size} onChange={(event) => setSize(event.target.value)}>
            <option value="2560x1440">2560x1440</option>
            <option value="1536x1024">1536x1024</option>
            <option value="1024x1024">1024x1024</option>
          </select>
        </label>
        <label className="studio-field">
          <span>Quality</span>
          <select value={quality} onChange={(event) => setQuality(event.target.value)}>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </label>
      </DebugInputPanel>

      <DebugOutputPanel
        emptyLabel="No CG run yet"
        emptyText="Run the mock console to preview scene metadata and image output shape."
        run={history[0] ?? null}
      />

      <DebugHistoryPanel history={history} />
    </section>
  )
}

function TtsDebugConsole({
  module,
  run,
}: {
  module: StudioModule
  run: DebugRun
}) {
  const [line, setLine] = useState(
    'You noticed the screen before the crowd. That is better than most people manage.',
  )
  const [model, setModel] = useState('google/gemini-3.1-flash-tts-preview')
  const [voice, setVoice] = useState('Charon')
  const [history, setHistory] = useState<DebugRun[]>([])

  const handleMockRun = () => {
    setHistory((current) => [run, ...current])
  }

  return (
    <section className="debug-console" aria-label={`${module.label} console`}>
      <DebugInputPanel
        title="Voice Line"
        eyebrow="Input"
        onMockRun={handleMockRun}
        runLabel="Run mock TTS"
      >
        <label className="studio-field">
          <span>Dialogue text</span>
          <textarea value={line} onChange={(event) => setLine(event.target.value)} rows={8} />
        </label>
        <label className="studio-field">
          <span>Model</span>
          <input value={model} onChange={(event) => setModel(event.target.value)} />
        </label>
        <label className="studio-field">
          <span>Voice</span>
          <select value={voice} onChange={(event) => setVoice(event.target.value)}>
            <option value="Charon">Charon</option>
            <option value="Fenrir">Fenrir</option>
            <option value="Orion">Orion</option>
          </select>
        </label>
      </DebugInputPanel>

      <DebugOutputPanel
        emptyLabel="No voice run yet"
        emptyText="Run the mock console to preview WAV metadata and output-key shape."
        run={history[0] ?? null}
      />

      <DebugHistoryPanel history={history} />
    </section>
  )
}

function DebugInputPanel({
  children,
  eyebrow,
  onMockRun,
  runLabel,
  title,
}: {
  children: ReactNode
  eyebrow: string
  onMockRun: () => void
  runLabel: string
  title: string
}) {
  return (
    <section className="debug-console__input black-coated-paper" aria-label={title}>
      <div className="studio-section-heading">
        <div>
          <p className="studio-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <span className="studio-status-pill">Mock only</span>
      </div>
      <div className="studio-step-content">
        {children}
        <button className="studio-primary-button" type="button" onClick={onMockRun}>
          {runLabel}
        </button>
      </div>
    </section>
  )
}

function DebugOutputPanel({
  emptyLabel,
  emptyText,
  run,
}: {
  emptyLabel: string
  emptyText: string
  run: DebugRun | null
}) {
  return (
    <section className="debug-console__output black-coated-paper" aria-label="Debug output">
      <div className="studio-section-heading">
        <div>
          <p className="studio-eyebrow">Output</p>
          <h2>{run?.title ?? 'Preview'}</h2>
        </div>
        <span className="studio-status-pill" data-state={run ? 'complete' : 'draft'}>
          {run ? run.status : 'Idle'}
        </span>
      </div>
      <div className="studio-step-content">
        {run ? (
          <>
            <div className="debug-preview-stage">
              <span>{run.title}</span>
            </div>
            <p className="studio-prompt-box">{run.summary}</p>
            <div className="studio-field-grid">
              {run.outputFields.map((field) => (
                <div className="studio-readonly-field" key={field.label}>
                  <span>{field.label}</span>
                  <strong>{field.value}</strong>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="studio-empty-state">
            <strong>{emptyLabel}</strong>
            <p>{emptyText}</p>
          </div>
        )}
      </div>
    </section>
  )
}

function DebugHistoryPanel({ history }: { history: DebugRun[] }) {
  return (
    <aside className="debug-console__history black-coated-paper" aria-label="Debug history">
      <div className="studio-section-heading">
        <div>
          <p className="studio-eyebrow">History</p>
          <h2>Runs</h2>
        </div>
        <span className="studio-status-pill">{history.length}</span>
      </div>
      <div className="studio-step-content">
        {history.length > 0 ? (
          history.map((item) => (
            <article className="debug-history-item" key={`${item.id}-${history.indexOf(item)}`}>
              <span>{item.status}</span>
              <strong>{item.title}</strong>
              <p>{item.summary}</p>
            </article>
          ))
        ) : (
          <div className="studio-empty-state">
            <strong>No run history</strong>
            <p>Mock runs appear here for repeated debug comparison.</p>
          </div>
        )}
      </div>
    </aside>
  )
}
