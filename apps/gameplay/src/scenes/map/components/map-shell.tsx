import { Location } from '../../../types/game'
import { CSSProperties } from 'react'
import MapAreaSvg from './map-area-svg'
import { MapArea, MapAreaMap, mapAttribution } from '../data/map-area-data'

interface MapShellProps {
  area: MapArea
  areaMap: MapAreaMap
  locations: Location[]
  currentLocation: Location
  focusedLocation: Location | null
  onLocationSelect: (locationId: string) => void
  onBuildingFocus: (location: Location | null) => void
  onBackToDialogue: () => void
  onShowDebugPanel?: () => void
  onShowLegacyMap?: () => void
}

export default function MapShell({
  area,
  areaMap,
  locations,
  currentLocation,
  focusedLocation,
  onLocationSelect,
  onBuildingFocus,
  onBackToDialogue,
  onShowDebugPanel,
  onShowLegacyMap,
}: MapShellProps) {
  const previewLocation = focusedLocation ?? currentLocation

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: '#07111F',
        color: '#F1F5F9',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        overflow: 'hidden',
      }}
    >
      <header
        style={{
          minHeight: '48px',
          padding: '8px clamp(12px, 2vw, 20px)',
          background: 'rgba(15, 23, 42, 0.86)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500 }}>
            {area.name} / {areaMap.name}
          </div>
          <div
            style={{
              fontSize: 'clamp(13px, 2vw, 16px)',
              color: '#F8FAFC',
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {currentLocation.name}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          {onShowLegacyMap && (
            <button type="button" onClick={onShowLegacyMap} style={toolbarButtonStyle}>
              Legacy
            </button>
          )}
          {onShowDebugPanel && (
            <button type="button" onClick={onShowDebugPanel} style={toolbarButtonStyle}>
              Debug
            </button>
          )}
          <button type="button" onClick={onBackToDialogue} style={primaryButtonStyle}>
            Back
          </button>
        </div>
      </header>

      <main style={{ position: 'relative', minHeight: 0, padding: 'clamp(8px, 2vw, 16px)' }}>
        <div
          style={{
            height: '100%',
            border: '1px solid rgba(148, 163, 184, 0.24)',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#07111F',
          }}
        >
          <MapAreaSvg
            areaMap={areaMap}
            locations={locations}
            currentLocationId={currentLocation.id}
            onLocationSelect={onLocationSelect}
            onBuildingFocus={onBuildingFocus}
          />
        </div>

        <section
          aria-live="polite"
          style={{
            position: 'absolute',
            left: 'clamp(16px, 3vw, 32px)',
            bottom: 'clamp(32px, 5vh, 56px)',
            width: 'min(360px, calc(100vw - 32px))',
            padding: '14px 16px',
            borderRadius: '8px',
            background: 'rgba(15, 23, 42, 0.88)',
            border: '1px solid rgba(148, 163, 184, 0.28)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>
            {focusedLocation ? 'Building' : 'Current location'}
          </div>
          <div style={{ fontSize: '16px', color: '#F8FAFC', fontWeight: 700 }}>
            {previewLocation.name}
          </div>
          {previewLocation.description && (
            <div style={{ marginTop: '6px', fontSize: '13px', color: '#CBD5E1', lineHeight: 1.45 }}>
              {previewLocation.description}
            </div>
          )}
        </section>

        <div
          style={{
            position: 'absolute',
            right: 'clamp(16px, 3vw, 32px)',
            bottom: 'clamp(14px, 3vh, 24px)',
            color: '#94A3B8',
            fontSize: '11px',
            background: 'rgba(15, 23, 42, 0.78)',
            border: '1px solid rgba(148, 163, 184, 0.18)',
            borderRadius: '6px',
            padding: '6px 8px',
          }}
        >
          {mapAttribution}
        </div>
      </main>
    </div>
  )
}

const toolbarButtonStyle: CSSProperties = {
  minHeight: '36px',
  padding: '8px 12px',
  border: '1px solid rgba(159, 122, 234, 0.72)',
  borderRadius: '6px',
  color: '#C4B5FD',
  background: 'rgba(15, 23, 42, 0.4)',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
}

const primaryButtonStyle: CSSProperties = {
  ...toolbarButtonStyle,
  color: '#07111F',
  background: '#F7C948',
  border: '1px solid #F7C948',
}
