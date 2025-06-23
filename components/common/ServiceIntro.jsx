import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const ServiceIntro = ({ image, subtitle, title, description, bullets }) => {
  return (
    <section className="service-intro">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-6">
            <div className="intro-image">
              <Image src={image} alt={title} className="img-fluid rounded" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6">
            <div className="intro-content">
              <p className="subtitle">{subtitle}</p>
              <h2 className="title">{title}</h2>
              <p className="description">{description}</p>

              <ul className="bullet-list">
                {bullets.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
