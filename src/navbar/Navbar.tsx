import { useState } from "react";
import { NavigationItems } from "../types";
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    items: NavigationItems
}

const Navbar = ({ items }: NavbarProps) => {
    const [lang, setLang] = useState("en")

    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        (lang === "en") ? setLang("es") :
            setLang("en");
        i18n.changeLanguage(lang);
    };

    return (
        <nav className="fixed top-0 left-0 w-full shadow-lg z-10 bg-darkBg text-jungleGreen py-4 px-6 flex justify-between items-center">
            <a href="#home"><p className="text-xl font-bold text-junglePink">{items.jl}</p></a>

            <ul className="flex justify-center space-x-8 py-4">
                <li className="hover:text-junglePink"><a href="#home">{t(items.homeKey)}</a></li>
                <li className="hover:text-junglePink"><a href="#packages">{t(items.packagesKey)}</a></li>
                <li className="hover:text-junglePink"><a href="#contact">{t(items.contactKey)}</a></li>
                <li><img src={(lang !== "en" ? items.en : items.es)} alt={lang} className="w-5 h-5" onClick={() => changeLanguage()} /></li>
            </ul>

        </nav>
    );
};

export default Navbar;
