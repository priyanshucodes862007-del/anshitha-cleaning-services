"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimartBtn from "./PrimartBtn";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/locations", label: "Available Locations" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed navbar-glass w-full top-0 z-50 backdrop-blur-md">
        <nav
          className="w-11/12 mx-auto flex items-center justify-between py-0 text-on-surface"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-highlight)] rounded-md"
            onClick={closeMenu}
          >
            <Image
              alt="Anshitha Cleaning Services Logo"
              src="/images/logo-light.png"
              width={125}
              height={40}
              priority
              className="h-auto w-auto"
            />
            <span className="sr-only">Anshitha Cleaning Services Home</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-10 text-base font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[var(--color-highlight)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-highlight)] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block ml-4">
            <Button icon={false} children="View Our Pricing" className="rounded-xl font-semibold px-4 py-4" />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-between gap-2 md:hidden ml-4">
            <PrimartBtn text="Pricing" className="rounded-xl" />
            <button
              onClick={toggleMenu}
              className="w-fit px-3 h-full py-3 my-auto bg-overlay-20 backdrop-blur-md rounded-brand hover:bg-overlay-30 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <RiMenu3Line size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              aria-hidden="true"
            />

            {/* Slide-in Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 max-h-screen h-full w-[85%] max-w-sm bg-surface/95 backdrop-blur-xl shadow-2xl z-[70] md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] rounded-md"
                >
                  <Image
                    alt="Anshitha Cleaning Services Logo"
                    src="/images/logo-light.png"
                    width={100}
                    height={32}
                    className="h-auto w-auto"
                  />
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-brand hover:bg-overlay-10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                  aria-label="Close menu"
                >
                  <RiCloseLine size={28} className="text-white" />
                </button>
              </div>

              {/* Menu Content */}
              <nav className="flex flex-col h-[calc(90%-80px)]">
                {/* Navigation Links */}
                <ul className="flex-1 px-6 py-8 space-y-2">
                  {navLinks.map(({ href, label }, index) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-lg font-medium text-on-surface hover:text-[var(--color-highlight)] hover:bg-overlay-10 rounded-brand transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                      >
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 border-t border-white/10"
                >
                  <PrimartBtn
                    text="View Our Pricing"
                    className="w-full rounded-brand"
                  />
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
