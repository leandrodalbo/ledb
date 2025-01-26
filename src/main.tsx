import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import { homedata } from './assets/homedata'
import PackageComponent from './package/PackageComponent'
import { packages, packagesHeader } from './assets/packages'
import ContactComponent from './contact/ContactComponent'
import { contacs } from './assets/contact'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Home assets={homedata} />
    <PackageComponent packages={packages} hText={packagesHeader} />
    <ContactComponent contacts={contacs} />
  </StrictMode>,
)
