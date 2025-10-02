"use client";
import React from "react";

const PrimartBtn = ({
  text = "Book now",
  href = "#",
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  type = "button",
}) => {
  const baseClasses =
    "oxygen border-2 border-transparent hover:border-[var(--color-background)] transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[var(--color-background)] bg-[var(--color-background)] text-[var(--color-text-primary)] font-bold px-6 py-3 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0";

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const buttonProps = {
    className: `${baseClasses} ${className}`,
    onClick: handleClick,
    disabled,
    "aria-label": ariaLabel || text,
    "aria-disabled": disabled,
    role: href === "#" ? "button" : undefined,
    tabIndex: disabled ? -1 : 0,
  };

  if (href && href !== "#") {
    return (
      <a
        {...buttonProps}
        href={href}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button {...buttonProps} type={type}>
      {text}
    </button>
  );
};

export default PrimartBtn;
