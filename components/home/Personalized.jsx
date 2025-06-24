import Image from "next/image";
import Link from "next/link";
import personalized from "/public/images/personalized.png";

const Personalized = () => {
  return (
    <section className="personalized">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6 col-xl-5 d-flex align-items-center justify-content-end">
              <div className="img-area">
                <Image src={personalized} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 pt-120 pb-120">
              <div className="section-text">
                <h3 className="title">Need a Custom Payment Solution?</h3>
                <p>
                  Get in touch with us, we’ll help you build the right financial tools for your business, whether you're a startup, SME, or enterprise.
                </p>
              </div>
              <Link href="/contact" className="cmn-btn">
                Get Started with Paymanent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalized;
