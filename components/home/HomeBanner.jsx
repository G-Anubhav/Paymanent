import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="banner-section">
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <div className="top-area section-text justify-content-center">
                    <h4 className="sub-title">Simple. Transparent. Secure</h4>
                    <h2 className="title">Smart Banking Solutions for Modern Businesses</h2>
                    <p className="xlr">
                      Streamline your business finances with fast, secure, and scalable digital banking solutions.
                    </p>
                  </div>
                  <div className="bottom-area">
                    <Link href="/register" className="cmn-btn">
                      Open Account
                    </Link>
                    <Link href="/contact" className="cmn-btn second">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners slider here */}
      
    </section>
  );
};

export default HomeBanner;
