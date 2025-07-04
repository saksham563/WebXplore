import { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import './CookiesPolicy.css';

const CookiesPolicy = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  return (
    <>
    <div className="cookies-container">
      <Container>
        <Card className="cookies-card" style={{marginTop:"50px", marginBottom:"50px"}}>
          <Card.Body>
            <h1 className="cookies-title">Cookies Policy</h1>
            <p className="last-updated">Last updated: September 30, 2024</p>

            <div className="cookies-section">
              <h2 className="section-heading">1. What Are Cookies?</h2>
              <p className="section-text">
                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help the website remember your actions and preferences over time.
              </p>
            </div>

            <div className="cookies-section">
              <h2 className="section-heading">2. How We Use Cookies</h2>
              <p className="section-text">
                We use cookies for various purposes, including essential cookies that enable basic website functions and navigation, performance cookies that help us understand visitor interactions to improve site performance, functional cookies that remember your preferences for a personalized experience, and targeting cookies that deliver relevant advertisements while measuring their effectiveness.
              </p>
            </div>

            <div className="cookies-section">
              <h2 className="section-heading">3. Third-Party Cookies</h2>
              <p className="section-text">
                We may allow third-party service providers to place cookies on your device to assist us in analysing website traffic and providing targeted advertising. These third parties may collect information about your online activities across different websites.
              </p>
            </div>

            <div className="cookies-section">
              <h2 className="section-heading">4. Managing Cookies</h2>
              <p className="section-text">
                You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse or accept cookies, as well as delete existing cookies. However, disabling cookies may affect your ability to use certain features of our website.
              </p>
            </div>

            <div className="cookies-section">
              <h2 className="section-heading">5. Changes to This Policy</h2>
              <p className="section-text">
                We may update this Cookies Policy from time to time. Any changes will be posted on this page, and we encourage you to review it regularly. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
      <div style={{backgroundColor:"white", height:"1px"}}></div>
      </>
  );
};

export default CookiesPolicy;
