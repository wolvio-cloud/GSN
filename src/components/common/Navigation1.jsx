import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Automatically open dropdown if current route is inside About GSN
  useEffect(() => {
    if (["/about-us", "/blogs"].includes(location.pathname)) {
      setDropdownOpen(true);
    }
  }, [location.pathname]);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Check if current route is under About GSN
  const isAboutGSNActive = ["/about-us", "/blogs"].includes(location.pathname);

  return (
    <nav className="absolute top-10 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50">
      {/* Logo */}
      <Link to="/" className="ml-2">
        <img
          src="/logo.png"
          alt="GSN Logo"
          className="h-12 w-auto md:h-16 object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10 px-8 py-3 rounded-full text-sm font-playfair shadow-md border border-white/10">
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          GSN Experience
        </NavLink>
        <NavLink
          to="/our-vision"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          Our Vision
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          Global Community
        </NavLink>
        <NavLink
          to="/franchising"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          GSN Franchising
        </NavLink>

        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `font-bold transition duration-300 ${isActive ? "text-[#F2C063]" : "text-white"
            }`
          }
        >
          About Us
        </NavLink>

        {/* Dropdown */}
        {/* <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={`font-bold transition duration-300 flex items-center ${isAboutGSNActive ? "text-[#F2C063]" : "text-white"
              }`}
          >
            About GSN
            <FaChevronDown className="ml-1 text-sm" />
          </button>
          {dropdownOpen && (
            <div className="absolute top-10 md:-left-5 rounded-md shadow-lg border border-white/20 py-2 w-35 z-10 bg-black/90">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `block px-4 py-2 font-bold rounded-md ${isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `block px-4 py-2 font-bold rounded-md ${isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                Blog & Insights
              </NavLink> 
            </div>
          )}
        </div> */}
      </div>

      {/* CTA Button (Desktop) */}
      <Link
        to="/"
        state={{ scrollTo: "contact" }}
        className="hidden md:inline-block bg-[#F2C063] text-black font-ubuntu font-bold px-8 py-3 rounded-full transition-all duration-300 mr-4 hover:brightness-105"
      >
        Get Invited
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-4xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Popup Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-[#111] rounded-2xl shadow-lg w-[95%] h-[90%] p-6 text-white font-playfair overflow-y-auto">
            {/* Close button inside popup */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-3xl font-bold text-white hover:text-[#F2C063]"
            >
              ✕
            </button>

            <div className="flex flex-col space-y-6 mt-8 text-lg">
              <NavLink
                to="/experience"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-[#F2C063] ${isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                Experience
              </NavLink>
              <NavLink
                to="/our-vision"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-[#F2C063] ${isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                Our Vision
              </NavLink>
              <NavLink
                to="/community"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-[#F2C063] ${isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                Global Community
              </NavLink>
              <NavLink
                to="/franchising"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-[#F2C063] ${isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                GSN Franchising
              </NavLink>

              <NavLink
                to="/about-us"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-[#F2C063] ${isActive ? "text-[#F2C063]" : "text-white"
                  }`
                }
              >
                About Us
              </NavLink>


              {/* <div>
                <p
                  className={`hover:text-[#F2C063] font-bold ${["/about-us", "/blogs"].includes(location.pathname)
                      ? "text-[#F2C063]"
                      : ""
                    }`}
                >
                  About GSN
                </p>
                <div className="pl-4 space-y-3 mt-2">
                  <NavLink
                    to="/about-us"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block hover:text-[#F2C063] ${isActive ? "text-[#F2C063]" : "text-white"
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block hover:text-[#F2C063] ${isActive ? "text-[#F2C063]" : "text-white"
                      }`
                    }
                  >
                    Blog & Insights
                  </NavLink>
                </div>
              </div> */}

              {/* CTA Button (Mobile) */}
              <Link
                to="/"
                state={{ scrollTo: "contact" }}
                onClick={toggleMenu}
                className="bg-[#F2C063] text-black font-ubuntu font-semibold px-6 py-3 rounded-full hover:bg-[#e6ad55] transition duration-300 text-center"
              >
                Get Invited
              </Link>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navigation;
