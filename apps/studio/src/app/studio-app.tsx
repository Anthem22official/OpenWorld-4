import { useMemo, useState } from 'react'
import CreationPanel from '../features/creation/creation-panel'
import DebugPanel from '../features/debug/debug-panel'
import type { StudioModuleId } from '../features/pipeline/pipeline-types'
import {
  cgDebugRun,
  creatorDrafts,
  creatorPlaceholders,
  eventDrafts,
  eventIdeas,
  getStudioModule,
  mockDatabaseCharacters,
  mockDatabaseLocations,
  studioModules,
  ttsDebugRun,
} from '../data/studio-mocks'
import StudioShell from './studio-shell'

export default function StudioApp() {
  const [activeModuleId, setActiveModuleId] = useState<StudioModuleId>('characters')
  const activeModule = useMemo(() => getStudioModule(activeModuleId), [activeModuleId])

  return (
    <StudioShell
      activeModule={activeModule}
      modules={studioModules}
      onSelectModule={setActiveModuleId}
    >
      {activeModuleId === 'characters' || activeModuleId === 'locations' ? (
        <CreationPanel
          module={activeModule}
          draft={creatorDrafts[activeModuleId]}
          placeholder={creatorPlaceholders[activeModuleId]}
        />
      ) : activeModuleId === 'events' ? (
        <CreationPanel
          module={activeModule}
          characters={mockDatabaseCharacters}
          locations={mockDatabaseLocations}
          eventIdeas={eventIdeas}
          eventDrafts={eventDrafts}
        />
      ) : (
        <DebugPanel
          module={activeModule}
          run={activeModuleId === 'cg-debug' ? cgDebugRun : ttsDebugRun}
        />
      )}
    </StudioShell>
  )
}
