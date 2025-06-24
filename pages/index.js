import CallToAction from "../components/callToAction/CallToAction";
import Planning from "../components/common/Planning";
import Faq from "../components/faq/Faq";
import AboutBusiness from "../components/educationsLoan/AboutBusiness";
import Partners from "../components/home/Partners";
import AppInfo from "../components/home/AppInfo";
import BankioCard from "../components/home/BankioCard";
import BusinessSolutions from "../components/home/BusinessSolutions";
import Benefits from "../components/common/Benefits";
import Numbers from "../components/businessLoan/Counter";
import Counter from "../components/educationsLoan/Counter";
import GetInTouch from "../components/contact/GetInTouch";
import HowItWorks from "../components/affiliate/HowItWorks";
import FeatureBanners from "../components/account/Feature";
import Features from "../components/home/Features";
import NetWork from "../components/affiliate/NetWork";
import HomeBanner from "../components/home/HomeBanner";
import LatestArticles from "../components/home/LatestArticles";
import Personalized from "../components/home/Personalized";
import Testimonials from "../components/home/Testimonials";
import TabSection from "../components/home/TabSection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Partners />
      <AboutBusiness />
      {/* <Features /> */}
      <Numbers />
      <BusinessSolutions />
      <Benefits />
      <FeatureBanners />
      <TabSection />
      <Counter />
      <NetWork />
      <HowItWorks />
      <AppInfo />
      <BankioCard />
      {/* <CallToAction /> */}
      <Planning />
      <Personalized />
      <Testimonials />
      <LatestArticles />
      <Faq />
      <GetInTouch />
    </>
  );
}
