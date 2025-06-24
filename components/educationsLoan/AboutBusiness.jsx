import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_educations_loan_Illus from "/public/images/about-educations-loan-Illus.png";
import feature_item_2 from "/public/images/feature-item-2.png";
import check from "/public/images/icon/check.png";

const AboutBusiness = () => {
  return (
    <AboutLoan
      btnText="Apply for a Educations loan"
      link="/#educations-loan-form"
      img={feature_item_2}
    >
      <div className="section-text">
        <h5 className="sub-title">Seamless Payments, Built for Businesses</h5>
        <h2 className="title">Your All-in-One Platform for Digital Finance</h2>
        <p>
          Paymanent streamlines your business payments, collections, and compliance through one secure, scalable platform.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Open a business account 100% online</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Enable instant payouts via UPI, IMPS, and more</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>No hidden fees or setup costs</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutBusiness;
