import PrimartBtn from "@/components/PrimartBtn";
import ReviewsBadge from "@/components/ReviewsBadge";
import SecondaryBtn from "@/components/SecondaryBtn";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      {/* Mobile Layout - Centered in viewport */}
      <section className="md:hidden relative min-h-screen h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 sm:px-6">
        
        {/* Hero Content */}
        <div className="flex flex-col items-center pt-28 justify-center text-center space-y-6">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-2xl oxygen">
            Best Cleaning Services in Hyderabad, India
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed max-w-xl text-gray-200">
            Experience the best and fastest cleaning services in all over <strong>Hyderabad</strong>. 
            Book with a simple call and get your place clean with proper safety and accordingly.
            We offer best discounts and 100% customer satisfaction.
          </p>
          
          {/* CTA Buttons */}
          <nav className="flex flex-col gap-4 items-center justify-center w-full max-w-sm" aria-label="Main actions">
            <PrimartBtn text="Book A Cleaning Now" />
            <SecondaryBtn href="tel:918057607415" text="91 8057607415" />
          </nav>
          
          <div className=" lg:hidden block mt-4" >
            <ReviewsBadge />
          </div>
          {/* Video Section - Full inside on mobile */}
          <div className="w-full max-w-2xl overflow-hidden rounded-xl bg-black shadow-2xl aspect-video mt-2">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              aria-label="Cleaning services demonstration video"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Desktop Layout - Video half in/out */}
      <section className="hidden md:flex relative min-h-screen w-full flex-col items-center justify-start bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-visible pb-48 lg:pb-64">
        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-8 z-10 flex flex-col items-center justify-center pt-36 lg:pt-44 pb-16 md:pb-20">
          
          {/* Heading */}
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-4xl oxygen">
            Best Cleaning Services <br /> 
            in Hyderabad, India
          </h1>

          <div className=" hidden lg:block absolute right-10 translate-y-30" >
            <ReviewsBadge />
          </div>
          
          {/* Description */}
          <p className="text-center text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl text-gray-200">
            Experience the <strong> best and fastest cleaning services</strong> in all over <strong>Hyderabad</strong>. 
            Book with a simple call and get your place clean with proper safety and accordingly.
            We offer best discounts and 100% customer satisfaction.
          </p>
          
          {/* CTA Buttons */}
          <nav className="flex gap-6 items-center justify-center" aria-label="Main actions">
            <PrimartBtn text="Book A Cleaning Now" />
            <SecondaryBtn href="tel:918057607415" text="91 8057607415" />
          </nav>
        </div>
        
        {/* Video Section - Half inside, half outside */}
        <div className="absolute bottom-0 left-0 right-0 w-full px-6 lg:px-8 z-20 transform translate-y-1/2">
          <div className="container mx-auto max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl aspect-[16/7]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              aria-label="Cleaning services demonstration video"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      
      {/* Spacer section to prevent content overlap - Desktop only */}
      <div className="hidden md:block pt-48 lg:pt-64"></div>
    </>
  );
};

export default HomePage;