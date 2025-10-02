import React from "react";
import { FaBriefcase, FaCashRegister, FaPlay } from "react-icons/fa";
import { GiBroom, GiMagicBroom } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbCertificate, TbSettingsCheck } from "react-icons/tb";
import { IoIosCash } from "react-icons/io";


const ChooseUs = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        <div className="w-full flex flex-col gap-10">
          <h1 className="text-8xl uppercase font-bold oxygen">
            Here's Why to <br /> Choose Us
          </h1>
          <div className="w-full relative h-full bg-black rounded-2xl overflow-hidden">
            <div className="bg-black/20 z-20 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center" >
            <div className="bg-black/50 rounded-full p-8 flex items-center justify-center border-2 border-white border-dashed cursor-pointer " >

                <FaPlay className="text-6xl text-amber-500 " />
            </div>
            <p className="text-white font-bold roboto mt-2 text-xl" >Click here to know</p>
            </div>
            <video
             
              
              src="/videos/hero-video.mp4"
              poster="https://cdn.prod.website-files.com/5fd1f810f64b2873ff6f19bd/60dc9e03195115f1d77a6d21_Gleem%20Professional%20Office%20Cleaners.jpg"
            ></video>
          </div>
        </div>
        <div className="w-full my-auto flex items-center justify-center gap-16 flex-wrap">
          <div className="bg-white p-6 rounded-2xl gap-6 shadow-md w-fit flex flex-col items-center justify-center" >
          <GiBroom   className="text-amber-600 bg-amber-300/40 p-4 rounded-full box-border text-8xl" />
          <h2 className="text-xl font-semibold">Proffesional cleaners</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl gap-6 shadow-md w-fit flex flex-col items-center justify-center" >
          <FaBriefcase className="text-amber-600 bg-amber-300/40 p-4 rounded-full box-border text-8xl" />
          <h2 className="text-xl font-semibold">Years of Experience</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl gap-6 shadow-md w-fit flex flex-col items-center justify-center" >
          <AiFillSafetyCertificate  className="text-amber-600 bg-amber-300/40 p-4 rounded-full box-border text-8xl" />
          <h2 className="text-xl font-semibold">Trusted and Reliable</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl gap-6 shadow-md w-fit flex flex-col items-center justify-center" >
          <TbSettingsCheck  className="text-amber-600 bg-amber-300/40 p-4 rounded-full box-border text-8xl" />
          <h2 className="text-xl font-semibold">Proffesional Machinery</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl gap-6 shadow-md w-fit flex flex-col items-center justify-center" >
          <IoIosCash className="text-amber-600 bg-amber-300/40 p-4 rounded-full box-border text-8xl" />
          <h2 className="text-xl font-semibold">Genuine Prices</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl gap-6 shadow-md w-fit flex flex-col items-center justify-center" >
          <TbCertificate className="text-amber-600 bg-amber-300/40 p-4 rounded-full box-border text-8xl" />
          <h2 className="text-xl font-semibold">Genuine Prices</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
