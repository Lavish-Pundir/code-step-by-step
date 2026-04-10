import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UnControlled from './UnControlled.jsx'
import HocHighOrdered from './HocHighOrdered.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UnControlled />
    <HocHighOrdered />
  </StrictMode>,
)
