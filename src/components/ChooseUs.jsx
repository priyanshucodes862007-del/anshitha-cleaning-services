"use client";
import React from "react";
import { FaBriefcase, FaPlay } from "react-icons/fa";
import { GiBroom } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbCertificate, TbSettingsCheck } from "react-icons/tb";
import { IoIosCash } from "react-icons/io";

// Data-driven approach: easy to update and reusable
const features = [
  {
    icon: GiBroom,
    title: "Professional Cleaners",
    description: "Trained staff with attention to detail.",
  },
  {
    icon: FaBriefcase,
    title: "Years of Experience",
    description: "Trusted expertise in home & office cleaning.",
  },
  {
    icon: AiFillSafetyCertificate,
    title: "Trusted & Reliable",
    description: "Safe, secure, and quality services.",
  },
  {
    icon: TbSettingsCheck,
    title: "Professional Machinery",
    description: "Modern tools for deep and efficient cleaning.",
  },
  {
    icon: IoIosCash,
    title: "Genuine Prices",
    description: "Transparent and competitive rates.",
  },
  {
    icon: TbCertificate,
    title: "Certified Services",
    description: "Certified and insured cleaning solutions.",
  },
];

const ChooseUs = ({
  heading = "Here's Why to Choose Us",
  videoSrc = "/videos/hero-video.mp4",
  poster = "https://cdn.prod.website-files.com/5fd1f810f64b2873ff6f19bd/60dc9e03195115f1d77a6d21_Gleem%20Professional%20Office%20Cleaners.jpg",
  featuresList = features,
}) => {
  return (
    <section className="w-full py-0 md:py-16 bg-gray-50" aria-labelledby="choose-us-heading">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        {/* Left Side */}
        <article className="flex flex-col gap-10">
          <h2
            id="choose-us-heading"
            className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold oxygen leading-snug"
          >
            {heading}
          </h2>

          <div className="w-full relative h-full bg-black rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-black/30 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 text-center">
              <button
                aria-label="Play introduction video"
                className="bg-black/60 rounded-full p-6 flex items-center justify-center border-2 border-white border-dashed cursor-pointer transition hover:scale-105"
              >
                <FaPlay className="text-5xl text-amber-500" />
              </button>
              <p className="text-white font-bold roboto mt-3 text-lg">
                Click here to know more
              </p>
            </div>

            <video
              src={videoSrc}
              poster={poster}
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
              aria-label="Introductory video about our cleaning services"
            />
          </div>
        </article>

        {/* Right Side */}
        <article className="flex h-fit mt-auto flex-wrap items-center justify-center gap-8">
          {featuresList.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md w-64 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <Icon className="text-amber-600 bg-amber-200/50 p-4 rounded-full text-6xl mb-3" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ChooseUs;
