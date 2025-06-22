import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        label: "AePs",
        image: "/images/aeps.png",
        title: "AePs Service",
        description: "Aadhar Enabled Payment System for easy access to banking services. Aadhar Enabled Payment System for easy access to banking services. Aadhar Enabled Payment System for easy access to banking services. Aadhar Enabled Payment System for easy access to banking services.",
    },
    {
        label: "Utility Payment",
        image: "/images/utility.png",
        title: "Utility Payment",
        description: "Pay your utility bills seamlessly and securely. Pay your utility bills seamlessly and securely. Pay your utility bills seamlessly and securely. Pay your utility bills seamlessly and securely. Pay your utility bills seamlessly and securely.",
    },
    {
        label: "Payment Collect",
        image: "/images/payment.png",
        title: "Dynamic & Static QR",
        description:
            "Unleash the power of QR codes with secure dynamic and static payment options. Unleash the power of QR codes with secure dynamic and static payment options. Unleash the power of QR codes with secure dynamic and static payment options. Unleash the power of QR codes with secure dynamic and static payment options. ",
    },
    {
        label: "Remittance",
        image: "/images/remit.png",
        title: "Remittance",
        description: "Transfer money instantly and securely to any bank account to another. Transfer money instantly and securely to any bank account to another. Transfer money instantly and securely to any bank account to another. Transfer money instantly and securely to any bank account to another. Transfer money instantly and securely to any bank account to another. ",
    },
    {
        label: "Travel Booking",
        image: "/images/travel.png",
        title: "Travel Booking",
        description: "Book travel tickets effortlessly through your bank dashboard with our payment gateway. Book travel tickets effortlessly through your bank dashboard with our payment gateway. Book travel tickets effortlessly through your bank dashboard with our payment gateway. Book travel tickets effortlessly through your bank dashboard with our payment gateway. ",
    },
];

const TabSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        // <div className="tab-section">
        //   <div className="tab-list">
        //     {tabs.map((tab, index) => (
        //       <button
        //         key={index}
        //         className={`tab ${activeIndex === index ? "active" : ""}`}
        //         onClick={() => setActiveIndex(index)}
        //       >
        //         {tab.label}
        //       </button>
        //     ))}
        //   </div>

        //   <div className="tab-content">
        //     <div className="image-box">
        //       <img src={tabs[activeIndex].image} alt={tabs[activeIndex].title} />
        //     </div>
        //     <div className="content-box">
        //       <h3>{tabs[activeIndex].title}</h3>
        //       <p>{tabs[activeIndex].description}</p>
        //     </div>
        //   </div>
        // </div>
        <section className="account-feature loan-feature">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-header text-center">
                                <h5 className="sub-title">
                                    Why Bankio is a great financing option for you.
                                </h5>
                                <h2 className="title">Great benefits from Bankio</h2>
                                <p>
                                    Bankio CarLoan offers you the freedom to choose any vehicle on
                                    a fixed mark-up rate facility to suit your personal
                                    requirements
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
