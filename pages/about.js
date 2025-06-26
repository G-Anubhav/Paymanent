import Banner from "../components/about/Banner";
import Career from "../components/about/Career";
import CoreValues from "../components/about/CoreValues";
import GlobalBanking from "../components/about/GlobalBanking";
import Partners from "../components/home/Partners";
import Company from "../components/about/Company";
import Feature from "../components/remittance/Feature";
import HowItWorks from "../components/businessLoan/HowItWorks";
import Hero from "../components/about/Hero";
import OurJourney from "../components/about/OurJourney";
import GetInTouch from "../components/contact/GetInTouch";
import Team from "../components/team/Team";

export default function About() {
  return (
    <>
      <Banner />
      <Hero />
      {/* <Partners /> */}
      <CoreValues />
      {/* <Company /> */}
      <GlobalBanking />
      <Feature />
      <HowItWorks />
      {/* <OurJourney /> */}
      {/* <Team /> */}
      {/* <Career /> */}
      <GetInTouch />
    </>
  );
}
