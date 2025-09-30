"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImagesPeek = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Sample images - replace with your actual image URLs
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      alt: "Mountain landscape",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
      alt: "Forest trail",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      alt: "Nature path",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
      alt: "Sunset lake",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop",
      alt: "Mountain peak",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop",
      alt: "Desert landscape",
    },
  ];

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Determine if image should be on left or right
  const isLeftSide = (index) => index % 2 === 0;

  return (
    <div className="min-h-fit bg-transparent p-0 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="grid grid-cols-2 auto-rows-auto gap-0">
          {images.map((image, index) => {
            const isLeft = isLeftSide(index);

            return (
              <React.Fragment key={image.id}>
                {isLeft ? (
                  <>
                    {/* Image in left column */}
                    <motion.div
                      className="col-start-1 justify-self-end relative"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {/* Connecting line to the right */}

                      <motion.div
                        className="relative cursor-pointer border-l-3 border-t-3 border-b-3 border-amber-500 rounded-bl-xl rounded-tl-xl"
                        
                        
                      >
                        <div className="w-24 h-24 md:w-24 md:h-24 p-2 rounded-xl overflow-hidden shadow-xl bg-transparent">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full rounded-xl h-full object-cover"
                          />
                        </div>

                        {hoveredImage?.id === image.id && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                              boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)",
                            }}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                    {/* Empty cell in right column */}
                    <div className="col-start-2"></div>
                  </>
                ) : (
                  <>
                    {/* Empty cell in left column */}
                    <div className="col-start-1"></div>
                    {/* Image in right column */}
                    <motion.div
                      className="col-start-2 justify-self-start relative"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {/* Connecting line to the left */}

                      <motion.div
                        className="relative cursor-pointer border-r-3 border-t-3 border-b-3 border-amber-500 rounded-br-xl rounded-tr-xl"
                      
                      >
                        <div className="w-24 h-24 md:w-24 md:h-24 p-2  rounded-xl overflow-hidden shadow-xl bg-transparent">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full rounded-xl h-full object-cover"
                          />
                        </div>

                        {hoveredImage?.id === image.id && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                              boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)",
                            }}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Large preview tooltip */}
        {/* <AnimatePresence>
          {hoveredImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="fixed pointer-events-none z-[99]"
              style={{
                left: `${mousePosition.x + 20}px`,
                top: `${mousePosition.y - 150}px`,
              }}
            >
              <div className="bg-transparent rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-400">
                <img
                  src={hoveredImage.url}
                  alt={hoveredImage.alt}
                  className="w-64 h-64 object-cover"
                />
                <div className="p-3 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm">
                  <p className="text-white text-sm font-medium">
                    {hoveredImage.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </div>
  );
};

export default ImagesPeek;
