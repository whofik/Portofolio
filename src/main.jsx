import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Best Practices: jangan blok contextmenu / F12 — merusak a11y, bfcache, dan agentic browsing (agents & screen readers butuh menu).
// Jika perlu proteksi, gunakan watermark/CSP, bukan preventDefault.
