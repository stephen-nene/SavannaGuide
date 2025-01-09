import React from "react";
import { FaRobot, FaArrowRight } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10">
      <header className="bg-gradient-to-r from-orange-700 to-red-700 text-white">
        <nav className=" mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="flex items-center space-x-2 hover:text-green-500"
          >
            <FaRobot className="text-2xl" />
            <span className="text-xl font-bold  hidden  md:block">
              Savannah Guide
            </span>
          </NavLink>
          <div className="hidden md:flex space-x-8 text-lg">
            <NavLink to="/about">About</NavLink>
            {/* <NavLink to="/try-ai">Try-Demo</NavLink> */}
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <Link to="/try-ai">
            <button className="bg-orange-500 hover:bg-green-400 px-6 py-2 rounded-full transition">
              Try Demo
            </button>
          </Link>
        </nav>
      </header>
    </nav>
  );
}
