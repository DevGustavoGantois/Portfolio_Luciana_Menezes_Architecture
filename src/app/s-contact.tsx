export function HomeContact() {
    return (
        <>
        <section className="max-w-[1440px] mx-auto p-8">
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                <h1 className="text-black font-semibold text-[50px] lg:text-[60px] text-center">{item.title}</h1>
                <p className="text-[#5A5A5A] text-base lg:text-xl text-center">{item.description}</p>
                <button className="text-white text-base lg:text-xl text-center bg-black p-6 w-full lg:max-w-[880px]">
                    <Link href={item.href} target="_blank">
                    {item.btnText}
                    </Link>
                </button>
            </div>
        </section>
        </>
    )
}