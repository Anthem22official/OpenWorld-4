import { useMemo, useState } from 'react'
import type { GameState } from '../../types/game'
import {
  getArea,
  getAreaMap,
  getAreaMapsForArea,
  mapAreas,
} from './data/map-area-data'

interface MapSelectionPageProps {
  gameState: GameState
  activeAreaMapId: string
  onSelectAreaMap: (areaMapId: string) => void
  onBackToDialogue: () => void
}

export default function MapSelectionPage({
  gameState,
  activeAreaMapId,
  onSelectAreaMap,
  onBackToDialogue,
}: MapSelectionPageProps) {
  const activeAreaMap = useMemo(() => getAreaMap(activeAreaMapId), [activeAreaMapId])
  const [selectedAreaId, setSelectedAreaId] = useState(activeAreaMap.areaId)
  const selectedArea = useMemo(() => getArea(selectedAreaId), [selectedAreaId])
  const selectedAreaMaps = useMemo(() => getAreaMapsForArea(selectedAreaId), [selectedAreaId])
  const mapState = gameState.mapState
  if (!mapState) throw new Error('mapState is required for map selection')

  const currentLocation = mapState.locations.find(
    (location) => location.id === mapState.currentLocationId,
  )
  if (!currentLocation) throw new Error(`Location ${mapState.currentLocationId} not found`)

  return (
    <main className="map-selection-page">
      <header className="map-selection-header black-coated-paper">
        <div>
          <span className="map-selection-eyebrow">Area Selection</span>
          <h1>Choose Map</h1>
        </div>
        <div className="map-selection-current" aria-label={`Current location: ${currentLocation.name}`}>
          <span>Now</span>
          <strong>{currentLocation.name}</strong>
        </div>
        <button className="map-tool-button map-tool-button--primary" type="button" onClick={onBackToDialogue}>
          Back
        </button>
      </header>

      <section className="map-selection-layout" aria-label="Map selection">
        <div className="map-selection-panel black-coated-paper">
          <div className="map-selection-panel__heading">
            <span>01</span>
            <h2>Area</h2>
          </div>
          <div className="map-selection-list">
            {mapAreas.map((area) => {
              const isSelected = area.id === selectedAreaId

              return (
                <button
                  key={area.id}
                  className={isSelected ? 'map-selection-card map-selection-card--selected' : 'map-selection-card'}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedAreaId(area.id)}
                >
                  <span>{area.name}</span>
                  <strong>{area.description}</strong>
                </button>
              )
            })}
          </div>
        </div>

        <div className="map-selection-panel black-coated-paper">
          <div className="map-selection-panel__heading">
            <span>02</span>
            <h2>{selectedArea.name} Maps</h2>
          </div>
          <div className="map-selection-list">
            {selectedAreaMaps.map((areaMap) => {
              const isActive = areaMap.id === activeAreaMapId

              return (
                <button
                  key={areaMap.id}
                  className={isActive ? 'map-selection-card map-selection-card--selected' : 'map-selection-card'}
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => onSelectAreaMap(areaMap.id)}
                >
                  <span>{areaMap.name}</span>
                  <strong>{areaMap.description}</strong>
                  <em>{areaMap.backgroundBuildings.length} OSM buildings</em>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
