"use client";
import React from "react";

const PriceBadge = ({
  price = "₹699",
  text = "Starting from",
  className = "",
  position = "absolute",
}) => {
  return (
    <div
      className={`${position} -rotate-6 bg-accent-warm px-4 py-2 rounded-bl-2xl rounded-tr-2xl ${className}`}
      role="complementary"
      aria-label={`${text} ${price}`}
    >
      <p className="font-bold text-black text-sm sm:text-base">
        {text} <span className="font-extrabold">{price}</span>
      </p>
    </div>
  );
};

export default PriceBadge;
