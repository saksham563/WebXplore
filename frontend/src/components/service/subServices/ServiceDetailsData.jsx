"use client";
import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ServiceDetails } from "./ServiceDetails";

export function ServiceDetailsData() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
      }, []);
  return (
    <>
    <ServiceDetails>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Build lamps <br /> the right wy
      </motion.h1>
      
    </ServiceDetails>
            </>
  );
}
