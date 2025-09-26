import Link from "next/link";
import { heroData } from "./data/v-data";
import Image from "next/image";
import CircularText from "@/components/c-circular-text";

export function HomeHero() {
    const Icon = heroData.icon;

    return (
        <section className="max-w-[1440px] mx-auto p-8 relative">
            <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-between gap-11">
                <article className="flex flex-col justify-center lg:justify-start gap-4 relative">
                    <div className="flex flex-col justify-center items-center lg:items-start">
                        <figure className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-2">
                            <figure className="flex items-center lg:items-start gap-2">
                                {Icon && <Icon className="text-black" size={24} />}
                                <p className="text-black text-base lg:text-xl text-center lg:text-start">
                                    {heroData.hate}
                                </p>
                            </figure>
                            <p className="text-[#B2B2B2] text-base text-center lg:text-start">
                                {heroData.pretitle}
                            </p>
                        </figure>
                        <div className="flex flex-col justify-center items-center lg:items-start gap-4 mt-4">
                            <h1 className="text-black text-[50px] lg:text-[60px] w-full max-w-[398px] font-bold text-center lg:text-start">
                                {heroData.title}
                            </h1>
                            <p className="text-base lg:text-xl text-[#5A5A5A] w-full lg:max-w-[398px] text-center lg:text-start">
                                {heroData.description}
                            </p>
                            <div className="flex justify-center lg:justify-start gap-2">
                                <Link href={heroData.hrefBtnText}>
                                    <button className="bg-black cursor-pointer text-white text-base lg:text-xl transition-all duration-700 hover:-translate-y-2 py-2 px-[28px]">
                                        {heroData.btnText}
                                    </button>
                                </Link>
                                <Link href={heroData.hrefProject}>
                                    <button className="bg-[#FFFFFF] cursor-pointer text-black text-base lg:text-xl transition-all duration-700 hover:-translate-y-2 py-2 px-[28px]">
                                        {heroData.btnProject}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-[162px] flex flex-wrap justify-center lg:justify-start gap-14">
                        {heroData.tools.map((software, idx) => (
                            <Image
                                key={idx}
                                src={software.tool}
                                width={100}
                                height={100}
                                alt={software.tool || "Tool logo"}
                                className="w-[80px] h-auto opacity-50"
                            />
                        ))}
                    </div>
                    <div className="absolute right-32 top-96 -z-10 opacity-80">
                        <Image
                            src={heroData.draw}
                            width={500}
                            height={500}
                            alt="Background decorative drawing"
                        />
                    </div>
                </article>
                <figure className="relative">
                    <Image
                        src={heroData.bgHero}
                        width={900}
                        height={900}
                        alt="Hero illustration"
                        className="w-full h-full"
                    />
                    <div className="mt-8 lg:mt-0 lg:absolute lg:left-0 -bottom-20">
                        <CircularText
                            text="PROJETOS*ARQUITETONICOS*"
                            onHover="speedUp"
                            spinDuration={20}
                            className="custom-class"
                            />
                    </div>
                </figure>
            </div>
        </section>
    );
}
