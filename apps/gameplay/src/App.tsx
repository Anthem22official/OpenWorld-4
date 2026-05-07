import { useState } from 'react'
import DialoguePage from './pages/dialogue'
import { mockGameState } from './mocks/game-state'

export default function App() {
  const [gameState] = useState(mockGameState)

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <DialoguePage gameState={gameState} />
    </div>
  )
}
