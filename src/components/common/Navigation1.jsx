import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom"; // ✅ use NavLink for active link detection

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="absolute top-10 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50">
      {/* ✅ Logo */}
      <Link to="/" className="ml-2">
        <img
          src="/logo.png"
          alt="GSN Logo"
          className="h-12 w-auto md:h-16 object-contain"
        />
      </Link>

      {/* ✅ Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10 px-8 py-3 rounded-full text-sm font-playfair shadow-md border border-white/10">
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${
              isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          GSN Experience
        </NavLink>
        <NavLink
          to="/our-vision"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${
              isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          Our Vision
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${
              isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          Global Community
        </NavLink>
        <NavLink
          to="/franchising"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${
              isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          GSN Franchising
        </NavLink>

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
            <div className="absolute top-10 md:-left-5 rounded-md shadow-lg border border-white/20 py-2 w-35 z-10">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `block px-4 py-2 font-bold rounded-md ${
                    isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `block px-4 py-2 font-bold rounded-md ${
                    isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                Blog & Insights
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* ✅ CTA Button (Desktop) */}
      <Link
        to="/"
        state={{ scrollTo: "contact" }}
        className="hidden md:inline-block bg-[#F2C063] text-black font-ubuntu font-bold px-8 py-3 rounded-full transition-all duration-300 mr-4 hover:brightness-105"
      >
        Get Invited
      </Link>

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
          <NavLink
            to="/experience"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#F2C063] ${
                isActive ? "text-[#F2C063]" : "text-white"
              }`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/our-vision"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#F2C063] ${
                isActive ? "text-[#F2C063]" : "text-white"
              }`
            }
          >
            Our Vision
          </NavLink>
          <NavLink
            to="/community"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#F2C063] ${
                isActive ? "text-[#F2C063]" : "text-white"
              }`
            }
          >
            Global Community
          </NavLink>
          <NavLink
            to="/franchising"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#F2C063] ${
                isActive ? "text-[#F2C063]" : "text-white"
              }`
            }
          >
            GSN Franchising
          </NavLink>

          <div>
            <p className="hover:text-[#F2C063]">About GSN</p>
            <div className="pl-4">
              <NavLink
                to="/about-us"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block hover:text-[#F2C063] ${
                    isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/blogs"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block hover:text-[#F2C063] ${
                    isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                Blog & Insights
              </NavLink>
            </div>
          </div>

          {/* ✅ CTA Button (Mobile) */}
          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            onClick={toggleMenu}
            className="bg-[#F2C063] text-black font-ubuntu font-semibold px-6 py-3 rounded-full hover:bg-[#e6ad55] transition duration-300"
          >
            Get Invited
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
