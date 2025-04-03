import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
//import Home from './Home.jsx'
import Apropos from './components/apropos.jsx'
import Profil from './components/Profil.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Apropos />
    <Profil />

  </StrictMode>,
)
