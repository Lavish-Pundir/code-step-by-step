import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Previous from './Previous.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Previous />
  </StrictMode>,
)
