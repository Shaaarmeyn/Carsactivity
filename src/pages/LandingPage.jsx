import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Gauge,
  BatteryCharging,
  Shield,
  Menu,
  Info,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-pink-400" />,
      title: "Luxury Redefined",
      desc: "Crafted interiors and sleek design built for elegance and style.",
    },
    {
      icon: <BatteryCharging className="w-8 h-8 text-fuchsia-400" />,
      title: "Electric Innovation",
      desc: "Powered by next-gen technology — silent, efficient, and sustainable.",
    },
    {
      icon: <Gauge className="w-8 h-8 text-rose-400" />,
      title: "Unmatched Performance",
      desc: "Engineered for speed and control — feel the power in every drive.",
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-300" />,
      title: "Safety First",
      desc: "Advanced AI-assisted systems to keep you safe on every road.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1b0d1d] via-[#2a172c] to-[#1b0d1d] text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 💎 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/20 rounded-full blur-[160px]" />
      </div>

      {/* 🌸 Hero Content */}
      <div className="relative z-10 text-center px-6 mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,105,180,0.5)]">
          Experience the Future of Driving
        </h1>
        <p className="mt-6 text-pink-100/80 text-lg md:text-xl max-w-2xl mx-auto">
          Aurora Motors redefines performance and luxury — merging power,
          design, and innovation into every curve.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate("/cars")}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,105,180,0.5)] flex items-center gap-2"
          >
            Explore Models <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 border border-pink-300/30 rounded-xl text-pink-200 hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* 🚘 Car Image */}
      <div className="relative mt-16 z-10">
        <img
          src="/images/BMWPINK.jpg"
          alt="Aurora Supercar"
          className="w-[90%] max-w-4xl mx-auto drop-shadow-[0_0_40px_rgba(255,105,180,0.4)] rounded-2xl"
        />
      </div>

      {/* 🔘 Buttons below image */}
      <div className="relative z-10 mt-10 flex justify-center gap-4">
        {/* Sidebar Button */}
        <button
          onClick={() => setIsPanelOpen(true)}
          className="p-4 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 shadow-lg hover:scale-110 transition-transform"
        >
          <Menu size={22} />
        </button>

        {/* Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-4 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-400 shadow-lg hover:scale-110 transition-transform"
        >
          <Info size={22} />
        </button>
      </div>

      {/* 🌟 Features Section */}
      <div className="relative z-10 mt-24 mb-20 w-full px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent mb-10">
          Why Choose Aurora Motors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#2a172c]/70 to-[#1b0d1d]/70 border border-pink-400/20 rounded-2xl p-6 text-center shadow-[0_8px_30px_rgba(255,105,180,0.2)] hover:shadow-[0_8px_40px_rgba(255,105,180,0.3)] transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-pink-100/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🩷 Animated Side Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPanelOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-[#2a172c] shadow-[0_0_25px_rgba(255,105,180,0.3)] p-6 flex flex-col justify-between z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-pink-400">Menu</h2>
                  <button onClick={() => setIsPanelOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <ul className="space-y-4">
                  <li className="hover:text-pink-300 cursor-pointer">Home</li>
                  <li
                    className="hover:text-pink-300 cursor-pointer"
                    onClick={() => navigate("/cars")}
                  >
                    Cars
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer">About Us</li>
                  <li className="hover:text-pink-300 cursor-pointer">Contact</li>
                </ul>
              </div>
              <p className="text-sm text-pink-200/70 text-center">
                © 2025 Aurora Motors
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🌸 Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#2a172c] border border-pink-400/20 rounded-2xl p-8 max-w-md mx-auto shadow-[0_0_25px_rgba(255,105,180,0.3)] text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-3">
                About Aurora Motors
              </h3>
              <p className="text-pink-100/80 mb-6">
                Aurora Motors pushes the boundaries of modern engineering and
                design. Every vehicle is crafted for excellence, elegance, and
                electrifying performance.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_rgba(255,105,180,0.4)]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
