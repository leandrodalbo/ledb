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
import MessageMe from "./messageMe/MessageMe";
import { messageAssets } from "./assets/mensaje";
import sendMessage from "./sendMessageService/SendMessageService";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar items={navItems} />
    <main className="bg-darkBg">
      <Home assets={homedata} />
      <ServicesComponent services={services} hText={navItems.servicesKey} />
      <MessageMe assets={messageAssets} sendMessageService={sendMessage} />
    </main>
    <ContactComponent contacts={contacs} />
  </StrictMode>
);
