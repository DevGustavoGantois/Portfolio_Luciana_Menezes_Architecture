import Image from "next/image";
import { serviceData } from "./data/v-data";

export function HomeServices() {
  return (
    <section
      id="services"
      className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 lg:py-24 relative"
    >
      {serviceData.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center relative">
            <div className="absolute right-0">
                <Image src={item.img} width={400} height={400} alt="" className="opacity-20" />
            </div>
          <h2 data-aos="fade-down" className="text-black text-4xl lg:text-6xl font-bold">
            {item.title}
          </h2>
          <p data-aos="fade-down" data-aos-delay="100" className="text-[#5A5A5A] text-base lg:text-xl mt-4 max-w-3xl">
            {item.description}
          </p>
          <div data-aos="fade-down" data-aos-delay="200" className="mt-12 grid gap-8 lg:grid-cols-3 w-full lg:border-t lg:border-t-gray-200">
            {item.cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-gray-300 px-4 pt-6 lg:px-6 lg:pt-0 mt-3"
              >
                <h3 className="text-black text-2xl lg:text-3xl font-semibold text-start">
                  {card.title}
                </h3>
                <p className="text-[#5A5A5A] text-base lg:text-lg text-start max-w-[323px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
