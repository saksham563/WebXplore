import { NavLink } from "react-router-dom";
import { data } from "./OtherServicesData.jsx";
import { useEffect } from "react";
import photo1 from "../../../assets/seo.png";
import photo2 from "../../../assets/paymentgataway.png";
import photo3 from "../../../assets/aiservice.png";
import photo4 from "../../../assets/socialmedia.png";
import { FaArrowRight } from 'react-icons/fa'; // Import the icon
import './OtherSerivcesCards.css'

const OtherServicesCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { name: "SEO", key: "SEO", photo: photo1 },
    { name: "Payment Gateway Integration", key: "PaymentGatewayIntegration", photo: photo2 },
    { name: "AI Integration Services", key: "AI_Integration_Services", photo: photo3 },
    { name: "Social Media Marketing Services", key: "SocialMediaMarketing", photo: photo4 },
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={service.key} style={{ animationDelay: `${index * 0.2}s` }}>
          {/* <h3 className="service-title">{service.name}</h3> */}
          <div className="image-wrapper">
            <img src={service.photo} alt={service.name} className="service-photo" />
          </div>
          <p className="service-overview">{data[service.key][0].description}</p>
          <NavLink to={`/service/${service.key}`} className="button-wrapper">
            <button className="read-more-button"><span>Explore</span>
              <FaArrowRight size={18} style={{ marginLeft: '8px' }} /></button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default OtherServicesCards;
