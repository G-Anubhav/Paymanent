import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Get Started with Connected Banking"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Integrated banking made easy
        </h5>
        <h3 className="title">Manage Multiple Bank Accounts From a Single Dashboard</h3>
        <p>
          Link all your bank accounts in one place and manage your finances with real-time insights and automation.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Instantly link accounts across major Indian banks</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Auto-reconciliation with smart insights</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Role-based access and real-time alerts</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
