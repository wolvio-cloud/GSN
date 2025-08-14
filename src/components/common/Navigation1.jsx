import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="absolute top-10 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50">
      {/* ✅ Logo */}
      <Link
        to="/"
        className="text-5xl font-bold font-playfair text-[#F2C063] tracking-wide ml-2"
      >
        GSN
      </Link>

      {/* ✅ Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10 px-8 py-3 rounded-full text-sm font-playfair shadow-md border border-white/10">
        <Link to="/experience" className="text-white font-bold transition duration-300">
          GSN Experience
        </Link>
        <Link to="/our-vision" className="text-white font-bold transition duration-300">
          Our Vision
        </Link>

        <a href="/community" className="text-white font-bold transition-colors duration-300">
          Global Community
        </a>
        <a href="/franchising" className="text-white font-bold transition-colors duration-300">
          GSN Franchising
        </a>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white font-bold transition duration-300 flex items-center"
          >
            About GSN
            <FaChevronDown className="ml-1 text-sm" />
          </button>
          {dropdownOpen && (
            <div className="absolute top-10 left-0  rounded-md shadow-lg border border-white/20 py-2 w-48 z-10">
              <a href="/about-us" className="block px-4 py-2 text-white font-bold  rounded-md">
                About Us
              </a>
              <a href="#blog" className="block px-4 py-2 text-white font-bold  rounded-md">
                Blog & Insights
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ✅ CTA Button */}
      <button className="hidden md:inline-block bg-[#F2C063] text-black font-ubuntu font-bold px-8 py-3 rounded-full transition-all duration-300 mr-4 hover:brightness-105">
        Get Invited
      </button>

      {/* ✅ Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-4xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/70 backdrop-blur-lg text-white flex flex-col space-y-5 py-6 px-6 md:hidden font-playfair text-lg z-40">
          <Link to="/experience" onClick={toggleMenu} className="hover:text-[#F2C063]">
            Experience
          </Link>
          <Link to="/our-vision" onClick={toggleMenu} className="hover:text-[#F2C063]">
            Our Vision
          </Link>
          <a href="/community" onClick={toggleMenu} className="hover:text-[#F2C063]">
            Global Community
          </a>
          <a href="/franchising" onClick={toggleMenu} className="hover:text-[#F2C063]">
            GSN Franchising
          </a>
          <div>
            <p className="hover:text-[#F2C063]">About GSN</p>
            <div className="pl-4">
              <a href="/about-us" onClick={toggleMenu} className="block hover:text-[#F2C063]">
                About Us
              </a>
              <a href="#blog" onClick={toggleMenu} className="block hover:text-[#F2C063]">
                Blog & Insights
              </a>
            </div>
          </div>
          <button className="bg-[#F2C063] text-black font-ubuntu font-semibold px-6 py-3 rounded-full hover:bg-[#e6ad55] transition duration-300">
            Get Invited
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
