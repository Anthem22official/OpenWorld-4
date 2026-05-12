import type { ReactNode } from 'react'
import LiquidGlass from 'liquid-glass-react'
import type { StudioModule } from '../features/pipeline/pipeline-types'

interface StudioShellProps {
  activeModule: StudioModule
  children: ReactNode
  modules: StudioModule[]
  onSelectModule: (moduleId: StudioModule['id']) => void
}

export default function StudioShell({
  activeModule,
  children,
  modules,
  onSelectModule,
}: StudioShellProps) {
  return (
    <main className="studio-shell" aria-label="OpenWorld Studio">
      <header className="studio-topbar black-coated-paper">
        <div className="studio-title-block">
          <p className="studio-eyebrow">OpenWorld</p>
          <h1>Studio</h1>
        </div>
        <div className="studio-topbar__center">
          <span>UI-first creation console</span>
          <strong>{activeModule.label}</strong>
        </div>
        <div className="studio-topbar__status" aria-label="Persistence mode">
          <span className="studio-status-dot" />
          Draft review only
        </div>
      </header>

      <div className="studio-layout">
        <aside className="studio-sidebar black-coated-paper" aria-label="Studio modules">
          <div className="studio-sidebar__summary">
            <p className="studio-eyebrow">Management</p>
            <h2>Creation</h2>
            <span>No live writes</span>
          </div>

          <nav className="studio-nav" aria-label="Creation modules">
            {modules.map((module) => (
              <button
                className="studio-nav-item"
                data-active={module.id === activeModule.id}
                key={module.id}
                type="button"
                onClick={() => onSelectModule(module.id)}
              >
                <span className="studio-nav-item__eyebrow">{module.eyebrow}</span>
                <strong>{module.label}</strong>
                <small>{module.queueLabel}</small>
              </button>
            ))}
          </nav>
        </aside>

        <section className="studio-main" aria-label={`${activeModule.label} workspace`}>
          <div className="studio-module-hero black-coated-paper">
            <div>
              <p className="studio-eyebrow">{activeModule.eyebrow}</p>
              <h2>{activeModule.label}</h2>
              <p>{activeModule.description}</p>
            </div>
            <LiquidGlass
              displacementScale={28}
              blurAmount={0.05}
              saturation={124}
              aberrationIntensity={1.1}
              elasticity={0.04}
              cornerRadius={24}
              padding="0"
              style={{ position: 'relative' }}
            >
              <div className="studio-glass-badge">
                <span>{getModuleModeLabel(activeModule.id)}</span>
                <strong>{getModuleModeValue(activeModule.id)}</strong>
              </div>
            </LiquidGlass>
          </div>

          {children}
        </section>
      </div>

      <footer className="studio-bottom-rail black-coated-paper" aria-label="Studio status rail">
        <span>Mock contracts</span>
        <span>Fixed PC workbench</span>
        <span>No page scrolling</span>
        <span>No backend mutation</span>
      </footer>
    </main>
  )
}

function getModuleModeLabel(moduleId: StudioModule['id']): string {
  if (moduleId === 'events') return 'Batch'
  if (moduleId === 'cg-debug' || moduleId === 'tts-debug') return 'Console'
  return 'Pipeline'
}

function getModuleModeValue(moduleId: StudioModule['id']): string {
  if (moduleId === 'events') return 'Ideas to valid events'
  if (moduleId === 'cg-debug' || moduleId === 'tts-debug') return 'Direct debug tool'
  return 'AI design to validate'
}
