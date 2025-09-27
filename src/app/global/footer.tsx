import Image from "next/image"; 
import { footerData } from "../data/v-data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 lg:mt-[100px]">
            <div className="items-center justify-center mb-6 hidden lg:flex">
                <Image className="opacity-70" src="/LucianaMenezes.png" width={1440} height={1440} alt="Luciana Menezes letters" priority />
            </div>
            <div className="flex lg:hidden items-center justify-center w-full">
                <h1 className="text-center text-[#E0D7C6] text-7xl font-bold mb-4">Luciana Menezes</h1>
            </div>
            <div className="relative bg-black w-full">
            {footerData.map((item, index) => (
            <div
            key={index}
            className="relative flex flex-col items-center gap-10"
            >
            <div className="w-full h-full">
                <Image
                src={item.imgBg}
                width={1400}
                height={1400}
                alt="background"
                className="w-full h-full opacity-40"
                />
            </div>
            <Image
                src={item.logo}
                width={80}
                height={80}
                alt="logo white"
                className="relative"
            />
            <p className="relative text-white text-center text-base lg:text-xl max-w-6xl leading-relaxed">
                {item.description}
            </p>
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-6xl">
                <ul className="flex flex-col lg:flex-row gap-6 text-center lg:text-left">
                {item.navLinks.map((navigation, idx) => (
                    <li key={idx}>
                    <Link
                        href={navigation.href}
                        className="text-white text-sm lg:text-base hover:text-gray-300 transition-colors tracking-wide uppercase"
                    >
                        {navigation.name}
                    </Link>
                    </li>
                ))}
                </ul>
                <div className="flex items-center gap-6">
                {item.socialLinks.map((social, idx) => (
                    <Link
                    key={idx}
                    href={social.href}
                    className="text-white hover:text-gray-300 transition-transform duration-300 hover:-translate-y-1"
                    >
                    <social.icon size={22} />
                    </Link>
                ))}
                </div>
            </div>
            <div className="w-full border-t border-white/20"></div>
            <Link href="https://www.instagram.com/devgustavogantois_/" target="_blank" className="relative text-white/70 transition-all duration-700 hover:text-white text-base lg:text-xl tracking-wide text-center max-w-6xl mb-8">
                {item.copyright}
            </Link>
            </div>
        ))}
        </div>
    </footer>
  );
}
