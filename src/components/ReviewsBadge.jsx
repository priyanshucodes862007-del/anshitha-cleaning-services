"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Exceptional service! My home has never looked better. The team was professional and thorough.",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "Outstanding cleaning quality. They pay attention to every detail. Highly recommend!",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    text: "Very satisfied with the service. Punctual, efficient, and friendly staff. Will book again!",
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    text: "Best cleaning service I've used! They transformed my office space completely.",
    avatar: "DT",
  },
  {
    id: 5,
    name: "Lisa Patel",
    rating: 5,
    text: "Consistently great service. The team is reliable and does an amazing job every time.",
    avatar: "LP",
  },
  {
    id: 6,
    name: "James Wilson",
    rating: 4,
    text: "Professional and thorough. Great value for money. Very happy with the results!",
    avatar: "JW",
  },
];

const ReviewsBadge = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" size={10} />);
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400" size={10} />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-fit bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-0 rounded-2xl">
      <div className="relative inline-block">
        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-full translate-x-1/2 right-[70%] mb-3 w-80 pointer-events-none"
            >
              {/* Arrow */}
              <div className="absolute -bottom-2 left-[60%] -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-r border-b border-orange-200" />

              {/* Tooltip Content */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl border border-orange-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReviewIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                        {reviews[currentReviewIndex].avatar}
                      </div>
                      <div className="flex-1 justify-start">
                        <h4 className="text-gray-800 font-semibold text-sm">
                          {reviews[currentReviewIndex].name}
                        </h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          {renderStars(reviews[currentReviewIndex].rating)}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-base font-semibold leading-relaxed">
                      "{reviews[currentReviewIndex].text}"
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicator */}
                <div className="flex gap-1.5 mt-4 justify-center">
                  {reviews.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentReviewIndex
                          ? "w-6 bg-orange-500"
                          : "w-1.5 bg-orange-200"
                      }`}
                      initial={false}
                      animate={{
                        width: index === currentReviewIndex ? 24 : 6,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative bg-white/50 backdrop-blur-md rounded-lg px-4 py-4 shadow-lg border-2 border-black cursor-pointer overflow-hidden group"
        >
          {/* Content */}
          <div className="relative z-10   flex items-center gap-5">
            {/* Rating Section */}
            <div className="flex border-r border-gray-500 pr-4 flex-col items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {renderStars(4.4)}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.4</span>
            </div>

            {/* Divider */}
            {/* <div className="h-12 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent" /> */}

            {/* Reviews Count */}
            <div className="flex flex-col gap-0.5">
              <p className="text-gray-700 text-sm font-semibold">
                500+ Reviews
              </p>
              <p className="text-gray-600 text-xs">1000+ Customers</p>
            </div>
          </div>

          {/* Subtle Shimmer Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.08), transparent)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsBadge;
