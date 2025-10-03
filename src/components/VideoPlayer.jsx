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

  priority = false, // For LCP optimization
}) => {
  const videoRef = useRef(null);

  return (
    <div
      className={`w-full ${aspectRatio} overflow-hidden rounded-brand-xl bg-[var(--color-video-surface)] shadow-2xl ${className}`}
      data-video-container={src}
    >
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
        <p>
          Your browser does not support the video tag.
          <a href={src} download>
            Download the video
          </a>{" "}
          instead.
        </p>
      </video>
    </div>
  );
};

export default VideoPlayer;
