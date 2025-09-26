import Link from "next/link";
import { contactData } from "./data/v-data";

export function HomeContact() {
    return (
        <>
        <section id="contact" className="max-w-[1440px] mx-auto p-8 mt-10 lg:mt-[100px]">
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                <h1 data-aos="zoom-in" className="text-black font-semibold text-[50px] lg:text-[60px] text-center">{contactData.title}</h1>
                <p data-aos="zoom-in" data-aos-delay="100" className="text-[#5A5A5A] text-base lg:text-xl text-center">{contactData.description}</p>
                <figure className="w-full relative flex items-center justify-center">
                    <button className="text-white text-base lg:text-xl text-center bg-black px-6 py-4 w-full lg:max-w-[880px] cursor-pointer transition-all duration-700 hover:scale-[1.05] rounded-xs hover:shadow-2xl hover:bg-white hover:text-black">
                    <Link href={contactData.href} target="_blank">
                    {contactData.btnText}
                    </Link>
                </button>
                </figure>
            </div>
        </section>
        </>
    )
}