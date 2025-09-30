"use client";
import React from "react";

const PrimartBtn = ({
  text = "Book now",
  href = "#",
  className = "",
}) => {
  const baseClasses =
    "oxygen border-2 border-transparent hover:border-[var(--color-background)] transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[var(--color-background)] bg-[var(--color-background)] text-[var(--color-text-primary)] font-bold px-6 py-3 cursor-pointer rounded-full";

  return (
    <a
      href={href}
      className={`${baseClasses} ${className}`}
    >
      {text}
    </a>
  );
};

export default PrimartBtn;
