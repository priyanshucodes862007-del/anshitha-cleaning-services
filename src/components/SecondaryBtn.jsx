"use client";
import React from "react";

const SecondaryBtn = ({ text = "Book now", href, icon }) => {
  return (
    <a href={href} className="oxygen border-2 hover:border-transparent border-[var(--color-background)] transition-all duration-300 hover:-translate-y-1 bg-transparent text-[var(--color-background)] hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)] font-bold px-6 py-3 cursor-pointer rounded-full">
      <span>{text}</span>
    </a>
  );
};

export default SecondaryBtn;
