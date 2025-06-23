import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Launch Aadhaar Banking Services"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Empower through inclusion
        </h5>
        <h3 className="title">Deliver Banking Services with Aadhaar Authentication</h3>
        <p>
          Offer AEPS services like withdrawals and balance checks using Aadhaar and biometric verification.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Seamless AEPS integration</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Biometric authentication support</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Works with Micro ATM setup</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
