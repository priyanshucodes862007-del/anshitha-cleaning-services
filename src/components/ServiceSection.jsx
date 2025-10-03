import React from "react";
import BlurText from "./BlurText";
import Button from "./Button";
import ServiceStack from "./ServiceStack";

const ServiceSection = () => {
  return (
    <div className="w-full mt-32 md:mt-20">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5">
        {/* first column - will be pinned by ServiceStack */}
        <div className="w-full md:col-span-2 flex flex-col gap-20 items-start justify-center h-fit md:sticky md:top-40">
          <BlurText
            text="We Provide Complete Cleaning Services"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-4xl md:text-6xl oxygen font-bold"
          />
          <Button
            children="Book Appointment"
            lightColor="bg-gradient-accent-warm"
            darkColor="bg-secondary"
            borderColor="border-transparent"
            icon={false}
            className="inline-block w-fit text-[var(--neutral-black)] font-semibold text-base md:text-lg py-3 md:py-5 px-8 md:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--support-cyan-300)] focus:ring-offset-2"
          />
          <h1 className="hidden md:block mt-36 pb-12 text-9xl roboto font-extrabold opacity-20" >SERVICES</h1>
        </div>
        {/* second column - stacking cards */}
        <div className="w-full -mt-32 md:mt-0 md:col-span-3 ">
          <ServiceStack />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
