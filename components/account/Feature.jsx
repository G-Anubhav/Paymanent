import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import more_feature from "/public/images/more-feature.png";

// Import css files
import "slick-carousel/slick/slick.css";

const Next = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-prev pull-left"
      onClick={onClick}
    >
      <i>
        <BsChevronLeft />
      </i>
    </button>
  );
};

const Prev = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-next pull-right"
      onClick={onClick}
    >
      <i>
        <BsChevronRight />
      </i>
    </button>
  );
};

const Feature = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: true,
    dotsClass: "section-dots",
    customPaging: function () {
      return (
        <button type="button" className="dot">
          <span className="string"></span>
        </button>
      );
    },
  };

  return (
    <section className="more-feature">
      <div className="overlay pt-60 pb-60">
        <div className="container wow fadeInUp">
          <div className="row">
            <Slider {...settings} className="feature-carousel">
              {[...Array(1)].map((_, i) => (
                <div key={i} className="single-item">
                  <div className="single">
                    <div className="text-start">
                      <h5 className="sub-title">
                        Effortless Digital Payments, Backed by Bank-Grade Security
                      </h5>
                      <h2 className="title">
                        Your trust is our foundation. Your data, our responsibility.
                      </h2>
                      <p>
                        We&#39;ve built Paymanent on security-first principles so every transaction, every API call, and every financial interaction is protected with military-grade encryption, multi-layer authentication, and real-time threat monitoring.
                      </p>
                    </div>
                    <div className="img-center">
                      <Image src={more_feature} alt="image" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
