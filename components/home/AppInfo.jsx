import Image from "next/image";
import Link from "next/link";
import app_store from "/public/images/app-store.svg";
import apps from "/public/images/apps.png";
import google_play from "/public/images/google-play.svg";
import check from "/public/images/icon/check.png";
import sheled from "/public/images/icon/sheled.png";

const AppInfo = () => {
  return (
    <section className="features-section app-download">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-6">
              <div className="top-section">
                <span className="head-icon d-flex justify-content-center align-items-center">
                  <Image src={sheled} alt="icon" />
                </span>
                <h5 className="sub-title">Payments at Your Fingertips</h5>
                <h2 className="title">
                  Your financial operations anytime, anywhere
                </h2>
                <p>
                  Manage collections, transfers, and bill payments effortlessly with the Paymanent mobile app on the go!
                </p>
                <ul className="list">
                  <li className="list-item d-flex align-items-center">
                    <span className="check d-flex align-items-center justify-content-center">
                      <Image src={check} alt="icon" />
                    </span>
                    <span>Utility Bill Payments, Instant Fund Transfers, QR Payments</span>
                  </li>
                  <li className="list-item d-flex align-items-center ">
                    <span className="check d-flex align-items-center justify-content-center">
                      <Image src={check} alt="icon" />
                    </span>
                    <span>Credit Card Payments, Order food, and Travel Bookings</span>
                  </li>
                </ul>
              </div>
              <div className="button-group d-flex align-items-center flex-wrap">
                <Link href="/">
                  <Image src={google_play} alt="image" />
                </Link>
                <Link href="/">
                  <Image src={app_store} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="img-area">
                <Image className="max-un" src={apps} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
