import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Car, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <Home size={22} /> },
    { to: "/cars", label: "Models", icon: <Car size={22} /> },
    { to: "/order", label: "Reserve", icon: <ShoppingBag size={22} /> },
  ];

  return (
    <nav className="fixed z-50 w-full">
      {/* 💻 Desktop Navbar */}
      <div
        className="hidden md:flex justify-between items-center
        bg-gradient-to-r from-[#2a172c]/80 via-[#3b1b4a]/80 to-[#2a172c]/80
        backdrop-blur-2xl border border-pink-200/20
        rounded-2xl shadow-[0_8px_30px_rgba(255,105,180,0.3)]
        px-8 py-3 top-3 left-1/2 -translate-x-1/2 fixed w-[95%] max-w-7xl
        text-pink-100"
      >
        {/* 🚗 Company Branding */}
        <div className="flex items-center gap-3">
          <img
            src="/images/LOGOPINK.jpg"
            alt="Aurora Motors Logo"
            className="w-10 h-10 rounded-full border border-pink-300/30 shadow-md"
          />
          <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(255,105,180,0.7)]">
            Aurora Motors
          </h1>
        </div>

        {/* 🧭 Navigation Links */}
        <div className="flex space-x-8 font-medium text-sm">
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 transition-all duration-300 px-4 py-2 rounded-lg ${
                location.pathname === to
                  ? "text-white bg-gradient-to-r from-pink-500/40 to-fuchsia-500/40 border border-white/10 shadow-[0_0_12px_rgba(255,105,180,0.6)]"
                  : "text-pink-200 hover:text-white hover:bg-white/5 hover:border hover:border-pink-200/10"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>

        {/* 🔐 Login / CTA Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-pink-300/20 rounded-xl text-sm font-semibold text-pink-100 hover:bg-pink-400/10 hover:text-white transition-all">
            Sign In
          </button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,105,180,0.6)]">
            Book a Test Drive
          </button>
        </div>
      </div>

      {/* 📱 Mobile Navbar */}
      <div
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md 
        bg-gradient-to-br from-[#2a172c]/95 via-[#3b1b4a]/95 to-[#2a172c]/95 backdrop-blur-xl 
        border border-pink-300/10 rounded-2xl shadow-[0_8px_30px_rgba(255,105,180,0.4)] 
        flex justify-around items-center py-3 px-4 transition-all duration-300"
      >
        {links.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-white scale-110 drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]"
                  : "text-pink-200 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,105,180,0.6)]"
              }`}
            >
              <div
                className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-pink-500/40 to-fuchsia-500/40 border border-pink-300/10"
                    : "hover:bg-white/10"
                }`}
              >
                {icon}
              </div>
              <span className="text-xs mt-1">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
