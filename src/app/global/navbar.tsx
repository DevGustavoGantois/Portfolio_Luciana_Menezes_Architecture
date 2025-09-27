
import Image from "next/image";
import Link from "next/link";
import { navbarData } from "../data/v-data";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
  return (
    <header className="w-full border-b border-gray-300">
      <nav className="max-w-[1440px] mx-auto p-8 hidden lg:flex">
        {navbarData.map((nav, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full"
          >
            <Link href="/">
              <Image src={nav.logo} width={55} height={80} alt="Logo" />
            </Link>
            <ul className="flex items-center justify-center gap-12">
              {nav.navItems
                .filter((item) => !item.btnText)
                .map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#5A5A5A] transition-all text-xl duration-700 hover:-translate-y-2"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
            </ul>
            <div className="relative">
              {nav.navItems
                .filter((item) => item.btnText)
                .map((item, idx) => (
                  <button
                    key={idx}
                    className="bg-black text-white text-xl px-6 py-2 transition-all cursor-pointer duration-700 hover:scale-[1.05] hover:text-black hover:bg-white hover:shadow-2xl"
                  >
                    <Link href={item.href}>{item.btnText}</Link>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="flex lg:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
}
