import { Container, Row, Col, Card } from "react-bootstrap";
import "./TermsConditions.css";
import { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  return (
    <>
      <div className="terms-container">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="card-wrapper">
                <Card className="terms-card">
                  <Card.Body>
                    <h1 className="terms-title">Terms and Conditions</h1>
                    <p className="last-updated">
                      Last updated: September 30, 2024
                    </p>

                    <div className="terms-section">
                      <h2 className="section-heading">
                        1. Acceptance of Terms
                      </h2>
                      <p className="section-text">
                        By using our website and services, you confirm that you
                        accept these Terms and Conditions and agree to comply
                        with them.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">2. Changes to Terms</h2>
                      <p className="section-text">
                        We may update these Terms and Conditions from time to
                        time. Any changes will be posted on this page, and it is
                        your responsibility to review them regularly. Continued
                        use of our services after changes indicates acceptance
                        of the new terms.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">3. Services Provided</h2>
                      <p className="section-text">
                        WebXplore Studio offers web development, mobile
                        application development, SEO optimization, and other
                        related services. The specific services provided will be
                        outlined in the agreements and proposals made between
                        you and us.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">
                        4. User Responsibilities
                      </h2>
                      <p className="section-text">
                        You agree to use our services only for lawful purposes
                        and in a way that does not infringe upon the rights of
                        others. You are responsible for maintaining the
                        confidentiality of any account credentials and for all
                        activities that occur under your account.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">
                        5. Intellectual Property
                      </h2>
                      <p className="section-text">
                        All content, designs, and materials created by WebXplore
                        Studio are owned by us or licensed to us. You may not
                        reproduce, distribute, or modify any of our intellectual
                        property without our prior written consent.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">6. Payment Terms</h2>
                      <p className="section-text">
                        Payment for our services is due as outlined in the
                        proposals or agreements. We reserve the right to charge
                        interest on late payments and to suspend services until
                        payment is received.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">7. Confidentiality</h2>
                      <p className="section-text">
                        Both parties agree to keep confidential any proprietary
                        information received during the course of providing
                        services. This obligation continues even after the
                        termination of services.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">
                        8. Limitation of Liability
                      </h2>
                      <p className="section-text">
                        WebXplore Studio will not be liable for any indirect,
                        incidental, or consequential damages arising from your
                        use of our services. Our total liability is limited to
                        the amount you paid for the services in question.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">9. Indemnification</h2>
                      <p className="section-text">
                        You agree to indemnify and hold WebXplore Studio
                        harmless from any claims, damages, losses, or
                        liabilities arising out of your use of our services or
                        violation of these terms.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">10. Governing Law</h2>
                      <p className="section-text">
                        These Terms and Conditions are governed by and construed
                        in accordance with the laws of [Your Jurisdiction]. Any
                        disputes arising from these terms shall be resolved in
                        the courts of [Your Jurisdiction].
                      </p>
                    </div>

                    <div className="terms-section">
                      <h2 className="section-heading">11. Termination</h2>
                      <p className="section-text">
                        We may terminate or suspend your access to our services
                        at any time, with or without cause, and without notice,
                        if you violate these Terms and Conditions.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "white", height: "1px" }}></div>
    </>
  );
};

export default TermsConditions;
