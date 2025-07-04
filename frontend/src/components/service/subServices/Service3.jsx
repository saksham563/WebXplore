import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import vid from "../../../assets/vid.mp4";
import OtherServicesCards from "./OtherServicesCards";
import otherimg from "../../../assets/otherservices.png";
import S3faq from "./S3faq";

const Service3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <video className="vid" src={vid} autoPlay loop muted />
      <Container>
        {/* Header Section */}
        <Row className="my-5">
          <Col md={12}>
            <h1 className="text-center" style={{ color: "black" }}>
              Other Services
            </h1>
          </Col>
        </Row>

        {/* Description Section */}
        <Row className="my-5">
          <Col md={6}>
            <p>
              Through specialized expertise, digital platforms are crafted to
              deliver flawless user experiences and peak performance. Leveraging
              advanced technology and industry standards, each platform is built
              for seamless scalability. This approach transcends basic
              functionality, establishing a robust foundation that adapts to
              business growth and strengthens audience engagement.
            </p>
          </Col>
          <Col md={5}>
            <Image src={otherimg} alt="Project Image" rounded fluid />
          </Col>
        </Row>

        <hr className="my-4"></hr>

        <OtherServicesCards />
        <hr className="my-4"></hr>
      </Container>

      <div>
        <Container className="py-5">
          {/* Section Heading */}
          <Row className="text-center mb-4">
            <Col lg={{ span: 8, offset: 2 }}>
              <h1
                className="display-4 font-weight-bold"
                style={{ color: "black" }}
              >
                Frequently Asked Questions
              </h1>
            </Col>
          </Row>
          <S3faq />

          {/* Contact Link */}
          <Row className="text-center mt-4">
            <Col>
              <p className="text-muted">
                Can't find what you're looking for?{" "}
                <NavLink to={"./contact"}>
                  <Button>Contact us</Button>
                </NavLink>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Service3;
