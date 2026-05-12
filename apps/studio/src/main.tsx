import React from 'react'
import ReactDOM from 'react-dom/client'
import StudioApp from './app/studio-app'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <StudioApp />
  </React.StrictMode>,
)
