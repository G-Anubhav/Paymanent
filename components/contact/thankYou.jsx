import Link from "next/link";

const ThankYou = () => {
  return (
    <section className="thank-you-section">
      <div className="container">
        <div className="thank-you-box">
          <h1>Thank You!</h1>
          <p>Your message has been received. Our team will get back to you shortly.</p>
          <Link href="/" className="cmn-btn mt-4">Return to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
