import { HomeAssets } from "../types";
import HomeItem from "./item/HomeItem";

interface HomeProps {
  assets: HomeAssets
}


const Home = ({ assets }: HomeProps) => {
  return (
    <section id="home" className="bg-darkBg text-lightText min-h-screen pt-24 text-center py-12 ">

      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-jungleGreen">{assets.h1Header}</h1>
        <p className="text-lg text-junglePink mt-4">{assets.ptext}</p>
      </header >
      <article data-testid="cards" className="flex justify-center items-center flex-wrap gap-8 py-12">
        {assets.cardItems.map((item) => (
          <HomeItem key={item.title} icon={item.icon} text={item.text} title={item.title} />
        ))}
      </article>
    </section >
  );
};

export default Home;
