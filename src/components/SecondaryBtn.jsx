"use client";
import React from "react";

const SecondaryBtn = ({
  text = "Book now",
  href,
  icon,
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  type = "button",
}) => {
  const baseClasses =
    "oxygen border-2 hover:border-transparent border-[var(--color-background)] transition-all duration-300 hover:-translate-y-1 bg-transparent text-[var(--color-background)] hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)] font-bold px-6 py-3 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0";

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
        {icon && (
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button {...buttonProps} type={type}>
      {icon && (
        <span className="mr-2" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};

export default SecondaryBtn;
