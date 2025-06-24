import Image from "next/image";
import Link from "next/link";
import groupPhoto from "/public/images/team-photo.png"; // Replace with your actual image

import { FaCheckCircle } from "react-icons/fa";

const Company = () => {
    return (
        <section className="company-section">
            <div className="container">
                <div className="company-header d-flex justify-content-between align-items-start flex-wrap mb-4">
                    <div className="company-text">
                        <p className="company-subtitle">OUR COMPANY</p>
                        <h2 className="company-title">Built for businesses of all sizes.</h2>
                        <p className="company-subtext">
                            India’s largest Neo Banking platform delivering full stack banking services to individuals and businesses of all sizes.
                        </p>
                    </div>
                    <Link href="/#business-loan-form" className="cmn-btn">
                        Contact Us
                    </Link>
                </div>
                <div className="company-image mb-4">
                    <Image src={groupPhoto} alt="Paymanent Team" className="img-fluid" />
                </div>
                <div className="company-description">
                    <p>
                        At Paymanent, we are architects of seamless financial experiences. Empowering millions of users,
                        we’re on a mission to help businesses of all sizes and types simplify their financial journey
                        with our tech-led business banking solutions. Committed to innovation and user-centricity,
                        we redefine the way you engage with finances.
                    </p>
                </div>

                <div className="company-certifications d-flex flex-wrap gap-4 mt-4">
                    <div className="cert-item">
                        <FaCheckCircle className="icon" />
                        <span>ISO 27001 Certified</span>
                    </div>
                    <div className="cert-item">
                        <FaCheckCircle className="icon" />
                        <span>256–bit SSL Secured Data Transmission</span>
                    </div>
                    <div className="cert-item">
                        <FaCheckCircle className="icon" />
                        <span>2FA Secured Transactions</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
