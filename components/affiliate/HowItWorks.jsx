import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import card_with_bg from "/public/images/card-with-bg.png";
import card_with_ecllipse from "/public/images/card-with-eclipse.png";
import how_it_works_ellipse from "/public/images/how-it-works-ellipse.png";
import copy_icon from "/public/images/icon/copy-icon.png";
import how_works_affiliate_1 from "/public/images/icon/how-works-affiliate-1.png";
import how_works_affiliate_2 from "/public/images/icon/how-works-affiliate-2.png";
import how_works_affiliate_3 from "/public/images/icon/how-works-affiliate-3.png";
import share_icon from "/public/images/icon/share-icon.png";

const HowItWorks = () => {
  const [copyValue, setCopyValue] = useState({
    value: "bankio.com/get/yU78has7",
    copied: false,
  });
  return (
    <section className="how-it-works">
      <div className="overlay pt-60 pb-120">
        <div className="container wow fadeInUp">
          {/* <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Refer Bankio credit card and earn $25!
                </h5>
                <h2 className="title">How it Works</h2>
                <p>
                  It&#39;s easier than you think. Follow the following simple
                  easy steps
                </p>
              </div>
            </div>
          </div> */}
          <div className="abs-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="text-area">
                  <div className="img-area">
                    <Image src={how_works_affiliate_2} alt="image" />
                  </div>
                  <h4>Create Account & Complete Instant Digital KYC</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="abs-contant">
                  <Image
                    src={how_it_works_ellipse}
                    className="contant-bg"
                    alt="image"
                  />
                  <div className="contant-area">
                    <h5>Powerful APIs</h5>
                    <p>
                        Integrate banking into your <br /> application with our bundle of <br /> flexible APIs used by thousands <br /> of large businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-contant pt-120 pb-120">
            <div className="row align-items-center">
              <div className="col-md-6 cus-ord">
                <div className="img-area">
                  <Image src={card_with_ecllipse} alt="image" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-area">
                  <div className="img-area">
                    <Image src={how_works_affiliate_1} alt="image" />
                  </div>
                  <h4>
                    Activate Services Tailored to Your Business Needs
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="abs-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="text-area">
                  <div className="img-area">
                    <Image src={how_works_affiliate_3} alt="image" />
                  </div>
                  <h4>
                    Track, Transact & Grow from One Smart Dashboard
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="abs-contant">
                  <Image
                    src={how_it_works_ellipse}
                    className="contant-bg"
                    alt="image"
                  />
                  <div className="contant-area congratulation text-center">
                    <h4>Elastic Platform</h4>
                    <p>Super scalable cloud platform that auto-scales from zero to a million transactions, all in a single day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
