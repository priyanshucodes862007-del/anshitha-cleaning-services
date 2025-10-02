import React, { Suspense, lazy } from "react";
import CTAButtons from "./CTAButtons";
import VideoPlayer from "./VideoPlayer";
import ImagesPeek from "./ImagesPeek";

// Lazy load ReviewsBadge to reduce initial bundle size
const ReviewsBadge = lazy(() => import("./ReviewsBadge"));

const HeroSection = ({
  title = "Make Your Home Shine Again – Hassle-Free Cleaning in Hyderabad",
  description = "Experience the best and fastest cleaning services in all over Hyderabad. Book with a simple call and get your place clean with proper safety and accordingly. We offer best discounts and 100% customer satisfaction.",
  isMobile = false,
  className = "",
}) => {
  const titleParts = title.split(" in ");
  const locationText = titleParts[1] || "";
  const mainTitle = titleParts[0] || title;

  if (isMobile) {
    return (
      <section
        className={`hero md:hidden relative min-h-screen h-full w-full flex flex-col items-center justify-center text-white px-4 sm:px-6 pb-12 ${className}`}
        role="banner"
        aria-labelledby="hero-title"
      >
        <div className="flex flex-col items-center pt-40 justify-center text-center space-y-6">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl font-semibold leading-tight max-w-2xl oxygen"
          >
            {mainTitle}{" "}
            <span className="text-amber-500">in {locationText}</span>
          </h1>

          <p className="text-sm sm:text-base leading-relaxed max-w-xl text-gray-200">
            {description}
          </p>

          <CTAButtons isMobile={true} className="mt-12" />

          <div className="lg:hidden block mt-4">
            <Suspense
              fallback={
                <div className="animate-pulse bg-gray-700 rounded-lg h-16 w-48"></div>
              }
            >
              <ReviewsBadge />
            </Suspense>
          </div>

          <div className="w-full max-w-2xl mt-16">
            <VideoPlayer
              aspectRatio="aspect-video"
              className="shadow-2xl"
              priority={true}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`hero hidden md:flex relative min-h-screen w-full flex-col items-center justify-start text-white overflow-visible pb-48 lg:pb-64 ${className}`}
      role="banner"
      aria-labelledby="hero-title-desktop"
    >
      <div className="container mx-auto px-6 lg:px-8 z-10 flex flex-col items-center justify-center pt-36 lg:pt-32 pb-16 md:pb-20">
        <h1
          id="hero-title-desktop"
          className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-5xl oxygen"
        >
           A Cleaner Home, A Happier You – Trusted by 1000+ Families in <span className="text-amber-500">Hyderabad</span>
        </h1>

        <div className="hidden lg:block absolute right-10 top-1/2">
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-700 rounded-lg h-16 w-48"></div>
            }
          >
            <ReviewsBadge />
          </Suspense>
        </div>
        <div className="hidden lg:block absolute left-10 -translate-y-1/2 top-1/2">
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-700 rounded-lg h-16 w-48"></div>
            }
          >
            <ImagesPeek />
          </Suspense>
        </div>

        <p className="text-center font-semibold text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl text-gray-200">
          {description}
        </p>

        <CTAButtons isMobile={false} className="gap-6 mt-6" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full px-6 lg:px-8 z-20 transform translate-y-1/2">
        <div className="container mx-auto max-w-6xl">
          <VideoPlayer
            aspectRatio="aspect-[16/7]"
            className="shadow-2xl"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
