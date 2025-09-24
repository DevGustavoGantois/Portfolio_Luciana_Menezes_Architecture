import Link from "next/link";
import { aboutData } from "./data/v-data";
import { ArrowArcRight } from "phosphor-react";

export function HomeAbout() {
    return (
        <>
        <section className="max-w-[1440px] mx-auto p-8 mt-10 lg:mt-[100px]">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:justify-between gap-4">
                <h1 className="text-black text-[50px] font-semibold lg:text-[60px]">{aboutData.title}</h1>
                <p className="text-start text-[#5A5A5A] max-w-[509px] text-base lg:text-xl">{aboutData.description}</p>
                <button>
                    <Link className="flex items-center gap-1" href="#services" target="_blank">
                        {aboutData.btnText}
                        <ArrowArcRight className="text-black rotate-12" size={24} />
                    </Link>
                </button>
            </div>
        </section>
        </>
    )
}