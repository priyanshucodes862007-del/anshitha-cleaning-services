"use client";
import React from "react";
import Button from "./Button";
import Stepper, { Step } from "./Stepper";

const PricingSection = () => {
  return (
    <section className="w-full min-h-screen py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column - Pricing Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold oxygen uppercase leading-tight">
                Great Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Great Pricing
                </span>
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-6 ">
              <p className="text-base sm:text-lg leading-tight text-gray-700 leading-relaxed roboto">
                Experience premium cleaning services right at your doorstep—without paying premium prices. We believe a clean space shouldn't come with a hefty bill.
              </p>
              
              <p className="text-base sm:text-lg leading-tight text-gray-700 leading-relaxed roboto">
                That's why we tailor our pricing to your space and your needs—so you only pay for what truly matters. With <span className="font-semibold text-gray-900">100% satisfaction guaranteed</span> and transparent pricing trusted across Hyderabad, you'll know exactly what you're getting.
              </p>
              
              <p className="text-base sm:text-lg leading-tight text-gray-700 leading-relaxed roboto">
                Get spotless results, peace of mind, and unbeatable value. Let's talk today and make your home or workspace cleaner, safer, and fresher than ever—at a price you'll feel good about.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="dark"
                className="text-base sm:text-lg font-medium px-8 py-3.5 sm:px-10 sm:py-4 transition-transform hover:scale-105"
              >
                Discuss Pricing
              </Button>
            </div>
          </div>

          {/* Right Column - How It Works */}
          <div className="flex flex-col">
            <div className="my-auto flex flex-col gap-12">
              {/* Section Heading */}
              <h2 className="text-3xl sm:text-4xl font-medium oxygen text-center mb-8 lg:mb-12">
                How It Works?
              </h2>

              {/* Stepper Component */}
              <div className="mt-4">
                <Stepper
                  initialStep={1}
                  onStepChange={(step) => console.log("Current step:", step)}
                  onFinalStepCompleted={() => console.log("All steps completed!")}
                  backButtonText="Previous"
                  nextButtonText="Next"
                >
                  <Step>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        Welcome to Anshitha Cleaning Service
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Visit our website, explore our work gallery, and click "Book Now" or give us a call directly to get started.
                      </p>
                    </div>
                  </Step>
                  
                  <Step>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        Response & Discussion
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        You'll receive an answer or callback ASAP. We'll listen carefully to your needs and requirements to provide you with top-notch service.
                      </p>
                    </div>
                  </Step>
                  
                  <Step>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        Booking & Cleaning
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        After a successful booking, our professional cleaners will transform your space within 24 hours.
                      </p>
                    </div>
                  </Step>
                  
                  <Step>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        Payment & Review
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Payments are flexible—choose to pay after service or prepaid. Your satisfaction is our priority.
                      </p>
                    </div>
                  </Step>
                  
                  <Step>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        All Set!
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        We continuously monitor our services to enhance your experience. Feel free to share your feedback and help us improve.
                      </p>
                    </div>
                  </Step>
                </Stepper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;