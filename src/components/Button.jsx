"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Button = ({
  children = "Click Me",
  icon = true,
  variant = "light",
  onclick,
  className,
  darkColor = "bg-black",
  borderColor = "border-gray-700",
  lightColor = "bg-gray-50",
}) => {
  const buttonVariants = {
    initial: {
      y: "100%",
      borderRadius: "100%",
    },
    hover: {
      y: 0,
      borderRadius: "0%",
    },
  };

  return (
    <motion.button
      className={`${className} relative overflow-hidden border-2 ${
        variant === "dark" ? darkColor : lightColor
      }  text-center font-medium cursor-pointer group ${borderColor}`}
      whileTap={{ scale: 0.98 }}
      whileHover="hover"
      initial="initial"
      onClick={onclick}
    >
      {/* Overlay background */}
      <motion.div
        className={`absolute flex justify-center items-center z-50 inset-0 ${
          variant === "dark" ? lightColor : darkColor
        }`}
        variants={buttonVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span
          className={`relative flex items-center justify-center gap-2 ${
            variant === "dark" ? "text-black" : "text-white"
          }`}
        >
          {children}
          {icon && <ArrowRight className="h-4 w-4" />}
        </span>
      </motion.div>

      {/* Default text that's always visible */}
      <span
        className={`relative flex items-center justify-center gap-2 ${
          variant === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        {children}
        {icon && <ArrowRight className="h-4 w-4" />}
      </span>
    </motion.button>
  );
};

export default Button;
