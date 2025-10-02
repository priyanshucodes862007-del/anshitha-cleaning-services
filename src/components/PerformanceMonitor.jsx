"use client";
import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and use requestIdleCallback for better performance
    if (process.env.NODE_ENV !== "production") return;

    const initMonitoring = () => {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          console.log(`${entry.name}: ${entry.value}`);

          // Send to analytics (replace with your analytics service)
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "web_vitals", {
              name: entry.name,
              value: Math.round(entry.value),
              event_category: "Web Vitals",
            });
          }
        }
      });

      // Observe Core Web Vitals
      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
      });

      // Monitor FCP manually
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === "first-contentful-paint") {
            console.log(`FCP: ${entry.startTime}`);
          }
        }
      });
      paintObserver.observe({ entryTypes: ["paint"] });

      return () => {
        observer.disconnect();
        paintObserver.disconnect();
      };
    };

    // Use requestIdleCallback for better performance
    if ("requestIdleCallback" in window) {
      requestIdleCallback(initMonitoring);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(initMonitoring, 0);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
