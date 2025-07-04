import { useEffect, useState } from "react";
import axios from "axios";
import "./Case.css";

const Case = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [animatedDescription, setAnimatedDescription] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const descriptionText =
      "Dive into our in-depth case studies, where we explore how technology transforms industries. Learn about the real-world applications of 5G, AI, AR/VR, and more through detailed studies.";
    const words = descriptionText.split(" ");
    setAnimatedDescription(words);
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Adjust speed by changing this increment
      });
    }, 300); // Adjust duration by changing interval

    try {
      // Send email for case study
      const emailResponse = await axios.post("http://localhost:5001/send-email", {
        email,
      });

      // Save email in database with formType: 'caseStudy'
      await axios.post("http://localhost:5001/saveCaseEmail", {
        email,
      });

      setTimeout(() => {
        setSuccessMessage(emailResponse.data.message);
        setErrorMessage("");
        setEmail(""); // Clear the input field
        setIsLoading(false);
      }, 3000); // Wait for the full progress to complete
    } catch (error) {
      clearInterval(interval);
      setErrorMessage(
        error.response?.data?.error || "Failed to send email. Please try again."
      );
      setSuccessMessage("");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="case-page-container bgimg">
        {/* Page Heading */}
        <div className="page-heading">
          <h1 className="main-title">Our Case Studies</h1>
          <p className="page-description">
            {animatedDescription.map((word, index) => (
              <span
                key={index}
                className="animated-word"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>

        {/* Case Study Card */}
        <div className="case-container">
          <div className="case-card">
            <h1 className="case-title">
              Case Study: AI-Powered Chatbots for Real-Time Customer Support
            </h1>
            <p className="case-description">
              Resolva Insights Private Limited, a market research and consulting
              firm, specializes in providing data-driven insights, market
              analysis, and strategic guidance to businesses across various
              industries.
            </p>

            <h2 className="case-subtitle">Key Points:</h2>
            <ul className="case-list">
              <li>Challenges</li>
              <li>Objective</li>
              <li>Solution</li>
              <li>Tech Stack</li>
              <li>Benefits</li>
              <li>Results</li>
              <li>Conclusion</li>
            </ul>

            {/* Show Form on Button Click */}
            <div className="button-container">
              <button
                onClick={() => setShowForm(!showForm)}
                className="download-button"
              >
                Request Case Study
              </button>
            </div>

            {/* Email Form */}
            {showForm && !successMessage && (
              <form onSubmit={handleEmailSubmit} className="email-form">
                <label htmlFor="email">Enter your email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submit-button" disabled={isLoading}>
                  Submit
                </button>
              </form>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="progress-indicator">
                <p>Sending email: {progress}%</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Success or Error Messages */}
            {successMessage && (
              <div className="success-message-container">
                <p className="success-message">{successMessage}</p>
                <p>Thank you for your request!</p>
              </div>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", height: "1px" }}></div>
    </>
  );
};

export default Case;
