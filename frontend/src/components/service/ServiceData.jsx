import React from "react";
import { Service } from "./Service.jsx";
import './Service.css'
import weblogo from "../../assets/weblogo.png";
import applogo from "../../assets/applogo.png";
import otherlogo from "../../assets/otherlogo.png"
import { ServicesCardsData } from "./ServicesCardsData.jsx";



export function ServiceData() {
  return (
    <>
{/* Title and Description Section */}
<div className="dark:bg-[#0B0B0F] text-center py-10 px-4">
  <div className="relative bg-transparent max-w-3xl mx-auto p-6">
    <div className="bg-[#1C1C1E] rounded-lg shadow-lg p-8 text-center">
      {/* Title with Animation */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 animate-fade-in-delay">
        <span className=" text-white">Welcome to Our Services</span>
      </h1>
      {/* Description with Animation */}
      <p className="text-base sm:text-lg lg:text-xl text-neutral-300 opacity-1 animate-fade-in-delay2">
        <span className=" text-neutral-300">
          We offer a variety of services to help bring your ideas to life. Whether you need web development, mobile app development, or other custom services, we have you covered. Our team ensures top-notch quality and customer satisfaction in every project.
        </span>
      </p>
    </div>
  </div>
</div>

    <div className="dark:bg-[#0B0B0F] w-full h-full  hiii">
      <Service showGradient={false} />
    </div>


<ServicesCardsData/>

    </>
  );
}
