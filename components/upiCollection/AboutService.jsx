import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Start UPI Collection"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Real-time payments, real simple
        </h5>
        <h3 className="title">Collect Payments Instantly with UPI</h3>
        <p>
          Collect payments instantly using UPI links or QR codes with real-time tracking and seamless integration.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Instant payment receipts</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Branded UPI handles and QR codes</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Easy integration via UPI APIs</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
