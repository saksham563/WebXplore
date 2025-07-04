import React from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Cards.css";
import ios from "../../../assets/iosvd.mp4";
import android from "../../../assets/androidvd.mp4";
import cp from "../../../assets/cpvd.mp4";

const Cards = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the card is visible
  });
  const { ref: firstCardRef, inView: firstCardInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Second card animation (right to left)
  const { ref: secondCardRef, inView: secondCardInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div>
      <Container fluid className="d-flex justify-content-center mt-5">
        <Row className="w-100">
          <Col>
            <Card 
              ref={ref}
              className={`full-width-card ${inView ? "animate-card" : ""}`}
            >
              <Row noGutters>
                <Col md={5} className="card-image-section">
                  <video className="vidcard"
                    src={ios}
                    autoPlay
                    muted
                    loop
                   
                  ></video>
                </Col>

                <Col md={7}>
                  <Card.Body
                    className={`card-body-content  ${
                      inView ? "animate-text" : ""
                    }`}
                  >
                    <Card.Title className="cardtitle text-center">
                      IOS Development
                    </Card.Title>
                    <Card.Text className="card-text">
                      • Custom iOS App Development: Focus on building native
                      apps using Swift or Objective-C to ensure optimal
                      performance and seamless integration with the iOS
                      ecosystem. Key features include advanced UI/UX designs
                      tailored to Apple’s design guidelines, and deep
                      integration with core iOS functionalities like ARKit,
                      CoreML, and Siri. <br /> • App Store Deployment:
                      Comprehensive support for app submission, beta testing
                      with TestFlight, ensuring compliance with Apple’s strict
                      App Store guidelines, and optimizing for approvals. <br />{" "}
                      • Security & Maintenance: Emphasize robust security, data
                      encryption, and regular updates for bug fixes, security
                      patches, and feature additions, maintaining app longevity
                      post-launch.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-flex justify-content-center mt-5">
        <Row className="w-100">
          <Col>
            <Card
              ref={ref}
              className={`full-width-card ${inView ? "animate-card" : ""}`}
            >
              <Row noGutters>
                <Col md={7}>
                  <Card.Body
                    className={`card-body-content ${
                      inView ? "animate-text" : ""
                    }`}
                  >
                    <Card.Title className="cardtitle text-center">
                      Android Development
                    </Card.Title>
                    <Card.Text className="card-text">
                      • Custom Android App Development: Build feature-rich
                      native apps using Kotlin or Java, leveraging Android’s
                      open-source ecosystem for greater flexibility. Develop
                      apps compatible with Android’s fragmented device
                      landscape, ensuring consistent performance across
                      different screen sizes, versions, and devices. <br /> •
                      Google Play Store Launch: Provide full support for app
                      publishing, including APK generation, alpha/beta testing
                      through Google Play Console, and app maintenance
                      post-launch. Ensure apps follow Google’s Material Design
                      guidelines for an optimized user experience. <br /> •
                      Advanced Features: Integration with Google services like
                      Firebase, Google Maps, and push notifications, ensuring
                      smooth functionality and real-time engagement with users.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={5} className="card-image-section">
                  <video
                    src={android}
                    autoPlay
                    muted
                    loop
                    style={{ height: "58vh", width: "33vw" }}
                  ></video>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-flex justify-content-center mt-5">
        <Row className="w-100">
          <Col>
            <Card
              ref={ref}
              className={`full-width-card ${inView ? "animate-card" : ""}`}
            >
              <Row noGutters>
                <Col md={5} className="card-image-section">
                  <video
                    src={cp}
                    autoPlay
                    muted
                    loop
                    style={{ height: "58vh", width: "30vw" }}
                  ></video>
                </Col>

                <Col md={7}>
                  <Card.Body
                    className={`card-body-content ${
                      inView ? "animate-text" : ""
                    }`}
                  >
                    <Card.Title className="cardtitle text-center">
                      Cross-Platform Development
                    </Card.Title>
                    <Card.Text className="card-text">
                      • Frameworks: Build versatile apps using leading
                      frameworks like React Native, Flutter, or Xamarin,
                      offering a write-once-deploy-anywhere approach to app
                      development. These frameworks allow for code reusability
                      across iOS and Android, reducing development time and
                      costs. <br /> • UI/UX Consistency: Cross-platform apps ensure
                      consistency in user experience across multiple platforms.
                      Leverage shared business logic while customizing user
                      interfaces to adhere to iOS and Android standards. <br /> • Cost
                      Efficiency & Maintenance: Reduced time for updates and
                      maintenance, as the core codebase can be updated once and
                      pushed to both platforms. Achieve near-native performance,
                      balancing the speed of development with high-quality
                      results.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
