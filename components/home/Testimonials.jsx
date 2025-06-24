import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import quote from "/public/images/icon/quote.png";
import testomonial from "/public/images/testomonial.png";

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

const Testimonials = () => {
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
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <div className="overlay pt-60 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Testimonials</h5>
                <h2 className="title">
                  Don&#39;t take our word for it, take theirs
                </h2>
                <p>
                  Discover how businesses are streamlining payments and scaling faster with Paymanent. Real Stories, Real Results.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Slider {...settings} className="testimonials-carousel">
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} className="quote-img" alt="quote" />
                      <h5>Paymanent has made running my business so much easier</h5>
                      <p className="xxlr">
                        “As a small business owner, managing payments used to be a headache. Since switching to Paymanent, I can handle everything from one dashboard—payouts, collections, even bill payments. It's fast, reliable, and the support team actually listens.”
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">Aarushi Sinha</h5>
                      <span className="country">Merchant</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} alt="quote" />
                      <h5>Paymanent transformed the way we manage money</h5>
                      <p className="xxlr">
                        “It&#39;s been over 2 years with Paymanent, and as a small business, it’s a relief to have fast, secure services with zero hidden fees. Their instant support made all the difference when we needed it most.”
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">Manoj Chauhan</h5>
                      <span className="country">Enterprise Client</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} alt="quote" />
                      <h5>With Paymanent, my shop became a digital service center</h5>
                      <p className="xxlr">
                        “I use Paymanent for AEPS, bill payments, and money transfers right from my shop. Customers trust it, and I earn extra income daily. It&#39;s simple to use, even without much technical knowledge.”
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">Anita Reddy</h5>
                      <span className="country">Rural Retailer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} alt="quote" />
                      <h5>The APIs are clean, fast, and well-documented</h5>
                      <p className="xxlr">
                        “We integrated Paymanent’s verification and payout APIs in under a day. For a growing fintech startup like ours, having reliable infrastructure and responsive support makes a huge difference. It just works.”
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">Tanvi Verma</h5>
                      <span className="country"> Startup Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
