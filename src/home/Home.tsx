import { HomeAssets } from "../types";
import { useTranslation } from "react-i18next";

interface HomeProps {
  assets: HomeAssets;
}

const Home = ({ assets }: HomeProps) => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="bg-darkBg text-lightText  text-center min-h-screen pt-24 py-12 mt-12"
    >
      <header className="text-center mt-12">
        <h1 className="text-4xl font-bold text-jungleGreen">
          {t(assets.h1HeaderKey)}
          <span className="inline-block animate-waving-hand ml-2">👋</span>
        </h1>
        <p className="text-md text-junglePink mt-2 ">{t(assets.ptextKey)}</p>
      </header>

      <p
        data-testid="large-text"
        className="text-lg text-gray-300 mx-auto text-center mt-12 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 max-w-3xl leading-relaxed"
      >
        {t(assets.beforeName)}
        <span data-testid="name" className="font-semibold text-jungleGreen">
          {assets.myName}
        </span>
        {t(assets.ptextKey2)}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2">
        <a
          href="https://xpdriven.blog"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-jungleGreen text-white font-medium py-2 px-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 shadow-md"
        >
          {t("xpdriven.blog")}
        </a>
        <a
          href="#contact"
          className="bg-junglePink text-white font-medium py-2 px-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 shadow-md"
        >
          {t(assets.btnContact)}
        </a>
      </div>
    </section>
  );
};

export default Home;
