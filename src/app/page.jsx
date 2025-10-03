import ChooseUs from "@/components/ChooseUs";
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
      <div className="bg-black min-h-screen">hy</div>
    </>
  );
};

export default page;
