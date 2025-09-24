import { serviceData } from "./data/v-data";

export function HomeServices() {
    return (
        <>
        <section className="max-w-[1440px] mx-auto p-8 mt-10 lg:mt-[100px]" id="services">
            {serviceData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <h1 className="text-black text-[50px] lg:text-[60px] text-center">{item.title}</h1>
                            <p className="text-[#5A5A5A] text-base lg:text-xl text-center w-full lg:max-w-[951px]">{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </section>
        </>
    )
}