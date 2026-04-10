import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseMemo from './UseMemo.jsx'
import RefUse from './RefUse.jsx'
import UseRefHook from './UseRefHook.jsx'
import ForwordRef from './ForwordRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UseMemo />
    <RefUse />
    <UseRefHook />
    <ForwordRef />
  </StrictMode>,
)
