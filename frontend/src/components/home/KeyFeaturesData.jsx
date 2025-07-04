import React from "react";
import { CardBody, CardContainer, CardItem } from "./KeyFeatures";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { motion } from "framer-motion";
import pic1 from "../../assets/pic1.png"
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"
export function KeyFeaturesData() {
    const text = {
        title: "Key Features",
        description: `Our services come with a range of features that make us stand out in the industry, helping businesses achieve more in a competitive landscape.`,
      };
  return (
    <>
     {/* Section title and description */}
     <div className="text-center mb-1">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-5xl font-bold dark:text-white text-black"
        >
          {text?.title || "Key Features"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 4.8 }}
          className="text-lg mt-4 dark:text-neutral-500 text-gray-600"
        >
          {text?.description ||
            `Our services come with a range of features that make us stand out in the industry, helping businesses achieve more in a competitive landscape.`}
        </motion.p>
      </div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-4/5 sm:w-[80%] h-auto rounded-xl p-6 border">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
          {/* Image on the left */}
          <CardItem
            translateZ="50"
            className="sm:w-1/2 w-full h-60 sm:h-auto rounded-xl overflow-hidden">
            <img
              src={pic1}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </CardItem>

          {/* Title and Description on the right */}
          <div className="sm:w-1/2 w-full mt-4 sm:mt-0 sm:ml-6">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Reasonable Pricing
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
             We offer competitive and transparent pricing structures tailored to fit your budget without compromising on quality. Our flexible pricing models ensure that you receive maximum value for your investment
            </CardItem>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
              {/* First Button */}
              <CardItem
                translateZ={20}
                as={NavLink} // Replace Link with NavLink for routing
                to="/pricing" // Define your route path
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-center w-full sm:w-auto">
                Pricing →
              </CardItem>
              
              {/* Second Button */}
              <CardItem
                translateZ={20}
                as={NavLink}
                to="/contact"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full sm:w-auto">
                Contact Us
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-4/5 sm:w-[80%] h-auto rounded-xl p-6 border">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
          {/* Image on the left */}
         

          {/* Title and Description on the right */}
          <div className="sm:w-1/2 w-full mt-4 sm:mt-0 sm:ml-6">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Business-Specific Web Development
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
              Our solutions are customized to address the unique challenges and requirements of your business. We take the time to understand your industry, target audience, and specific needs to deliver a product that truly supports your business goals
            </CardItem>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
              {/* First Button */}
              <CardItem
                translateZ={20}
                as={NavLink} // Replace Link with NavLink for routing
                to="/service/webdevelopment" // Define your route path
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-center w-full sm:w-auto">
                Web Development →
              </CardItem>
              
              {/* Second Button */}
              <CardItem
                translateZ={20}
                as={NavLink} // Replace Link with NavLink for routing
                to="/pricing" // Define your route path
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full sm:w-auto">
                Pricing
              </CardItem>
            </div>
          </div>
            <CardItem
            translateZ="50"
            className="sm:w-1/2 w-full h-60 sm:h-auto rounded-xl overflow-hidden">
            <img
              src={pic2}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-4/5 sm:w-[80%] h-auto rounded-xl p-6 border">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
          {/* Image on the left */}
          <CardItem
            translateZ="50"
            className="sm:w-1/2 w-full h-60 sm:h-auto rounded-xl overflow-hidden">
            <img
              src={pic3}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </CardItem>

          {/* Title and Description on the right */}
          <div className="sm:w-1/2 w-full mt-4 sm:mt-0 sm:ml-6">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Integration of Latest Trends and Expertise
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
              We stay abreast of the latest industry trends and technological advancements to incorporate cutting-edge features and best practices into your projects. Our team’s expertise ensures that your website or application is modern, efficient, and future-proof
            </CardItem>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
              {/* First Button */}
              <CardItem
                translateZ={20}
                as={NavLink} // Replace Link with NavLink for routing
                to="/service/AI_Integration_Services" // Define your route path
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-center w-full sm:w-auto">
                Integration Services →
              </CardItem>
              
              {/* Second Button */}
              <CardItem
                translateZ={20}
                as={NavLink} // Replace Link with NavLink for routing
                to="/pricing" // Define your route path
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full sm:w-auto">
                Pricing
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
    </>
  );
}