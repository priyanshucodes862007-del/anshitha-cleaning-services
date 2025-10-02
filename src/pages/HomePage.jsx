"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import LazyWrapper from "@/components/LazyWrapper";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const HomePage = () => {
  const heroContent = {
    title: "Best Cleaning Services in Hyderabad, India",
    description:
      "Experience the best and fastest cleaning services in all over Hyderabad. Book with a simple call and get your place clean with proper safety and accordingly. We offer best discounts and 100% customer satisfaction.",
  };

  return (
    <main
      role="main"
      className=""
      aria-label="Anshitha Cleaning Services Homepage"
    >
      {/* Mobile Hero Section - Priority for LCP */}
       
        <HeroSection {...heroContent} isMobile={true} />
      

      
        <HeroSection {...heroContent} isMobile={false} />
      

      {/* Spacer section to prevent content overlap - Desktop only */}
      <div className="hidden md:block pt-48 lg:pt-64" aria-hidden="true"></div>
    </main>
  );
};

export default HomePage;
