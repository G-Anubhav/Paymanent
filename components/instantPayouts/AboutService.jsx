import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Try Instant Payouts"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Payouts that don’t wait
        </h5>
        <h3 className="title">Disburse Funds Instantly to Anyone, Anytime</h3>
        <p>
          Disburse funds instantly to anyone via UPI, IMPS, or NEFT with complete tracking and automation.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Real-time transfers, 24×7 availability</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>API-based bulk disbursement</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Downloadable transaction reports</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
