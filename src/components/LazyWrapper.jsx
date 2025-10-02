"use client";
import React, { useState, useRef, useEffect } from "react";

const LazyWrapper = ({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = "50px",
  className = "",
  priority = false, // Skip lazy loading for critical content
}) => {
  const [isVisible, setIsVisible] = useState(priority); // Load immediately if priority
  const [hasLoaded, setHasLoaded] = useState(priority);
  const elementRef = useRef(null);

  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority content

    // Use requestIdleCallback for better performance
    const scheduleObserver = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting && !hasLoaded) {
                setIsVisible(true);
                setHasLoaded(true);
                observer.disconnect();
              }
            },
            {
              threshold,
              rootMargin,
            }
          );

          if (elementRef.current) {
            observer.observe(elementRef.current);
          }
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting && !hasLoaded) {
                setIsVisible(true);
                setHasLoaded(true);
                observer.disconnect();
              }
            },
            {
              threshold,
              rootMargin,
            }
          );

          if (elementRef.current) {
            observer.observe(elementRef.current);
          }
        }, 0);
      }
    };

    scheduleObserver();
  }, [threshold, rootMargin, hasLoaded, priority]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyWrapper;
