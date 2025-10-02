"use client";
import React from "react";
import PrimartBtn from "./PrimartBtn";
import SecondaryBtn from "./SecondaryBtn";
import PriceBadge from "./PriceBadge";
import Button from "./Button";

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
    ? "bottom-[95%] left-10 z-50"
    : "bottom-[85%] -left-10 z-50";

  return (
    <nav
      className={`relative flex ${
        isMobile ? "flex-col" : "flex-row"
      } gap-4 items-center justify-center w-full max-w-xl
       ${className}`}
      aria-label="Main actions"
      role="navigation"
    >
      <PriceBadge price={price} text={priceText} className={pricePosition} />
 

       <Button icon={false} className='w-full text-lg font-semibold px-6 py-4 rounded-full' children={primaryText} />
 

       <Button variant="dark" icon={false} className='w-full text-lg font-semibold px-6 py-4 rounded-full' children={secondaryText} />
    </nav>
  );
};

export default CTAButtons;
