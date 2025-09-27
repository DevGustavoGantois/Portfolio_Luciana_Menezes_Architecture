
"use client";
import { HomeCarouselFunctions } from "./c-carousel";
import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-hero";
import { HomeServices } from "./s-services";
import { useEffect } from "react";
//library
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {

  useEffect(() => {
    AOS.init({
    duration: 900,
    once: false,
  })
  }, [])

  return (
    <>
    <div className="hidden md:flex">
      
    </div>
    <HomeHero />
    <HomeCarouselFunctions />
    <HomeAbout />
    <HomeServices />
    <HomeFAQ />
    <HomeContact />
    </>
  );
}
