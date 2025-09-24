import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="w-full">
        <nav className="max-w-[1440px] mx-auto p-8">
            <div className="flex items-center justify-between">
                <Link href="/">
                <Image src={item.logo} width={200} height={200} alt="" />
                </Link>
                <ul className="flex items-center justify-center gap-12">
                    <li className="text-[#5A5A5A] transition-all duration-700 hover:translate-y-2">
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </li>
                </ul>
            <div className="w-full">
                <button className="bg-black rounded-xs text-white text-xl text-center">
                    <Link href={item.href} target="_blank">
                        {item.btnText}
                    </Link>
                </button>
            </div>
            </div>
        </nav>
        </header>
    )
}