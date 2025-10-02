"use client";
import React from "react";

const LoadingSkeleton = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="hero md:hidden relative min-h-screen h-full w-full flex flex-col items-center justify-center text-on-hero px-4 sm:px-6">
        <div className="flex flex-col items-center pt-40 justify-center text-center space-y-6">
          {/* Title skeleton */}
          <div className="w-full max-w-2xl">
            <div className="h-12 bg-skeleton-700 rounded-lg animate-pulse mb-4"></div>
            <div className="h-8 bg-skeleton-600 rounded-lg animate-pulse w-3/4 mx-auto"></div>
          </div>

          {/* Description skeleton */}
          <div className="w-full max-w-xl space-y-2">
            <div className="h-4 bg-skeleton-600 rounded animate-pulse"></div>
            <div className="h-4 bg-skeleton-600 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-skeleton-600 rounded animate-pulse w-4/6"></div>
          </div>

          {/* Buttons skeleton */}
          <div className="w-full max-w-sm space-y-4 mt-12">
            <div className="h-12 bg-skeleton-700 rounded-full animate-pulse"></div>
            <div className="h-12 bg-skeleton-600 rounded-full animate-pulse"></div>
          </div>

          {/* Reviews badge skeleton */}
          <div className="h-16 w-48 bg-skeleton-700 rounded-lg animate-pulse mt-4"></div>

          {/* Video skeleton */}
          <div className="w-full max-w-2xl aspect-video bg-skeleton-800 rounded-xl animate-pulse mt-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero hidden md:flex relative min-h-screen w-full flex-col items-center justify-start text-on-hero overflow-visible pb-48 lg:pb-64">
      <div className="container mx-auto px-6 lg:px-8 z-10 flex flex-col items-center justify-center pt-36 lg:pt-32 pb-16 md:pb-20">
        {/* Title skeleton */}
        <div className="w-full max-w-4xl text-center mb-6">
          <div className="h-16 bg-skeleton-700 rounded-lg animate-pulse mb-4"></div>
          <div className="h-12 bg-skeleton-600 rounded-lg animate-pulse w-2/3 mx-auto"></div>
        </div>

        {/* Reviews badge skeleton */}
        <div className="hidden lg:block absolute right-10 top-1/2 h-16 w-48 bg-skeleton-700 rounded-lg animate-pulse"></div>

        {/* Description skeleton */}
        <div className="w-full max-w-2xl text-center mb-10 md:mb-12 space-y-2">
          <div className="h-4 bg-skeleton-600 rounded animate-pulse"></div>
          <div className="h-4 bg-skeleton-600 rounded animate-pulse w-5/6 mx-auto"></div>
          <div className="h-4 bg-skeleton-600 rounded animate-pulse w-4/6 mx-auto"></div>
        </div>

        {/* Buttons skeleton */}
        <div className="flex gap-6 items-center justify-center">
          <div className="h-12 w-48 bg-skeleton-700 rounded-full animate-pulse"></div>
          <div className="h-12 w-40 bg-skeleton-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Video skeleton */}
      <div className="absolute bottom-0 left-0 right-0 w-full px-6 lg:px-8 z-20 transform translate-y-1/2">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-[16/7] bg-skeleton-800 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
