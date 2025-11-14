import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Components
import Navbar from "./components/Navbar.jsx";

// ✅ Pages
import LandingPage from "./pages/LandingPage.jsx";
import CarListing from "./pages/CarListing.jsx";
import OrderPage from "./pages/OrderPage.jsx"; 

export default function App() {
  return (
    <Router>
      {/* ✅ Navbar visible on all pages */}
      <Navbar />

      {/* ✅ Define routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}
