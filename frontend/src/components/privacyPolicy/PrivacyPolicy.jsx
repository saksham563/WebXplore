import { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  return (
    <>
    <div className="privacy-container">
      <Card className="privacy-card">
        <h2 className="privacy-title">Privacy Policy</h2>
        <p className="last-updated">Last updated: September 30, 2024</p>

        <div className="privacy-section">
          <h3 className="section-heading">1. Information We Collect</h3>
          <p className="section-text">
            • Personal Information: Name, email address, phone number, billing information, and other data you provide through our contact forms, account registration, or direct interactions.
            <br />• Non-Personal Information: Browsing data, IP address, browser type, device information, and cookies that help us analyse user behaviour and improve our website.
            <br />• Project Information: Details related to your projects, such as design preferences, technical requirements, and any other relevant data shared during consultations or service delivery.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">2. How We Use Your Information</h3>
          <p className="section-text">
            • Service Delivery: To provide, manage, and improve our website development, mobile application development, SEO optimization, and other services.
            <br />• Communication: To respond to inquiries, send project updates, and provide customer support.
            <br />• Marketing: To send newsletters, promotional materials, and other information related to our services if you have opted in to receive such communications.
            <br />• Compliance: To comply with legal obligations, protect our rights, and enforce our terms and policies.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">3. Sharing Your Information</h3>
          <p className="section-text">
            We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
            <br />• Service Providers: Trusted third parties who assist us in operating our website and delivering services (e.g., payment processors, hosting providers).
            <br />• Legal Requirements: If required by law or in response to a legal request, we may disclose your information to government authorities or regulatory bodies.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">4. Cookies and Tracking Technologies</h3>
          <p className="section-text">
            We use cookies and similar technologies to enhance your browsing experience and analyse site traffic. You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">5. Data Security</h3>
          <p className="section-text">
            We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes the use of encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">6. Your Data Rights</h3>
          <p className="section-text">
            You have the right to access, correct, delete, or object to the processing of your personal data based on your location. You may also withdraw consent where it has been provided. To exercise any of these rights, please reach out to us using the contact details provided.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">7. Third-Party Links</h3>
          <p className="section-text">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external sites you visit.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">8. Changes to This Policy</h3>
          <p className="section-text">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it regularly. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.
          </p>
        </div>

       
      </Card>
    </div>
    
    <div style={{backgroundColor:"white", height:"1px"}}></div>
    </>
  );
};

export default PrivacyPolicy;
