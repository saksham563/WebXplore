import React from 'react';
import { HeroSection } from './HeroSection'; // Adjust the path based on your structure
import { NavLink } from 'react-router-dom';
import './HeroSection.css'
export function HeroSectionData() {
  return (
    <HeroSection>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
      Explore our insightful blogs to stay updated with the latest trends and innovations
        <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"> 
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-900 via-blue-300 to-blue-900 py-4 text-sm md:text-base lg:text-2xl">
          Have questions or need assistance? Connect with us today to start your journey
          </div>
          <div className="hero-buttons mt-8 flex justify-center space-x-6">
            <NavLink to={'/contact'}>
              <button className="hero-button cntus px-8 py-3 text-lg font-semibold text-white bg-black rounded-full transform transition-all duration-300 hover:scale-105 focus:outline-none relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
                Contact Us
              </button>
            </NavLink>
            <NavLink to={'./blogpage'}>
              <button className="hero-button blgpage px-8 py-3 text-lg font-semibold text-white bg-black rounded-full transform transition-all duration-300 hover:scale-105 focus:outline-none relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
                Blog Page
              </button>
            </NavLink>
          </div>
        </div>
      </h2>
    </HeroSection>
  );
}
