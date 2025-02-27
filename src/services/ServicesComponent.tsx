import { useTranslation } from "react-i18next";
import { Service } from "../types";

interface PackageProps {
  services: Service[];
  hText: string;
}

const ServicesComponent = ({ services, hText }: PackageProps) => {
  const { t } = useTranslation();

  return (
    <section id="services" className="pb-4 py-16 bg-darkBg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-junglePink mb-12">
          {t(hText)}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {Icon && <Icon className="text-jungleGreen text-3xl" />}
                  <h3 className="text-lg font-bold text-jungleGreen">
                    {t(service.titleKey)}
                  </h3>
                </div>

                <p className="text-md text-gray-300">{t(service.contentKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
