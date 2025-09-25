import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-hero";
import { HomeServices } from "./s-services";

export default function Page() {
  return (
    <>
    <HomeHero />
    <HomeAbout />
    <HomeServices />
    <HomeFAQ />
    <HomeContact />
    </>
  );
}
