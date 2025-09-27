
"use client";
import { HomeCarouselFunctions } from "./c-carousel";
import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-hero";
import { HomeServices } from "./s-services";
import { useEffect, useState } from "react";
//library
import AOS from "aos";
import "aos/dist/aos.css";
import { CustomCursor } from "@/components/c-custom-cursor";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { HomeProjects } from "./s-projects";

export default function Page() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    AOS.init({
    duration: 900,
    once: false,
  })
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);

  }, [])

  return (
    <>
    <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4F1EC]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center gap-4"
            >
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={300}
                height={300}
                className="animate-pulse"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    {!isLoading && (
      <>
      <div className="hidden md:flex">
      <CustomCursor />
      </div>
      <HomeHero />
      <HomeCarouselFunctions />
      <HomeAbout />
      <HomeProjects />
      <HomeServices />
      <HomeFAQ />
      <HomeContact />
      </>
    )}
    </>
  );
}
