import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeFAQ } from "./s-faq";
import { HomeServices } from "./s-services";

export default function Page() {
  return (
    <>
    <HomeAbout />
    <HomeServices />
    <HomeFAQ />
    <HomeContact />
    </>
  );
}
