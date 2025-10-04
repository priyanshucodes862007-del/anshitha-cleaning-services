import React from "react";
import { FaBriefcase, FaPlay } from "react-icons/fa";
import { GiBroom } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbCertificate, TbSettingsCheck } from "react-icons/tb";
import { IoIosCash } from "react-icons/io";
import BlurText from "./BlurText";
import FadeContent from "./FadeContent";

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
    <section
      className="w-full mt-6 py-0 md:py-16 bg-neutral-50"
      aria-labelledby="choose-us-heading"
    >
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-12 gap-10 mx-auto">
        {/* Left Side */}
        <article className="flex flex-col md:col-span-5 gap-10">
          <h2
            id="choose-us-heading"
            className="text-4xl md:text-4xl lg:text-6xl uppercase font-semibold oxygen leading-tight"
          >
             <BlurText
              text={heading}
              delay={300}
              animateBy="words"
              direction="bottom"
              
            />
          </h2>

          <div className="w-full relative  aspect-video bg-[var(--neutral-black)] rounded-xl overflow-hidden shadow-lg">
            <div className="bg-overlay-30 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 text-center">
              <button
                aria-label="Play introduction video"
                className="bg-overlay-60 rounded-full p-6 flex items-center justify-center border-2 border-[var(--neutral-white)] border-dashed cursor-pointer transition hover:scale-105"
              >
                <FaPlay className="text-5xl text-accent-warm" />
              </button>
              {/* <p className="text-on-hero font-bold roboto mt-3 text-lg">
                Click here to know more
              </p> */}
            </div>

            <FadeContent
          blur={true}
          duration={600}
          delay={800}
          easing="ease-out"
          initialOpacity={0}
        >
            <video
              src={videoSrc}
              poster={poster}
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
              aria-label="Introductory video about our cleaning services"
            />
            </FadeContent>
          </div>
        </article>

        {/* Right Side */}
        <article className=" h-fit mt-auto p-0 w-full md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuresList.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className=" border border-slate-600 w-full col-span-1 p-3 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <Icon
                className="text-[var(--color-hero-start)] p-2 rounded-full text-5xl mb-3"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--accent-warm-200) 50%, transparent)",
                }}
              />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{description}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ChooseUs;
