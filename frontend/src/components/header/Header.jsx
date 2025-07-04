"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Header = ({ setActive, active, item, children }) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative mr-3 lg:mr-6"
    >
      <motion.p
        transition={{ duration: 1.3 }}
        className="cursor-pointer text-sm md:text-base lg:text-lg text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 w-max">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children, visible }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`relative dark:bg-black dark:border-white/[0.2] shadow-input flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6 px-4 py-6 transition-all duration-300 ease-in-out ${
        visible ? "top-0" : "-top-full"
      }`}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, src, to }) => {
  return (
    <Link
      to={to}
      className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
      style={{ textDecoration: "none" }}
    >
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-base md:text-lg font-bold mb-1 text-white dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-white text-sm md:text-base"
      style={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};