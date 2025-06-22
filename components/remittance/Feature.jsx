import SingleBox from "../common/SingleBox";
import { feature_data } from "./remittanceData";

const Feature = () => {
  return (
    <section className="account-feature remittance about-features">
      <div className="overlay pt-60 pb-60">
        <div className="container wow fadeInUp">
          <div className="row align-items-center mb-60 section-heading">
            <div className="col-lg-6">
              <p className="subtitle">WHAT WE’RE OFFERING</p>
              <h2 className="title">Singular Platform, Diverse Solutions.</h2>
            </div>
            <div className="col-lg-6">
              <p className="description">
                Payment redefines financial interactions through a unified platform offering a spectrum of services.
                With a commitment to innovation, security, and user-centricity, we seamlessly integrate banking,
                payments, travel, and logistics.
              </p>
            </div>
          </div>
          <div className="row cus-mar">
            {feature_data.map((singleData) => (
              <div key={singleData.id} className="col-lg-3 col-md-6">
                <SingleBox
                  icon={singleData.icon}
                  title={singleData.title}
                  desc={singleData.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
