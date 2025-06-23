import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Enable Micro ATM Services"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Banking beyond branches
        </h5>
        <h3 className="title">Offer Cash Withdrawal Services Anywhere</h3>
        <p>
          Turn your outlet into a mini ATM offering withdrawals, balance checks, and commission-based services.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Supports Aadhaar & card-based withdrawals</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Earn commissions on every transaction</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Easy setup with user-friendly interface</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
