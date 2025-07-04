import React from "react";
import { useEffect, useRef } from "react";
import "./AboutUs.css";
import { NavLink } from "react-router-dom";
import aboutus from "../../assets/aboutus.png"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaStar, FaLightbulb, FaHandshake, FaUsers, FaLeaf, FaCode, FaMobileAlt, FaSearch, FaShareAlt, FaMoneyCheckAlt, FaRobot } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  const contentSectionRef = useRef(null);
  const keyPointsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const contentSection = contentSectionRef.current;
    const keyPoints = keyPointsRef.current ? keyPointsRef.current.querySelectorAll(".key-point") : [];

    if (contentSection) observer.observe(contentSection);
    keyPoints.forEach((point) => {
      if (point) observer.observe(point);
    });

    return () => {
      if (contentSection) observer.unobserve(contentSection);
      keyPoints.forEach((point) => {
        if (point) observer.unobserve(point);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    const contentSection = contentSectionRef.current;
    const keyPoints = keyPointsRef.current.querySelectorAll(".key-point");
    observer.observe(contentSection);
    keyPoints.forEach((point) => observer.observe(point));
    return () => {
      observer.unobserve(contentSection);
      keyPoints.forEach((point) => observer.unobserve(point));
    };
  }, []);

  return (
    <div className="about-us-page">
      {/* About Us Header Section */}
      <div className="about-header-section text-center p-5">
        <div className="container">
          <h1 className="about-header-title">
            <span className="animate-title">Welcome </span>
            <span className="animate-title">To </span>
            <span className="animate-title">WebXplore</span>
            <span className="animate-title">Studio</span>
          </h1>
          <p className="about-header-tagline animate-description">
            Your Trusted Partner in Digital Innovation
          </p>
          <p className="about-header-description animate-description">
            At WebXplore Studio, we excel in delivering transformative digital solutions
            that empower businesses to thrive in a competitive landscape. Let us turn your
            vision into impactful realities.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div
        className="about-us-container container mt-5 p-4"
        ref={contentSectionRef}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={aboutus}
              alt="About Us"
              className="img-fluid about-img"
              style={{ maxHeight: "600px" }}
            />
          </div>
          <div className="col-md-6 text-center text-md-left">
            <h1 style={{ color: "black", fontSize:"3rem" }}>Who We Are</h1>
            <p className="about-description">
              We are a dynamic and innovative company that specializes in
              delivering top-notch services and solutions to clients around the
              globe. Our team is passionate, driven, and committed to helping
              businesses thrive in a digital-first world.
            </p>
            <h2 className="about-subheading mb-3" style={{ color: "black", fontSize:"3rem", marginTop:"50px" }}>Our Mission</h2>
            <p className="about-description" style={{marginTop:"-10px"}}>
              Our mission is to provide cutting-edge technologies, customized
              solutions, and exceptional service that empowers our clients to
              achieve their business goals and exceed expectations.
            </p>
            <NavLink to={'./service'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <button className="btn btn-primary about-btn"style={{marginTop:"20px"}}>Discover More</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="key-points-section container mt-5 p-4" ref={keyPointsRef}>
        <h2 className="about-subheading text-center mb-5" style={{ color: "black", fontSize:"3rem"  }}>
          Our Core Values
        </h2>
        <div className="row text-center">
          <div className="col-md-4 key-point">
            <div className="key-point-card">
              <FaStar className="key-point-icon" size={40} style={{ color: "#f4b400" }} />
              <h5 className="key-point-title mt-3">Excellence</h5>
              <p className="key-point-description">
                We strive for the highest quality in every service, ensuring excellence is our hallmark.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point">
            <div className="key-point-card">
              <FaLightbulb className="key-point-icon" size={40} style={{ color: "#4285f4" }} />
              <h5 className="key-point-title mt-3">Innovation</h5>
              <p className="key-point-description">
                Encouraging creativity and new ideas to deliver cutting-edge solutions to our clients.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point">
            <div className="key-point-card">
              <FaHandshake className="key-point-icon" size={40} style={{ color: "#0f9d58" }} />
              <h5 className="key-point-title mt-3">Integrity</h5>
              <p className="key-point-description">
                Conducting business with honesty, transparency, and accountability at all times.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point mt-4">
            <div className="key-point-card">
              <FaUsers className="key-point-icon" size={40} style={{ color: "#db4437" }} />
              <h5 className="key-point-title mt-3">Collaboration</h5>
              <p className="key-point-description">
                Leveraging teamwork and open communication to create impactful outcomes.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point mt-4">
            <div className="key-point-card">
              <FaLeaf className="key-point-icon" size={40} style={{ color: "#34a853" }} />
              <h5 className="key-point-title mt-3">Sustainability</h5>
              <p className="key-point-description">
                Adopting practices that benefit both businesses and the environment for long-term success.
              </p>
            </div>
          </div>
        </div>

        <h2 className="about-subheading text-center mt-5 mb-4" style={{ color: "black", fontSize:"3rem"  }}>
          What We Do
        </h2>
        <div className="row text-center">
          <div className="col-md-4 key-point">
            <div className="key-point-card">
              <FaCode className="key-point-icon" size={40} style={{ color: "#0f9d58" }} />
              <h5 className="key-point-title mt-3">Web Development</h5>
              <p className="key-point-description">
                Building dynamic, responsive websites that are optimized for performance and scalability.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point">
            <div className="key-point-card">
              <FaMobileAlt className="key-point-icon" size={40} style={{ color: "#4285f4" }} />
              <h5 className="key-point-title mt-3">Mobile App Development</h5>
              <p className="key-point-description">
                Designing intuitive mobile applications for seamless user experiences on the go.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point">
            <div className="key-point-card">
              <FaSearch className="key-point-icon" size={40} style={{ color: "#f4b400" }} />
              <h5 className="key-point-title mt-3">SEO</h5>
              <p className="key-point-description">
                Boosting your online visibility through targeted and data-driven search engine optimization.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point mt-4">
            <div className="key-point-card">
              <FaShareAlt className="key-point-icon" size={40} style={{ color: "#db4437" }} />
              <h5 className="key-point-title mt-3">Social Media Marketing</h5>
              <p className="key-point-description">
                Crafting impactful campaigns to engage your audience and enhance brand awareness.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point mt-4">
            <div className="key-point-card">
              <FaMoneyCheckAlt className="key-point-icon" size={40} style={{ color: "#34a853" }} />
              <h5 className="key-point-title mt-3">Payment Gateway Integration</h5>
              <p className="key-point-description">
                Seamlessly integrating secure payment systems to ensure smooth transactions for your business.
              </p>
            </div>
          </div>
          <div className="col-md-4 key-point mt-4">
            <div className="key-point-card">
              <FaRobot className="key-point-icon" size={40} style={{ color: "#0f9d58" }} />
              <h5 className="key-point-title mt-3">AI Integration</h5>
              <p className="key-point-description">
                Harnessing the power of artificial intelligence to revolutionize your operations.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Team Section */}
      <div className="about-team-section container mt-5 p-4">
        <h2 className="about-subheading text-center mb-4" style={{ color: "black", fontSize:"3rem"  }}>Meet Our Team</h2>
        <div className="row text-center member justify-content-center">
          <div className="col-md-5" style={{ marginBottom: "15px" }}>
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img rounded-circle shadow-lg"
              />
              <h5 className="team-name mt-3">Karishma Sirsat</h5>
              <p className="team-role text-muted">Director / Managing Director (MD)</p>
              <p className="team-role text-muted">karishma@resolvainsights.com</p>
              <div className="team-social-icons mt-3">
                <a href="https://linkedin.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:karishma@resolvainsights.com" className="text-dark mx-2">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img rounded-circle shadow-lg"
              />
              <h5 className="team-name mt-3">Mayur Thorat</h5>
              <p className="team-role text-muted">CEO</p>
              <p className="team-role text-muted">mayur@resolvainsights.com</p>
              <div className="team-social-icons mt-3">
                <a href="https://linkedin.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:mayur@resolvainsights.com" className="text-dark mx-2">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img rounded-circle shadow-lg"
              />
              <h5 className="team-name mt-3">Saksham</h5>
              <p className="team-role text-muted">Full Stack Developer</p>
              <p className="team-role text-muted">saksham.k@resolvainsights.com</p>
              <div className="team-social-icons mt-3">
                <a href="https://www.linkedin.com/in/saksham-18601b25b/" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:saksham.k@resolvainsights.com" className="text-dark mx-2">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img rounded-circle shadow-lg"
              />
              <h5 className="team-name mt-3">Rohit Chandra</h5>
              <p className="team-role text-muted">Full Stack Developer</p>
              <p className="team-role text-muted">rohit.c@resolvainsights.com</p>
              <div className="team-social-icons mt-3">
                <a href="https://www.linkedin.com/in/rohit-chandra-10ab582a2/" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:rohit.c@resolvainsights.com" className="text-dark mx-2">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
