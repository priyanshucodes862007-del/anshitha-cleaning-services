import ChooseUs from "@/components/ChooseUs";
import PricingSection from "@/components/PricingSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/pages/AboutSection";
import HomePage from "@/pages/HomePage";
import React from "react";

const page = () => {
  return (
    <>
      <HomePage />
      <AboutSection />
      <ChooseUs />
      <ServiceSection />
      <PricingSection />
    </>
  );
};

export default page;
