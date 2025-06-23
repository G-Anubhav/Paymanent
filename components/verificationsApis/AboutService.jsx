import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Integrate Verifications Now"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Trust, verified
        </h5>
        <h3 className="title">Instant Verifications with Powerful APIs</h3>
        <p>
          Verify PAN, Aadhaar, GST, bank accounts, and more instantly with secure, ready-to-use APIs.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>PAN, Aadhaar, GSTIN & Bank Account checks</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Fast & secure with enterprise-grade APIs</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Easy integration into your platform</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
