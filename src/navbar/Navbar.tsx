import { NavigationItems } from "../types";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  items: NavigationItems;
}

const Navbar = ({ items }: NavbarProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  const flag = i18n.language === "en" ? items.en : items.es;

  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg z-10 bg-darkBg text-jungleGreen py-4 px-6 flex justify-between items-center">
      <a href="#home">
        <p className="text-xl font-bold text-junglePink mr-2">{items.brand}</p>
      </a>

      <ul className="flex justify-center space-x-2 sm:space-x-4 py-2 sm:py-4 text-sm sm:text-base">
        <li className="hover:text-junglePink">
          <a href="#home">{t(items.homeKey)}</a>
        </li>
        <li className="hover:text-junglePink">
          <a href="#services">{t(items.servicesKey)}</a>
        </li>
        <li className="hover:text-junglePink">
          <a href="#contact">{t(items.contactKey)}</a>
        </li>
        <li>
          <img
            src={flag}
            alt={i18n.language}
            className="w-4 h-4 sm:w-5 sm:h-5"
            onClick={() => changeLanguage()}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
