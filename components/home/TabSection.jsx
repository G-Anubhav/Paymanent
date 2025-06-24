import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        label: "AePs",
        image: "/images/aeps.png",
        title: "Aadhaar Enabled Payment System",
        description: "Empowering Access. Simplifying Transactions.Paymanent’s AEPS solution delivers secure, Aadhaar-authenticated banking services—enabling seamless cash withdrawals, balance inquiries, and fund transfers without a debit card. Designed for reliability and reach, our platform redefines financial access with frictionless, real-time service tailored to evolving user needs.",
    },
    {
        label: "Utility Payment",
        image: "/images/utility.png",
        title: "Smart Bill Payment Gateway",
        description: "Simplified Billing. Unified Platform.  Paymanent’s BBPS service offers a secure, integrated solution for hassle-free bill payments. From utilities to recharges, manage all your payments in one place—swiftly, reliably, and with complete transparency. Experience the ease of streamlined financial control with Paymanent.",
    },
    {
        label: "Payment Collect",
        image: "/images/payment.png",
        title: " QR Code Payment Suite",
        description:
            "Scan. Pay. Done. Unlock seamless transactions with Paymanent’s QR Code Payment Suite. Whether it’s dynamic codes for real-time amounts or static codes for fixed payments, our secure and flexible solution adapts to every business scenario—enhancing speed, efficiency, and trust.",
    },
    {
        label: "Remittance",
        image: "/images/remit.png",
        title: "Global Remittance Network ",
        description: "Transfer Funds. Transcend Borders. Paymanent’s Global Remittance Network enables fast, reliable, and compliant money transfers across geographies. With a secure infrastructure and intuitive platform, we make cross-border transactions effortless—empowering financial connectivity without barriers. ",
    },
    {
        label: "Travel Booking",
        image: "/images/travel.png",
        title: "Smart Travel Solutions",
        description: "Plan, Book, and Embark with Confidence. With Paymanent's seamless travel booking services, effortlessly plan and book your journeys with ease. Our intuitive platform ensures smooth and efficient travel arrangements, empowering you to focus on the adventure while we handle the details.",
    },
];

const TabSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="account-feature loan-feature">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-header text-center">
                                <h5 className="sub-title">
                                    Why Paymanent is a great financing option for you.
                                </h5>
                                <h2 className="title">Great benefits from Paymanent</h2>
                                <p>
                                    Paymanent gives you fast, flexible funding with no hidden fees designed to meet your business needs instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-section">
                        <div className="tab-list">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`tab ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            <div className="image-box">
                                <img src={tabs[activeIndex].image} alt={tabs[activeIndex].title} />
                            </div>
                            <div className="content-box">
                                <h3>{tabs[activeIndex].title}</h3>
                                <p>{tabs[activeIndex].description}</p>
                                <div className="btn-area">
                                    <Link href="#" className="cmn-btn">
                                        Explore More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabSection;
