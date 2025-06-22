import AboutBusiness from "../components/businessLoan/AboutBusiness";
import ApplyForLoan from "../components/businessLoan/ApplyForLoan";
import Banner from "../components/travelBooking/Banner";
import Counter from "../components/businessLoan/Counter";
import HowItWorks from "../components/businessLoan/HowItWorks";
import GetInTouch from "../components/contact/GetInTouch";
import CreditHistory from "../components/personalLoan/CreditHistory";
import NetWork from "../components/connectedBanking/NetWork";
import Testimonials from "../components/home/Testimonials";
import LatestArticles from "../components/home/LatestArticles";
import Loan from "../components/businessLoan/Loan";
import SecurityArea from "../components/businessLoan/SecurityArea";
import Faq from "../components/faq/Faq";

export default function UpiCollection() {
  return (
    <>
      <Banner />
      <AboutBusiness />
      <NetWork />
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
