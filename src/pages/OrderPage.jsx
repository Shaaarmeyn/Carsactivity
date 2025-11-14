import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    carModel: "",
    serviceType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🚘 Reservation confirmed for ${form.carModel} by ${form.name} — ${form.serviceType}`
    );
    setForm({ name: "", email: "", carModel: "", serviceType: "" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#1b0d1d] via-[#2a172c] to-[#1b0d1d] text-white font-sans">
      {/* 🌸 Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full blur-[180px]" />
      </div>

      {/* 🪞 Form Container */}
      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_40px_rgba(255,105,180,0.25)] p-10 md:p-12 hover:shadow-[0_0_50px_rgba(255,105,180,0.3)] transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]">
            Reserve Your Dream Ride
          </h1>
          <p className="text-pink-100/80 mt-3 flex items-center justify-center gap-2 text-sm md:text-base">
            <Sparkles className="text-pink-300 w-4 h-4" /> Aurora Motors — Luxury. Innovation. Passion.
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="peer w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200"
              required
            />
            <label className="absolute left-5 top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-300 bg-gradient-to-r from-[#1b0d1d]/80 to-transparent px-1">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="peer w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200"
              required
            />
            <label className="absolute left-5 top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-300 bg-gradient-to-r from-[#1b0d1d]/80 to-transparent px-1">
              Email Address
            </label>
          </div>

          {/* Car Model */}
          <div className="relative">
            <input
              type="text"
              placeholder="Car Model"
              value={form.carModel}
              onChange={(e) => setForm({ ...form, carModel: e.target.value })}
              className="peer w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200"
              required
            />
            <label className="absolute left-5 top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-300 bg-gradient-to-r from-[#1b0d1d]/80 to-transparent px-1">
              Car Model
            </label>
          </div>

          {/* Service Type */}
          <div className="relative">
            <select
              value={form.serviceType}
              onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
              className="w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200"
              required
            >
              <option value="">Select Reservation Type</option>
              <option value="Test Drive">Test Drive</option>
              <option value="Pre-Order">Pre-Order</option>
              <option value="Exclusive Launch Event">Exclusive Launch Event</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 rounded-xl font-semibold hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,105,180,0.6)] transition-all duration-300"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
