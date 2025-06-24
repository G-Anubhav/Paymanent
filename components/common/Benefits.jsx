import get_loan_data from "../../data/getLoanData";
import SingleBox from "../common/SingleBox";

const Benefits = () => {
  return (
    <section className="account-feature loan-feature">
      <div className="overlay pt-60 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Why Paymanent is a smart payment partner for your business.
                </h5>
                <h2 className="title">Powerful Benefits with Every Transaction</h2>
                <p>
                  From instant settlements to seamless API integrations, Paymanent gives your business the flexibility and control it needs to grow fast, secure, and scalable.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {get_loan_data.map((singleData) => (
              <div key={singleData.id} className="col-lg-4 col-md-6">
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

export default Benefits;
