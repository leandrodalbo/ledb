import { Package } from "../types";
import PackageCard from "./packageCard/PackageCard"

interface PackageProps {
    packages: Package[]
    hText: string
}

const PackageComponent = ({ packages, hText }: PackageProps) => {
    return (
        <section id="packages" className="bg-darkBg text-lightText min-h-screen pt-24 text-center py-12 ">
            <header className="text-center py-12">
                <h1 className="text-4xl font-bold text-jungleGreen">{hText}</h1>

            </header >

            <article data-testid="packages" className="flex justify-center items-center flex-wrap gap-8 py-12">
                {packages.map((it: Package) => <PackageCard
                    key={it.id}
                    title={it.title}
                    content={it.content}
                    icon={it.icon}
                    bgColor={it.bgColor}
                    textColor={it.textColor}
                />)}
            </article>


        </section>);
};

export default PackageComponent;
