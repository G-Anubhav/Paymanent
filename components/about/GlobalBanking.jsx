import Image from "next/image";
import maps_dot from "/public/images/icon/maps-dot.png";
import world_map from "/public/images/world-map.png";

const GlobalBanking = () => {
  return (
    <section className="map-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="section-header text-center">
                <h5 className="sub-title">We are a leading digital payments and fintech platform.</h5>
                <h2 className="title">
                  Our values drive innovation, trust, and financial inclusion.
                </h2>
                <p>
                  t Paymanent, our values guide how we build products, grow our team, and serve businesses of all sizes—ensuring secure, scalable, and accessible financial solutions for all.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="map-area">
              <Image src={world_map} alt="image" />
              {/* <div className="element pos-1">
                <div className="details">
                  <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                </div>
                <div className="dot-area">
                  <Image src={maps_dot} alt="image" />
                </div>
              </div> */}
              <div className="element pos-2">
                <div className="details">
                  <p>SCO-88, Sec-12A Gurugram, Haryana 122001</p>
                </div>
                <div className="dot-area">
                  <Image src={maps_dot} alt="image" />
                </div>
              </div>
              {/* <div className="element pos-3">
                <div className="details">
                  <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                </div>
                <div className="dot-area">
                  <Image src={maps_dot} alt="image" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBanking;
