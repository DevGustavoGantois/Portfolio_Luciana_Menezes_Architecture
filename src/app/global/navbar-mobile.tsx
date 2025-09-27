"use client";

import { useState } from "react";
import { navbarData } from "../data/v-data";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NavbarMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200 w-full relative">
      <div>
        <Image src={navbarData[0].logo} width={50} height={50} alt="Logo" />
      </div>
      <button onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <X className="text-black" size={24} /> : <Menu className="text-black" size={24} />}
      </button>
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpenMenu(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg flex flex-col justify-center items-center p-8 gap-6 z-50"
            >
              {navbarData[0].navItems.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-center gap-4 w-full items-center">
                  <Link
                    href={item.href}
                    className="text-gray-700 text-lg"
                    onClick={() => setOpenMenu(false)}
                  >
                    {item.name}
                  </Link>
                  {item.btnText && (
                    <Link
                      href={item.href}
                      className="text-white bg-black px-6 py-2 w-full text-center rounded-md"
                      onClick={() => setOpenMenu(false)}
                    >
                      {item.btnText}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
