import SingleBox from "../common/SingleBox";
import { net_work_data } from "./affiliateData";

const NetWork = () => {
  return (
    <section className="account-feature affiliate">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Feautres</h5>
                <h2 className="title">
                  Smarter, Unified Banking Experience.
                </h2>
                <p>
                  Effortlessly link, manage, and operate across multiple bank accounts—seamlessly and securely.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {net_work_data.map((singleData) => (
              <div key={singleData.id} className="col-md-3"  style={{ marginBottom: "25px" }}>
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

export default NetWork;
