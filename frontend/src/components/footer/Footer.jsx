import "../../App.css";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import aws from '../../assets/aws.png';
import azure from '../../assets/azure.png';
import cloud from '../../assets/cloud.png';

const openInsta = () => {
  window.open("https://www.instagram.com/webxplore_studio?igsh=MTR3MmpmNHNqYnF2Nw==");
};
const openLinkedin = () => {
  window.open("https://www.linkedin.com/company/webxplore-studio");
};

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const NewsletterInput = styled.input`
  width: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;

const NewsletterButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff6b6b;
  color: #fff;
  cursor: pointer;
  width: 5vw;
  &:hover {
    background-color: #ff4b4b;
  }
`;

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/subscribeNewsletter", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <>
      <FooterContainer>
        <div className="footer-content">
          <div className="footer-logo-webdev">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
            </div>
              <h3>Our Web Development Partners</h3>
            <PartnerSection>
              <div className="partners">
                <div className="partner">
                  <img src={aws} alt="AWS" />
                </div>
                <div className="partner">
                  <img src={azure} alt="Microsoft Azure" />
                </div>
                <div className="partner">
                  <img src={cloud} alt="Google Cloud" />
                </div>
              </div>
            </PartnerSection>
          </div>

          {/* Footer Sections in a Single Line */}
          <div className="footer-sections">
            <div className="footer-section">
              <h4>About</h4>
              <ul>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Careers</NavLink>
                </li>
                <li>
                  <NavLink to="/">Press</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Information</h4>
              <ul>
                <li>
                  <NavLink to="/termsandcondtion">Terms & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/privacypolicy">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/cookiespolicy">Cookies Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/sitemap">Sitemap</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                <NavLink to="/webdevelopment"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Web Development</NavLink>
                </li>
                <li>
                <NavLink to="/mobiledevelopment"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Mobile Development</NavLink>
                </li>
                <li>
                <NavLink to="/service/SEO" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>SEO</NavLink>
                </li>
                <li>
                <NavLink to="/service/PaymentGatewayIntegration"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Payment Gateway</NavLink>
                </li>
                <li>
                <NavLink to="/service/AI_Integration_Services"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>AI Integration</NavLink>
                </li>
                <li>
                <NavLink to="/service/SocialMediaMarketing"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Social Media</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Socials</h4>
              <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                <li style={{ marginRight: "10px" }}>
                  <NavLink to="/">
                    <i className="fa-brands fa-facebook"></i>
                  </NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <NavLink onClick={openInsta}>
                    <i className="fa-brands fa-instagram"></i>
                  </NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <NavLink onClick={openLinkedin}>
                    <i className="fa-brands fa-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>FAQs</h4>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/faq">
                    <i className="fa-solid fa-circle-question"></i>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h4>Newsletter</h4>
              <p>Stay updated with our latest news and offerings.</p>
              <NewsletterForm onSubmit={handleNewsletterSubmit}>
                <NewsletterInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <NewsletterButton type="submit" className="send">
                  Send
                </NewsletterButton>
              </NewsletterForm>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy;{new Date().getFullYear()} WebXplore Studio - All Rights Reserved</p>
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;
const FooterContainer = styled.footer`
  background: black;
  color: white;
  padding: 2rem 1rem;

  .footer-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 10vw; /* Equal margins on both sides */

    .footer-logo-webdev {
      display: flex;
      justify-content: flex-start; /* Align logo and partners to the left */
      align-items: center;
      width: 100%;
      margin-bottom: 2rem;
      gap: 2rem; /* Space between logo and partners */
      flex-wrap: wrap; /* Allow wrapping of items on smaller screens */
    }

    .footer-logo {
      flex: 1;
      text-align: left;
      margin-right: 2rem;

      img {
        height: 32vh; /* Adjust logo size */
        margin-right: 2rem;
      }
    }

    .footer-sections {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      width: 100%;
    }

    .footer-section {
      flex: 1;
      min-width: 150px;
      margin-bottom: 1rem; /* Add margin for smaller screens */

      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 0.5rem 0;

          a {
            color: white;
            text-decoration: none;
          }

          a:hover {
            color: grey;
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.9rem;
    border-top: 1px solid grey;
    padding-top: 1rem;
    margin-bottom: -20px
  }

  @media (max-width: 1200px) {
    .footer-content {
      margin: 0 5vw; /* Reduce side margin for smaller screens */
    }

    .footer-logo-webdev {
      gap: 1rem; /* Reduce gap between logo and partners */
    }

    .footer-logo img {
      height: 20vh; /* Decrease logo size on medium screens */
    }

    .footer-sections {
      gap: 1rem; /* Reduce gap between sections */
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }

    .footer-logo img {
      height: 8vh; /* Decrease logo size for smaller devices */
    }

    .footer-sections {
      flex-direction: column;
      align-items: center;
    }

    .footer-section {
      text-align: center; /* Center-align section content */
      min-width: 100%; /* Make sections take full width */
    }

    .footer-logo-webdev {
      flex-direction: column; /* Stack logo and partners vertically */
      gap: 1rem; /* Add space between logo and partners */
    }

    .partner-section {
      margin-left: 0; /* Remove margin-left for smaller screens */
      margin-top: 1rem; /* Add top margin */
    }

    .send {
      width: 100%; /* Make the newsletter input take full width */
    }
  }

  @media (max-width: 480px) {
    .footer-logo img {
      height: 6vh; /* Even smaller logo size */
    }

    .footer-sections {
      gap: 0.5rem; /* Further reduce gap for small screens */
    }

    .footer-section {
      text-align: center; /* Ensure content is centered */
      min-width: 100%;
    }

    .footer-bottom {
      font-size: 0.8rem; /* Smaller font size for footer text */
    }
  }
`;

const PartnerSection = styled.section`
  padding: 2rem 1rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: 1.2rem; /* Adjust font size for smaller screens */
    }
  }

  .partners {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap; /* Allow wrapping of partners */
    margin: 0 auto;
    width: 100%;
    max-width: 100%; /* Prevent overflow */
    padding: 0;
  }

  .partner {
    width: 100px; /* Fixed width for partners */
    height: 100px; /* Fixed height for partners */
    max-width: 100%; /* Prevent overflow */
    margin: 1rem; /* Add margin around partner images */

    img {
      width: 100%;
      height: 100%;
      object-fit: contain; /* Prevent distortion of the image */
    }
  }
`;
