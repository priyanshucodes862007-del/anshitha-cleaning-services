"use client";

import React, { useEffect, useRef } from "react";

const svgPaths = {
  "type-1": {
    path: "M0.928955 40.9769C0.928955 18.9149 18.7917 1.01844 40.8536 0.976903H419.983C442.08 0.976903 459.992 18.889 459.982 40.9869V428.637C459.977 443.475 447.998 455.527 433.16 455.625L397.56 455.858C358.202 456.116 326.135 487.53 325.066 526.874L324.202 558.69C323.701 577.126 308.593 591.801 290.15 591.767L40.9289 591C18.8376 591 0.928955 573.091 0.928955 551V40.9769Z",
    height: 591,
    width: 460,
  },
  "type-2": {
    path: "M0.928955 40.9769C0.928955 18.9149 18.7917 1.01844 40.8536 0.976903H419.983C442.08 0.976903 459.992 18.889 459.982 40.9869V450C459.977 465 448 478 433 478H390C365 478 346 502 345 532L344.5 552C344.2 558 338 561 330 561H40.9289C18.8376 561 0.928955 543.091 0.928955 521V40.9769Z",
    height: 591,
    width: 460,
  },
  "type-3": {
    path: "M0.811768 76.9148C0.811768 34.8184 34.9377 0.692566 77.0341 0.692566L238.314 0.692566C265.199 0.692566 291.315 9.66257 312.525 26.1818L330.454 40.145C351.665 56.6641 377.781 65.6342 404.666 65.6342H436.959H474.046C502.946 65.6342 530.612 53.9184 550.723 33.1634V33.1634C570.834 12.4083 598.5 0.692566 627.4 0.692566H774.565C816.661 0.692566 850.787 34.8185 850.787 76.9149V412.695C850.787 454.791 816.661 488.917 774.565 488.917H425.799H213.306H177.573C138.629 488.917 107.059 457.347 107.059 418.403V400.373C107.059 370.822 83.1034 346.867 53.553 346.867V346.867C24.4248 346.867 0.811768 323.254 0.811768 294.126V244.805V76.9148Z",
    height: 489,
    width: 850,
  },
  "type-4": {
    path: "M0.811768 34.5451C0.811768 15.7441 16.053 0.502808 34.8541 0.502808H816.745C835.546 0.502808 850.787 15.7441 850.787 34.5452V242.977C850.787 261.778 835.546 277.019 816.745 277.019H638.293H550.537C527.035 277.019 504.789 266.407 490.001 248.141L486.211 243.46C453.263 202.765 390.688 204.378 359.881 246.717V246.717C346.027 265.756 323.901 277.019 300.355 277.019H213.306H34.8541C16.0531 277.019 0.811768 261.778 0.811768 242.977V34.5451Z",
    height: 278,
    width: 851,
  },
};

const MaskedDiv = ({
  children,
  maskType = "type-1",
  className = "",
  backgroundColor = "transparent",
  size = 1,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      if (document.hidden) {
        videoElement.pause();
      } else {
        // Only play if the video should be playing
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented, handle this case silently
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Intersection Observer for viewport visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target;
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Handle auto-play prevention silently
              });
            }
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.1, // Start playing when 10% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const selectedMask = svgPaths[maskType];

  const svgString = `data:image/svg+xml,%3Csvg width='${selectedMask.width}' height='${selectedMask.height}' viewBox='0 0 ${selectedMask.width} ${selectedMask.height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${selectedMask.path}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  const containerStyle = {
    aspectRatio: `${selectedMask.width}/${selectedMask.height}`,
    backgroundColor,
    maskImage: `url("${svgString}")`,
    WebkitMaskImage: `url("${svgString}")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    width: `${size * 100}%`,
    maxWidth: "100%",
    margin: "0 auto",
  };

  return (
    <section className={`relative ${className}`} style={containerStyle}>
      {React.cloneElement(children, {
        className: `w-full h-full object-cover  transition-all duration-300 ${
          children.props.className || ""
        }`,
      })}
    </section>
  );
};

export default MaskedDiv;
