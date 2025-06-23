import AboutService from "../components/verificationsApis/AboutService";
import ApplyForLoan from "../components/businessLoan/ApplyForLoan";
import Banner from "../components/verificationsApis/Banner";
import Counter from "../components/businessLoan/Counter";
import ServiceIntro from "../components/common/ServiceIntro";
import HowItWorks from "../components/businessLoan/HowItWorks";
import GetInTouch from "../components/contact/GetInTouch";
import CreditHistory from "../components/personalLoan/CreditHistory";
import Features from "../components/verificationsApis/NetWork";
import Testimonials from "../components/home/Testimonials";
import LatestArticles from "../components/home/LatestArticles";
import Loan from "../components/businessLoan/Loan";
import SecurityArea from "../components/businessLoan/SecurityArea";
import Faq from "../components/faq/Faq";
import serviceIntroData from "../data/serviceIntroData";

const data = serviceIntroData.verificationApis;

export default function ConnectedBanking() {
  return (
    <>
      <Banner />
      <AboutService />
      <ServiceIntro {...data} />
      <Features />
      <CreditHistory />
      <HowItWorks />
      <Counter />
      <Testimonials />
      <LatestArticles />
      <Faq />
      <GetInTouch />
    </>
  );
}
