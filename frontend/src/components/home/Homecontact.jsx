import React, { useState } from "react";
import "./Homecontact.css";
import axios from "axios";
import logo from "../../assets/hcl.png"; // You can replace this with your logo

const Homecontact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Please enter your first name.";
    if (!formData.lastName) newErrors.lastName = "Please enter your last name.";
    if (!formData.phone) newErrors.phone = "Please enter your phone number.";
    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        // Send data to backend
        const response = await axios.post("http://localhost:5001/homecontact", formData);
        setSubmitStatus({ type: "success", message: response.data.message });

        // Reset the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setSubmitStatus({ type: "error", message: "Failed to submit form. Please try again." });
      }
    }
  };

  return (
    <div className="contact-container">
      {/* Contact Form Section (70%) */}
      <div className="contact-form-container">
        <div className="contact-intro">
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you! Whether you have a question, need assistance, or want to share your feedback, feel free to reach out. Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-form-box">
          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="form-input"
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="form-input"
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="form-input"
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-input"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="form-input"
                rows="4"
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Client Section (30%) */}
      <div className="client-section">
        <div className="client-intro">
          <h3 className="clienttext">Our Clients</h3>
          <p>
            We are proud to work with some amazing clients. Here's a look at some of the companies we've partnered with to deliver top-notch services.
          </p>
        </div>
        <div className="client-images">
          <img src={logo} alt="Client 1" className="client-logo" />
          <img src={logo} alt="Client 2" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
        </div>
      </div>
    </div>
  );
};

export default Homecontact;
