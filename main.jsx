import { StrictMode,useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/sidebar.jsx'
import Header from './components/Header.jsx'
import Text from './components/Text.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
