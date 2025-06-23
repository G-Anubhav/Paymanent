import connectedImg from "../public/images/connected-banking.jpg";
import utilityImg from "/public/images/utility-payments.jpg";
import upiImg from "/public/images/upi-collection.jpg";
import microAtmImg from "/public/images/micro-atm.jpg";
import payoutsImg from "/public/images/instant-payouts.jpg";
import travelImg from "/public/images/travel-booking.jpg";
import aadhaarImg from "/public/images/aadhaar-banking.jpg";
import verificationImg from "/public/images/verification-api.jpg";

const serviceIntroData = {
  connectedBanking: {
    image: connectedImg,
    subtitle: "Importance",
    title: "Connected Banking for Smarter Finance",
    description:
      "Connected Banking streamlines your financial operations, enabling seamless transactions, real-time reconciliation, and secure integrations with your business ecosystem.",
    bullets: [
      "Automated Settlements",
      "Instant Reconciliation",
      "Real-time Transaction Monitoring",
    ],
  },
  utilityPayments: {
    image: utilityImg,
    subtitle: "Benefits",
    title: "Simplify Your Bill Payments",
    description:
      "With our Utility Payments service, businesses and users can pay all their bills in one place. Fast, secure, and reliable.",
    bullets: ["Electricity & Gas", "Water & Broadband", "Mobile Recharge"],
  },
  upiCollection: {
    image: upiImg,
    subtitle: "Real-Time",
    title: "Effortless UPI Payment Collection",
    description:
      "Accept UPI payments with ease, track all collections in real-time, and get paid instantly.",
    bullets: ["Dynamic QR Codes", "UPI ID Integration", "Instant Notification"],
  },
  microAtm: {
    image: microAtmImg,
    subtitle: "Rural Reach",
    title: "Micro ATM for Financial Inclusion",
    description:
      "Enable cash withdrawals, deposits, and balance checks at any location using Micro ATMs.",
    bullets: ["AEPS Enabled", "Multi-Bank Support", "Secure Transactions"],
  },
  instantPayouts: {
    image: payoutsImg,
    subtitle: "Speed",
    title: "Instant Payouts to Any Bank",
    description:
      "Disburse salaries, vendor payments, and refunds instantly with just one API call.",
    bullets: ["24x7 Processing", "Bank & UPI Transfers", "Bulk Payouts"],
  },
  travelBooking: {
    image: travelImg,
    subtitle: "Convenience",
    title: "Book Travel Seamlessly",
    description:
      "From flights to buses, provide your users with easy and cost-effective travel booking options.",
    bullets: ["IRCTC Integration", "Bus & Flight APIs", "PNR Tracking"],
  },
  aadhaarBanking: {
    image: aadhaarImg,
    subtitle: "Identity + Banking",
    title: "Aadhaar Enabled Payment Services (AEPS)",
    description:
      "Offer banking access using Aadhaar authentication including withdrawals, deposits, and balance inquiry.",
    bullets: ["Biometric Authentication", "Rural Access", "Secure & Fast"],
  },
  verificationApis: {
    image: verificationImg,
    subtitle: "Compliance",
    title: "Powerful Verification APIs",
    description:
      "Verify PAN, Aadhaar, Bank Accounts, GSTIN, and more using our secure and reliable verification APIs.",
    bullets: ["PAN & Aadhaar Verification", "Bank Account Check", "GSTIN Lookup"],
  },
};

export default serviceIntroData;
