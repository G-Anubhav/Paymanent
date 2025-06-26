import BusinessSolutionsCard from "../cards/BusinessSolutionsCard";
import { business_solutions_data } from "./homeData";

const BusinessSolutions = () => {
  return (
    <section className="solutions-business" id="services">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Effortless Digital Banking at Your Fingertips
                </h5>
                <h2 className="title">Solutions for Every Business Need.</h2>
                <p>
                  Discover a robust suite of Simplify payments, collections, and compliance with our secure and scalable banking infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {business_solutions_data.map((singleBusiness) => (
              <div key={singleBusiness.id} className="col-lg-4 col-md-6">
                <BusinessSolutionsCard singleBusiness={singleBusiness} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
