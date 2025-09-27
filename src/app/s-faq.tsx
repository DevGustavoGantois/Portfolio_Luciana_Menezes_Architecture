import { faqData } from "./data/v-data";

export function HomeFAQ() {
    return (
        <section className="mt-10 lg:mt-[100px]" id="faq">
            <div className="bg-black w-full h-full py-24 px-4">
                {faqData.map((item, index) => (
                    <div
                        className="flex flex-col justify-center items-center w-full"
                        key={index}
                    >
                        <div className="flex cursor-pointer w-full max-w-[1440px] mx-auto flex-col justify-center items-center gap-2">
                            <h1 data-aos="flip-up" className="text-white text-[50px] lg:text-[60px] font-semibold text-center">
                                {item.title}
                            </h1>
                            <p data-aos="flip-up" data-aos-delay="100" className="text-center text-white/70">{item.description}</p>

                            <div className="mt-5 lg:mt-11 w-full lg:max-w-8xl flex flex-col gap-4">
                                {item.faqQuestions.map((info, idx) => (
                                    <details
                                        key={idx}
                                        className="border-b border-white/30 p-4 group"
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer transition-all duration-700 hover:translate-x-6">
                                            <div className="flex justify-center items-center gap-3">
                                                <h3 className="text-white text-2xl lg:text-[32px] font-bold">
                                                    {info.number}
                                                </h3>
                                                <p className="text-white text-xl lg:text-2xl">
                                                    {info.question}
                                                </p>
                                            </div>
                                            <info.icon
                                                className="text-white transition-transform -rotate-45 duration-500 group-open:rotate-45"
                                                size={24}
                                            />
                                        </summary>
                                        <p className="text-white/80 text-base lg:text-xl mt-3">
                                            {info.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
