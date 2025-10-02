import React, { Suspense, lazy, useEffect, useState } from "react";
import CTAButtons from "./CTAButtons";
import VideoPlayer from "./VideoPlayer";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import FadeContent from "./FadeContent";
import AnimatedContent from "./AnimatedContent";
import LoadingSkeleton from "./LoadingSkeleton";

// Lazy load ReviewsBadge to reduce initial bundle size
const ReviewsBadge = lazy(() => import("./ReviewsBadge"));

const HeroSection = ({
  title = "Make Your Home Shine Again – Hassle-Free Cleaning in Hyderabad",
  description = "Experience the best and fastest cleaning services in all over Hyderabad. Book with a simple call and get your place clean with proper safety and accordingly. We offer best discounts and 100% customer satisfaction.",
  isMobile = false,
  className = "",
}) => {
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Prevent FOUC: delay revealing content until next frame so initial styles apply
    const id = requestAnimationFrame(() => {
      const timeout = setTimeout(() => setShowContent(true), 60);
      return () => clearTimeout(timeout);
    });
    return () => cancelAnimationFrame(id);
  }, []);
  const titleParts = title.split(" in ");
  const locationText = titleParts[1] || "";
  const mainTitle = titleParts[0] || title;

  // Fullscreen loader overlay while not ready
  const LoaderOverlay = !showContent && (
    <div className="fixed inset-0 z-[100] bg-[var(--color-hero-bg,_#0b0c0e)] flex items-center justify-center">
      <LoadingSkeleton isMobile={isMobile} />
    </div>
  );

  if (isMobile) {
    return (
      <>
        {LoaderOverlay}
        <section
          className={`hero md:hidden relative min-h-screen h-full w-full flex flex-col items-center justify-center text-on-hero px-4 sm:px-6 pb-space-12 ${className}`}
          role="banner"
          aria-labelledby="hero-title"
          aria-hidden={!showContent}
          style={{ visibility: showContent ? "visible" : "hidden" }}
        >
          <div className="flex flex-col items-center pt-40 justify-center text-center space-y-6">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl font-semibold leading-tight max-w-2xl oxygen"
            >
              <BlurText
                text={title}
                delay={70}
                animateBy="words"
                direction="top"
                className="flex items-center justify-center text-center "
              />
            </h1>

            <SplitText
              text={description}
              className="text-sm sm:text-base leading-relaxed max-w-xl text-on-hero/80"
              delay={60}
              duration={0.7}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <FadeContent
              blur={true}
              duration={800}
              delay={500}
              easing="ease-out"
              initialOpacity={0}
              className="lg:hidden w-full mt-4"
            >
              <CTAButtons isMobile={true} className="mt-12" />
            </FadeContent>

            <FadeContent
              blur={true}
              duration={800}
              delay={800}
              easing="ease-out"
              initialOpacity={0}
              className="lg:hidden block mt-4"
            >
              {/* Anything placed inside this container will be fade into view */}
              <div className="lg:hidden block mt-4">
                <ReviewsBadge />
              </div>
            </FadeContent>

            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.15}
            >
              <div className="w-full max-w-2xl mt-16">
                <VideoPlayer
                  aspectRatio="aspect-video"
                  className="shadow-2xl"
                  priority={true}
                />
              </div>
            </AnimatedContent>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {LoaderOverlay}
      <section
        className={`hero hidden md:flex relative min-h-screen w-full flex-col items-center justify-start text-on-hero overflow-visible pb-space-48 lg:pb-space-64 ${className}`}
        role="banner"
        aria-labelledby="hero-title-desktop"
        aria-hidden={!showContent}
        style={{ visibility: showContent ? "visible" : "hidden" }}
      >
        <div className="container mx-auto px-6 lg:px-8 z-10 flex flex-col items-center justify-center pt-36 lg:pt-44 pb-16 md:pb-20">
          <h1
            id="hero-title-desktop"
            className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-5xl oxygen"
          >
            <BlurText
              text={title}
              delay={70}
              animateBy="words"
              direction="top"
              className="flex items-center justify-center text-center "
            />
          </h1>

          <div className="hidden lg:block absolute right-10 top-1/2">
            <FadeContent
              blur={true}
              duration={700}
              delay={700}
              easing="ease-out"
              initialOpacity={0}
            >
              <ReviewsBadge />
            </FadeContent>
          </div>

          <SplitText
            text={description}
            className="text-center font-semibold text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl text-on-hero/80"
            delay={60}
            duration={0.7}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <FadeContent
            blur={true}
            duration={700}
            delay={500}
            easing="ease-out"
            initialOpacity={0}
            className="w-full mx-auto flex justify-center items-center"
          >
            <CTAButtons isMobile={false} className="gap-6 mt-6" />
          </FadeContent>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full px-6 lg:px-8 z-20 transform translate-y-1/2">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.15}
          >
            <div className="container mx-auto max-w-6xl">
              <VideoPlayer
                aspectRatio="aspect-[16/7]"
                className="shadow-2xl"
                priority={true}
              />
            </div>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
