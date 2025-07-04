"use client";
import React from "react";
import { ServicesCards } from "./ServicesCards.jsx";
import weblogo from "../../assets/weblogo.png";
import s2 from "../../assets/s2img.png";
import photo1 from "../../assets/seo.png";
import photo2 from "../../assets/paymentgataway.png";
import photo3 from "../../assets/aiservice.png";
import photo4 from "../../assets/socialmedia.png";

export function ServicesCardsData() {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start space-y-8 dark:bg-[#0B0B0F] py-8">
        {/* Card 1 */}
        <ServicesCards
          title="WebXploreStudios.com/WebDevelopment"
          href={"./webdevelopment"}
        >
          <div className="flex items-center bg-[#1C1C1E] text-slate-100/50 rounded-lg shadow-lg w-[80vw] h-[60vh] max-w-5xl p-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 h-full">
              <img
                src={weblogo}
                alt="Web Development"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="ml-8 flex flex-col justify-center w-2/3 h-full">
              <h3 className="font-bold text-2xl text-slate-100 pb-4">
                Web Development
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                At WebXplore Studio, we offer cutting-edge web development
                services tailored to meet your business needs. Our team of
                experienced developers and designers deliver high-performance,
                scalable, and visually appealing websites that boost user
                engagement and drive business growth.
              </p>
            </div>
          </div>
        </ServicesCards>
      </div>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start space-y-8 dark:bg-[#0B0B0F] py-8 -my-20">
        {/* Card 2 */}
        <ServicesCards
          title="WebXploreStudios.com/MobileDevelopment"
          href={"./mobiledevelopment"}
        >
          <div className="flex items-center bg-[#1C1C1E] text-slate-100/50 rounded-lg shadow-lg w-[80vw] h-[60vh] max-w-5xl p-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 h-full">
              <img
                src={s2}
                alt="Mobile Development"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="ml-8 flex flex-col justify-center w-2/3 h-full">
              <h3 className="font-bold text-2xl text-slate-100 pb-4">
                Mobile Development
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Elevate your business with custom mobile app solutions tailored
                to your needs. We specialize in iOS, Android, and cross-platform
                app development, ensuring seamless user experiences across all
                devices. From concept to launch, our expert team delivers
                innovative, scalable, and secure apps designed to enhance user
                engagement and drive business growth.
              </p>
            </div>
          </div>
        </ServicesCards>
      </div>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start space-y-8 dark:bg-[#0B0B0F] py-8 -my-20">
        {/* Card 3 */}
        <ServicesCards title="WebXploreStudios.com/SEO" href={"./SEO"}>
          <div className="flex items-center bg-[#1C1C1E] text-slate-100/50 rounded-lg shadow-lg w-[80vw] h-[60vh] max-w-5xl p-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 h-full">
              <img
                src={photo1}
                alt="SEO"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="ml-8 flex flex-col justify-center w-2/3 h-full">
              <h3 className="font-bold text-2xl text-slate-100 pb-4">
                SEO
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Every successful SEO campaign starts with thorough keyword
                research. At WebXplore Studio, we dive deep into understanding
                your business, industry, and target audience to discover
                high-value keywords that resonate with potential customers. Our
                strategy involves identifying relevant keywords with high search
                volume and low competition, analysing user intent to target
                keywords that align with what your customers are searching for,
                and building a roadmap that integrates these keywords into every
                aspect of your website, from content to technical SEO.
              </p>
            </div>
          </div>
        </ServicesCards>
      </div>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start space-y-8 dark:bg-[#0B0B0F] py-8 -my-20">
        {/* Card 4 */}
        <ServicesCards
          title="WebXploreStudios.com/PaymentGatewayIntegration"
          href={"./PaymentGatewayIntegration"}
        >
          <div className="flex items-center bg-[#1C1C1E] text-slate-100/50 rounded-lg shadow-lg w-[80vw] h-[60vh] max-w-5xl p-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 h-full">
              <img
                src={photo2}
                alt="Mobile Development"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="ml-8 flex flex-col justify-center w-2/3 h-full">
              <h3 className="font-bold text-2xl text-slate-100 pb-4">
                Payment Gateway Integration
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                We understand that every business is unique. Our team
                collaborates with you to design a custom payment gateway
                solution tailored to your specific needs. We support various
                payment processors, including PayPal, Stripe, Square, and more,
                ensuring that you can accept payments in a way that best fits
                your business model.
              </p>
            </div>
          </div>
        </ServicesCards>
      </div>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start space-y-8 dark:bg-[#0B0B0F] py-8 -my-20">
        {/* Card 5 */}
        <ServicesCards
          title="WebXploreStudios.com/AI_Integration_Services"
          href={"./AI_Integration_Services"}
        >
          <div className="flex items-center bg-[#1C1C1E] text-slate-100/50 rounded-lg shadow-lg w-[80vw] h-[60vh] max-w-5xl p-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 h-full">
              <img
                src={photo3}
                alt="AI Integration Services"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="ml-8 flex flex-col justify-center w-2/3 h-full">
              <h3 className="font-bold text-2xl text-slate-100 pb-4">
                AI Integration Services
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our team specializes in developing tailor-made AI solutions that
                cater to your unique business needs. We assess your existing
                systems and workflows to design AI models that enhance
                efficiency, accuracy, and user experience. Whether it's machine
                learning algorithms for predictive analytics or natural language
                processing for chatbots, we ensure the solutions fit seamlessly
                into your operations.
              </p>
            </div>
          </div>
        </ServicesCards>
      </div>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start space-y-8 dark:bg-[#0B0B0F] py-8 -my-20">
        {/* Card 6 */}
        <ServicesCards
          title="WebXploreStudios.com/SocialMediaMarketing"
          href={"./SocialMediaMarketing"}
        >
          <div className="flex items-center bg-[#1C1C1E] text-slate-100/50 rounded-lg shadow-lg w-[80vw] h-[60vh] max-w-5xl p-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 h-full">
              <img
                src={photo4}
                alt="Social Media Marketing"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="ml-8 flex flex-col justify-center w-2/3 h-full">
              <h3 className="font-bold text-2xl text-slate-100 pb-4">
                Social Media Marketing
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Creating a successful social media presence begins with a
                well-defined strategy. Our team collaborates with you to develop
                a tailored social media strategy that aligns with your business
                goals. We conduct a thorough analysis of your target audience,
                including demographics, interests, and online behaviour.
              </p>
            </div>
          </div>
        </ServicesCards>
      </div>
    </>
  );
}
