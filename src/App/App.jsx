import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/others/Navbar.jsx";
import Landing from "../Components/pages/Landing.jsx";
import Error404 from "../Components/others/Error404.jsx";
import Footer from "../Components/others/Footer.jsx";

import Contact from "../Components/pages/Contact.jsx";
import About from "../Components/pages/About.jsx";
import TryAI from "../Components/pages/TryAI.jsx";
import "../assets/css/App.css"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/try-ai" element={<TryAI />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
