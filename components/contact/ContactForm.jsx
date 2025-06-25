import { useState } from "react";
import { useRouter } from "next/router";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    otherBusinessType: "",
    website: "",
    message: "",
  });

  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const handleBusinessChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      businessType: value,
      otherBusinessType: "",
    }));
    setErrors((prev) => ({ ...prev, businessType: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const business =
        formData.businessType === "Other"
          ? formData.otherBusinessType
          : formData.businessType;

      const finalData = { ...formData, businessType: business };

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        });

        const result = await res.json();

        if (res.ok && result.success) {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            businessType: "",
            otherBusinessType: "",
            website: "",
            message: "",
          });
          router.push("/thank-you");
        }
        else {
          alert("Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="fullName">Full Name <span className="asterick">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
        </div>

        <div className="col-6">
          <div className="single-input">
            <label htmlFor="email">Email <span className="asterick">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="phone">Phone <span className="asterick">*</span></label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="000-000-0000"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="col-6">
          <div className="single-input">
            <label htmlFor="company">Company Name <span className="asterick">*</span></label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter firm name"
            />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="businessType">Type of Business</label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleBusinessChange}
            >
              <option value="">Select your business type</option>
              <option value="Credit Cooperative Society">Credit Cooperative Society</option>
              <option value="Credit Cooperative Bank">Credit Cooperative Bank</option>
              <option value="Nidhi Bank">Nidhi Bank</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {formData.businessType === "Other" && (
          <div className="col-6">
            <div className="single-input">
              <label htmlFor="otherBusinessType">Specify Business Type</label>
              <input
                type="text"
                id="otherBusinessType"
                name="otherBusinessType"
                value={formData.otherBusinessType}
                onChange={handleChange}
                placeholder="Enter your business type"
              />
            </div>
          </div>
        )}
      </div>

      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="website">Website Link (if applicable)</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter website"
            />
          </div>
        </div>

        <div className="col-6">
          <div className="single-input">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="I would like to get in touch with you..."
            />
          </div>
        </div>
      </div>

      <div className="btn-area text-center">
        <button type="submit" className="cmn-btn">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
