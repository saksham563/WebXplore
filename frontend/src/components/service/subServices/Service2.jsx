import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import S2faq from "./S2faq";
import Cards from "./Cards";
import s2 from "../../../assets/s2img.jpg";

const Service2 = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Mobile App Development
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Elevate your business with custom mobile app solutions tailored to
              your needs. We specialize in iOS, Android, and cross-platform app
              development, ensuring seamless user experiences across all
              devices. From concept to launch, our expert team delivers
              innovative, scalable, and secure apps designed to enhance user
              engagement and drive business growth.
            </p>
          </div>
          <div>
            <img
              src={s2}
              alt="Mobile App Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <Cards />
        </div>
      </div>

      <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
        <hr className="border-t border-gray-300 my-8" />

        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>
        <S2faq />

        {/* Contact Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Can't find what you're looking for?{" "}
            <NavLink to="./contact">
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Contact Us
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service2;
