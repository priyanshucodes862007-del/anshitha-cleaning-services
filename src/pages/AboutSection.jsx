"use client"
import Image from 'next/image'
import React from 'react'
import { Check } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className='mt-20 md:mt-40 pb-20' aria-labelledby="about-heading">
      <div className="w-11/12 max-w-full mx-auto rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        {/* Enhanced decorative circles with animation */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute top-40 left-40 w-24 h-24 bg-blue-300 rounded-full opacity-25 blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-500 rounded-full opacity-15 blur-lg"></div>
        <div className="absolute top-20 right-48 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-blue-300 rounded-full opacity-25 blur-xl animate-pulse"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          {/* Left side - Enhanced Image Section */}
          <div className="flex-1 w-full flex justify-center items-center">
            <figure className="relative w-full max-w-md lg:max-w-lg">
              {/* Animated morphing blob background */}
              <div className="absolute inset-0 -m-8 animate-blob" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.98) 100%)',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'morphing 8s ease-in-out infinite',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}></div>
              
              {/* Secondary blob layer for depth */}
              <div className="absolute inset-0 -m-4" style={{
                background: 'linear-gradient(225deg, rgba(255,255,255,0.6) 0%, rgba(224,242,254,0.7) 100%)',
                borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
                animation: 'morphing 10s ease-in-out infinite reverse',
                filter: 'blur(8px)'
              }}></div>
              
              <div className="relative z-10 p-8 lg:p-12">
                <Image 
                  width={700} 
                  height={700} 
                  alt='Professional cleaning service representative with cleaning supplies and equipment' 
                  src='/images/vector-sofa.png'
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
                
                {/* Decorative cleaning sponge element */}
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 z-20">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-2xl transform rotate-12 flex items-center justify-center shadow-2xl">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-yellow-500 rounded-xl transform -rotate-6"></div>
                  </div>
                </div>
                
                {/* Decorative spray bottle element */}
                {/* <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 z-20">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
                  </div>
                </div> */}
              </div>

              {/* CSS animation for morphing effect */}
              <style jsx>{`
                @keyframes morphing {
                  0%, 100% {
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                  }
                  25% {
                    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                  }
                  50% {
                    border-radius: 50% 50% 30% 70% / 30% 30% 70% 70%;
                  }
                  75% {
                    border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%;
                  }
                }
                
                @keyframes blob {
                  0%, 100% {
                    transform: scale(1) rotate(0deg);
                  }
                  33% {
                    transform: scale(1.05) rotate(5deg);
                  }
                  66% {
                    transform: scale(0.95) rotate(-5deg);
                  }
                }
              `}</style>
            </figure>
          </div>

          {/* Right side - Content with enhanced accessibility */}
          <article className="flex-1 w-full max-w-2xl">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl">
              <header className="mb-6">
                <h2 id="about-heading" className="text-2xl oxygen md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Few Words About Anshitha Cleaning Services
                </h2>
                
                {/* <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Founded in 2019, Super Cleaners is a professional and certified cleaning 
                  company dedicated to making your home and office cleaner, fresher, 
                  more comfortable, and more beautiful. Our team of diligent and 
                  respectful professionals works to ensure your home shines like new.
                </p> */}
              </header>

              <ul className="space-y-4 font-medium roboto mb-8" role="list" aria-label="Service features">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base md:text-lg text-gray-800 font-medium">Coverage of 90% of UK cities and towns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base md:text-lg text-gray-800 font-medium">6 types of cleaning services available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base md:text-lg text-gray-800 font-medium">Over 120 professional cleaners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base md:text-lg text-gray-800 font-medium">7 days a week service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base md:text-lg text-gray-800 font-medium">UK based office for support</span>
                </li>
              </ul>

              <a 
                href="#services" 
                className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold text-base md:text-lg py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-offset-2"
                aria-label="View all our cleaning services"
              >
                View Services
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection