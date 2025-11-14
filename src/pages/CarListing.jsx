import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cars = [
  {
    model: "Aurora Civic GT",
    image: "/images/CIVICPINK.jpg",
    description:
      "Pure power meets pink perfection — the ultimate performance coupe.",
    price: "₱6.8M",
  },
  {
    model: "Aurora BMW X",
    image: "/images/BMWPINK.jpg",
    description: "Electric elegance redefined. Sleek, silent, and striking.",
    price: "₱7.5M",
  },
  {
    model: "Aurora Tesla Sport",
    image: "/images/TESLAPINK.jpg",
    description:
      "Precision handling meets unmatched comfort for daily luxury.",
    price: "₱5.9M",
  },
];

export default function CarListing() {
  const [index, setIndex] = useState(0);

  // Optional Auto-Slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % cars.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + cars.length) % cars.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0d1d] via-[#2a172c] to-[#1b0d1d] text-white py-20 px-6 overflow-hidden relative">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(255,105,180,0.6)] mb-12">
        Our Featured Models
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="group relative bg-gradient-to-b from-[#2a172c]/80 to-[#1b0d1d]/80 border border-pink-300/20 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(255,105,180,0.3)]"
          >
            <img
              src={cars[index].image}
              alt={cars[index].model}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {cars[index].model}
              </h3>
              <p className="text-pink-100/80 mb-4 text-sm">
                {cars[index].description}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-pink-400 text-lg">
                  {cars[index].price}
                </span>
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_rgba(255,105,180,0.4)]">
                  Reserve Now
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-pink-400/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-pink-400/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {cars.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === i
                ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 scale-110 shadow-[0_0_10px_rgba(255,105,180,0.6)]"
                : "bg-pink-200/40 hover:bg-pink-300/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
