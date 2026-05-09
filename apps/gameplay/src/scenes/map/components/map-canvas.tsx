import { ReactNode } from 'react'

interface MapCanvasProps {
  children: ReactNode
}

export default function MapCanvas({ children }: MapCanvasProps) {
  return (
    <div
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#0F172A',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(159, 122, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(184, 134, 11, 0.05) 0%, transparent 50%)',
        overflow: 'hidden',
        borderRadius: '8px',
        padding: 'clamp(8px, 2vw, 16px)',
      }}
    >
      {children}
    </div>
  )
}
