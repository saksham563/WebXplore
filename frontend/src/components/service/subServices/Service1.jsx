import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import S1faq from "./S1faq.jsx";
import web1 from "../../../assets/webimg1.jpg";
import { FaCode, FaShoppingCart, FaMobileAlt, FaFileAlt, FaPlug, FaDesktop } from "react-icons/fa";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <p>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

const Service1 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      title: "Custom Website Development",
      description:
        "We build custom websites tailored to your specific business needs. From small business websites to complex enterprise solutions, we deliver unique and scalable websites that are optimized for performance and security.",
      icon: <FaCode className="text-4xl text-indigo-600" />,
    },
    {
      title: "eCommerce Development",
      description:
        "Launch your online store with our robust eCommerce solutions. We develop secure, scalable, and easy-to-manage eCommerce websites using platforms like Shopify, WooCommerce, and Magento.",
      icon: <FaShoppingCart className="text-4xl text-green-500" />,
    },
    {
      title: "Responsive Web Design",
      description:
        "Ensure your website looks great on all devices with our responsive web design services. We create websites that automatically adjust to any screen size, offering a seamless experience across desktops, tablets, and smartphones.",
      icon: <FaMobileAlt className="text-4xl text-blue-400" />,
    },
    {
      title: "CMS Development",
      description:
        "Manage your website content effortlessly with our custom CMS (Content Management System) development services. Whether you need WordPress, Joomla, or a custom CMS solution, we ensure your website is easy to update without technical expertise.",
      icon: <FaFileAlt className="text-4xl text-purple-500" />,
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Enhance user experience with Progressive Web Apps that combine the best of web and mobile applications. PWAs offer fast loading times, offline capabilities, and native app-like experiences on any device.",
      icon: <FaPlug className="text-4xl text-orange-400" />,
    },
    {
      title: "Single Page Applications (SPA)",
      description:
        "SPAs provide dynamic interactions on a single page, improving performance and user experience. We specialize in frameworks like React, Angular, and Vue.js to build fast and responsive single-page applications.",
      icon: <FaDesktop className="text-4xl text-red-500" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800">Web Development Services</h1>
        <p className="text-center text-gray-600 mt-4">
          A brief overview of the project with highlights of its key points.
        </p>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-10 flex flex-wrap md:flex-nowrap items-center">
        <div className="md:w-1/2 text-gray-700">
          <p className="animate-fade-in">
            At WebXplore Studio, we offer cutting-edge web development services tailored to meet your
            business needs. Our team of experienced developers and designers deliver high-performance,
            scalable, and visually appealing websites that boost user engagement and drive business
            growth.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={web1} alt="Project" className="rounded shadow-lg w-full h-auto" />
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Web Development Services Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Our Web Development Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          At WebXplore Studio, we specialize in providing a wide range of web development services
          that help businesses establish a strong online presence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-center text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
        </div>
        <S1faq />
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Can't find what you're looking for?{" "}
            <NavLink to="/contact">
              <button className="ml-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
                Contact us
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service1;
