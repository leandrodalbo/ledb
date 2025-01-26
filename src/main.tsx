import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import { homedata } from './assets/homedata'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Home assets={homedata} />
  </StrictMode>,
)
