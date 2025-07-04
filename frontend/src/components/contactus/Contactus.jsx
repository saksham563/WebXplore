import maplogo from "../../assets/mapslogo.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import vid from "../../assets/videobg.mp4";
import "./Contact.css";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form field change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/; // Ensure only digits and exactly 10 characters
    return phoneRegex.test(phoneNumber);
  };

  // reCAPTCHA handler
  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value); // Set to true if captcha is completed
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be exactly 10 digits";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required";
    // if (!captchaVerified) formErrors.captcha = "Please complete the captcha";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5001/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data as JSON
        });

        if (!response.ok) {
          const errorData = await response.json(); // Get the error response
          throw new Error(errorData.message || "Something went wrong");
        }

        const responseData = await response.json();
        alert(responseData.message); // Show success message

        // Optionally reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form: " + error.message);
      }
    }
  };

  return (
    <>
      <video className="vid" src={vid} autoPlay loop muted />
      <div className="container mx-auto px-4">
        <div
          className="d-flex flex-column pb-10 pt-12 text-center"
          style={{ marginTop: "20px" }}
        >
          <h1 className="text-center display-4 font-weight-bold text-dark">
            Communicate With Us
          </h1>
          <p className="mx-auto lead text-muted">
            “Ready to start something new? Every great project starts with a
            conversation, share your ideas and let’s build together.”
          </p>
        </div>
        <hr className="my-4"></hr>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="font-weight-bold text-dark">
                Fill out the form below
              </h2>
              <p className="mt-4 lead text-muted">Reach to Us!</p>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="firstName">First Name</label>{" "}
                    {/* Update htmlFor here */}
                    <input
                      type="text"
                      className="form-control"
                      id="firstName" // Ensure this id matches the htmlFor in the label
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <small className="text-danger">{errors.firstName}</small>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName">Last Name</label>{" "}
                    {/* Update htmlFor here */}
                    <input
                      type="text"
                      className="form-control"
                      id="lastName" // Ensure this id matches the htmlFor in the label
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <small className="text-danger">{errors.lastName}</small>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>{" "}
                  {/* Update htmlFor here */}
                  <input
                    type="email"
                    className="form-control"
                    id="email" // Ensure this id matches the htmlFor in the label
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone number</label>{" "}
                  {/* Update htmlFor here */}
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber" // Ensure this id matches the htmlFor in the label
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNumber && (
                    <small className="text-danger">{errors.phoneNumber}</small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>{" "}
                  {/* Update htmlFor here */}
                  <textarea
                    className="form-control"
                    id="message" // Ensure this id matches the htmlFor in the label
                    rows="3"
                    placeholder="Leave us a message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger">{errors.message}</small>
                  )}
                </div>
                <div className="form-group recaptcha-container">
                  <ReCAPTCHA sitekey="your-site-key" onChange={handleCaptcha} />
                  {errors.captcha && (
                    <small className="text-danger">{errors.captcha}</small>
                  )}
                </div>
                <button type="submit" className="submitbtn">
                  Send Message
                </button>
              </form>
            </div>

            <hr
              className="d-block d-lg-none"
              style={{
                width: "80%",
                margin: "20px auto",
                borderTop: "2px solid #ccc",
              }}
            />

            <div className="col-lg-6">
              <h2 className="font-weight-bold text-dark">
                We Are Here!{" "}
                <img
                  src={maplogo}
                  alt=""
                  style={{ height: "4vh", marginBottom: "10px" }}
                />
              </h2>
              <div
                className="embed-responsive embed-responsive-16by9"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginTop: "10px",
                }}
              >
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238541.2190499328!2d77.59692982134875!3d20.904008185835508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1726575689670!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
