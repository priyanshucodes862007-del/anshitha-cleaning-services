"use client";
import React from "react";
import PrimartBtn from "./PrimartBtn";
import SecondaryBtn from "./SecondaryBtn";
import PriceBadge from "./PriceBadge";

const CTAButtons = ({
  primaryText = "Book A Cleaning Now",
  secondaryText = "91 8057607415",
  phoneNumber = "918057607415",
  price = "₹699",
  priceText = "Starting from",
  className = "",
  isMobile = false,
}) => {
  const pricePosition = isMobile
    ? "bottom-[95%] left-10"
    : "bottom-[85%] -left-10";

  return (
    <nav
      className={`relative flex ${
        isMobile ? "flex-col" : "flex-row"
      } gap-4 items-center justify-center w-full max-w-lg
       ${className}`}
      aria-label="Main actions"
      role="navigation"
    >
      <PriceBadge price={price} text={priceText} className={pricePosition} />

      <PrimartBtn
        text={primaryText}
        href="#booking"
        className={isMobile ? "w-full text-center" : "text-center text-lg w-full"}
      />

      <SecondaryBtn
        href={`tel:${phoneNumber}`}
        text={secondaryText}
        className={isMobile ? "w-full text-center" : "text-center text-lg w-full"}
      />
    </nav>
  );
};

export default CTAButtons;
