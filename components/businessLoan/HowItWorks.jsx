import Image from "next/image";
import Link from "next/link";
import how_works_business from "/public/images/how-works-business.png";
import how_works_1 from "/public/images/icon/how-works-1.png";
import how_works_11 from "/public/images/icon/how-works-11.png";
import how_works_2 from "/public/images/icon/how-works-2.png";
import how_works_22 from "/public/images/icon/how-works-22.png";
import how_works_3 from "/public/images/icon/how-works-3.png";
import how_works_33 from "/public/images/icon/how-works-33.png";
import how_works_4 from "/public/images/icon/how-works-4.png";
import how_works_44 from "/public/images/icon/how-works-44.png";

const HowItWorks = () => {
  return (
    <section className="financial-planning how-works-business">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 wow fadeInUp">
              <div className="section-header">
                <h5 className="sub-title">A Better Way to Go Live with Paymanent</h5>
                <h2 className="title">How it works</h2>
                <p>
                  It&#39;s fast, secure, and fully digital. Here’s how businesses onboard with us in just a few simple steps:
                </p>
              </div>
              <div className="mb-60">
                <div className="row cus-mar">
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_1}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_11} alt="icon" className="alt" />
                      </div>
                      <h5>1. Submit Business Details</h5>
                      <p>
                        Tell us about your company, just basic information like business name, type, and PAN/GST.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_2}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_22} alt="icon" className="alt" />
                      </div>
                      <h5>2. Verify & KYC</h5>
                      <p>
                        We instantly verify your documents with our real-time API checks (PAN, Aadhaar, GST, etc.).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_3}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_33} alt="icon" className="alt" />
                      </div>
                      <h5>3. Activate APIs or Dashboard</h5>
                      <p>
                        Based on your business needs, get access to our API keys or business dashboard right away.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_4}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_44} alt="icon" className="alt" />
                      </div>
                      <h5>4. Start Transacting</h5>
                      <p>
                        Collect payments, make payouts, access reports, and scale securely—everything from one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-area">
                <Link href="/#business-loan-form" className="cmn-btn">
                  Paymanent Now
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="right-box">
                <Image src={how_works_business} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
