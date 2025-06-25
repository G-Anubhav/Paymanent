import Link from "next/link";
import planning_data from "../../data/planningData";
import PlaningCard from "../cards/PlaningCard";

const Planning = () => {
  return (
    <section className="financial-planning">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-5">
              <div className="section-text">
                <h5 className="sub-title">Your Paymanets Planner</h5>
                <h2 className="title">
                    Smart Financial Infrastructure for Smarter Businesses
                </h2>
                <p>
                  Effortless banking and payment tools tailored for today&#39;s digital-first businesses. Whether you&#39;re a startup or an enterprise, we help streamline operations, reduce costs, and boost efficiency through our unified platform.
                </p>
              </div>
              <Link href="/register" className="cmn-btn">
                Paymanent Today
              </Link>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row cus-mar">
                {planning_data.map((singlePlanning) => (
                  <div key={singlePlanning.id} className="col-md-6 col-sm-6">
                    <PlaningCard singlePlanning={singlePlanning} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planning;
