import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import { homedata } from "./assets/homedata";
import ServicesComponent from "./services/ServicesComponent";
import { services } from "./assets/services";
import { navItems } from "./assets/navigation";
import ContactComponent from "./contact/ContactComponent";
import { contacs } from "./assets/contact";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar items={navItems} />
    <Home assets={homedata} />
    <ServicesComponent services={services} hText={navItems.servicesKey} />
    <ContactComponent contacts={contacs} />
  </StrictMode>
);
