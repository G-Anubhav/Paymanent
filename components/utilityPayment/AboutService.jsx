import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Explore Utility Payment Solutions"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Hassle-free bill management
        </h5>
        <h3 className="title">Pay All Your Business Bills in One Place</h3>
        <p>
          Pay all your business bills from one dashboard with bulk payments, reminders, and GST-ready invoices.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>One-click payments for multiple services</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Bulk uploads & GST-compliant invoices</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Auto reminders for due dates</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
