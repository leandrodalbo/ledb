import { HomeAssets } from "../types";
import HomeItem from "./item/HomeItem";
import { useTranslation } from 'react-i18next';


interface HomeProps {
  assets: HomeAssets
}


const Home = ({ assets }: HomeProps) => {
  const { t } = useTranslation();
  return (
    <section id="home" className="bg-darkBg text-lightText min-h-screen pt-24 text-center py-12 ">

      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-jungleGreen">{t(assets.h1HeaderKey)}</h1>
        <p className="text-lg text-junglePink mt-4">{t(assets.ptextKey)}</p>
      </header >
      <article data-testid="cards" className="flex justify-center items-center flex-wrap gap-8 py-12">
        {assets.cardItems.map((item) => (
          <HomeItem key={item.id} icon={item.icon} text={t(item.textKey)} title={t(item.titleKey)} />
        ))}
      </article>
    </section >
  );
};

export default Home;
