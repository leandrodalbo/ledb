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
      className="bg-darkBg text-lightText min-h-screen pt-24 text-center py-12 "
    >
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-jungleGreen">
          {t(assets.h1HeaderKey)}
          <span className="inline-block animate-waving-hand ml-2">👋</span>
        </h1>
        <p className="text-lg text-junglePink mt-4">{t(assets.ptextKey)}</p>
      </header>

      <p
        data-testid="large-text"
        className="text-lg text-gray-300 mx-auto text-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 max-w-3xl leading-relaxed"
      >
        {t(assets.beforeName)}
        <span data-testid="name" className="font-semibold text-jungleGreen">
          {assets.name}
        </span>
        {t(assets.ptextKey2)}
      </p>
    </section>
  );
};

export default Home;
