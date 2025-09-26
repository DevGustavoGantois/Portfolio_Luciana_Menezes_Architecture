
import { HomeCarouselFunctions } from "./c-carousel";
import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-hero";
import { HomeServices } from "./s-services";

export default function Page() {
  return (
    <>
    <HomeHero />
    <HomeCarouselFunctions />
    <HomeAbout />
    <HomeServices />
    <HomeFAQ />
    <HomeContact />
    </>
  );
}
