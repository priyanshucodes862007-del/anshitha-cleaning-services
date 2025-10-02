"use client";
import React, { useState, useRef, useEffect } from "react";

const VideoPlayer = ({
  src = "/videos/hero-video.mp4",
  alt = "Cleaning services demonstration video",
  className = "",
  aspectRatio = "aspect-video",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  onLoadStart,
  onCanPlay,
  onError,
  priority = false, // For LCP optimization
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority); // Only load immediately if priority
  const videoRef = useRef(null);

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }

    // Use requestIdleCallback for better performance
    const scheduleObserver = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setShouldLoad(true);
                observer.disconnect();
              }
            },
            { threshold: 0.1, rootMargin: "50px" }
          );

          // Wait for the container to be rendered
          const checkForContainer = () => {
            const container = document.querySelector(
              `[data-video-container="${src}"]`
            );
            if (container) {
              observer.observe(container);
            } else {
              // Retry after a short delay if container not found
              setTimeout(checkForContainer, 100);
            }
          };

          checkForContainer();
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setShouldLoad(true);
                observer.disconnect();
              }
            },
            { threshold: 0.1, rootMargin: "50px" }
          );

          // Wait for the container to be rendered
          const checkForContainer = () => {
            const container = document.querySelector(
              `[data-video-container="${src}"]`
            );
            if (container) {
              observer.observe(container);
            } else {
              // Retry after a short delay if container not found
              setTimeout(checkForContainer, 100);
            }
          };

          checkForContainer();
        }, 0);
      }
    };

    scheduleObserver();
  }, [src, priority]);

  useEffect(() => {
    if (!shouldLoad) return;

    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      setIsLoading(true);
      onLoadStart?.();
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      onCanPlay?.();
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      onError?.();
    };

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [shouldLoad, onLoadStart, onCanPlay, onError]);

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-gray-800 flex items-center justify-center rounded-xl ${className}`}
        role="img"
        aria-label="Video failed to load"
      >
        <div className="text-center text-white p-4">
          <p className="text-sm">Video unavailable</p>
          <p className="text-xs text-gray-400 mt-1">
            Your browser does not support this video format
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full ${aspectRatio} overflow-hidden rounded-xl bg-black shadow-2xl ${className}`}
      data-video-container={src}
    >
      {!shouldLoad && (
        <div
          className="w-full h-full bg-gray-800 flex items-center justify-center"
          role="img"
          aria-label="Video placeholder"
        >
          <div className="text-center text-white p-4">
            <div className="animate-pulse bg-gray-600 rounded-lg h-8 w-8 mx-auto mb-2"></div>
            <p className="text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {shouldLoad && isLoading && (
        <div
          className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10"
          role="status"
          aria-label="Loading video"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
        </div>
      )}

      {shouldLoad && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          className="w-full h-full object-cover"
          aria-label={alt}
          preload={priority ? "auto" : "metadata"}
          poster="/images/video-poster.svg"
        >
          <source src={src} type="video/mp4" />
          <track
            kind="captions"
            src="/videos/captions.vtt"
            srcLang="en"
            label="English captions"
            default
          />
          <p>
            Your browser does not support the video tag.
            <a href={src} download>
              Download the video
            </a>{" "}
            instead.
          </p>
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
