import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseMemo from './UseMemo.jsx'
import RefUse from './RefUse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UseMemo />
    <RefUse />
  </StrictMode>,
)
