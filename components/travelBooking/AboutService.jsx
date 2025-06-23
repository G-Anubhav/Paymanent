import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutService = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Book Travel with Paymanent"
      link="/contact"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Smarter business travel
        </h5>
        <h3 className="title">Book Flights & Bus Tickets Instantly</h3>
        <p>
          Book bus and flight tickets in real time and earn commissions—perfect for agents and businesses.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Real-time ticket availability & confirmation</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Commission on every booking</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Simple UI with API integration</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutService;
