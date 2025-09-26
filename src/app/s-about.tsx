import Link from "next/link";
import { aboutData } from "./data/v-data";
import { ArrowRight } from "lucide-react";

export function HomeAbout() {
    return (
        <section id="about" className="w-full border-t border-b border-gray-300 mt-10 lg:mt-[180px] p-8">
        <div className="max-w-[1440px] mx-auto p-8">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:justify-between gap-4">
                <h1 className="text-black text-[50px] font-semibold lg:text-[60px]">{aboutData.title}</h1>
                <article className="flex flex-col justify-start gap-4">
                    <p className="text-start text-[#5A5A5A] w-full lg:max-w-[509px] text-base lg:text-xl">{aboutData.description}</p>
                <button className="underline w-full transition-all duration-1000 hover:translate-x-4">
                    <Link className="flex items-center gap-2 text-black" href="#services" target="_blank">
                        {aboutData.btnText}
                        <ArrowRight className="text-black -rotate-12" size={16} />
                    </Link>
                </button>
                </article>
            </div>
        </div>
        </section>
    )
}