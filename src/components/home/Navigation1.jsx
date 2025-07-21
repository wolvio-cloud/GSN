import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#1A1A1A] text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-3xl font-bold font-playfair tracking-wide">
        GSN
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 font-playfair text-lg">
        <a href="#home" className="text-white hover:text-[#FFC263] transition">
          Home
        </a>
        <a
          href="#experience"
          className="text-white hover:text-[#FFC263] transition"
        >
          GSN Experience
        </a>
        <a
          href="#vision"
          className="text-white hover:text-[#FFC263] transition"
        >
          Our Vision
        </a>
        <a
          href="#community"
          className="text-white hover:text-[#FFC263] transition"
        >
          Global Community
        </a>
        <a
          href="#franchising"
          className="text-white hover:text-[#FFC263] transition"
        >
          GSN Franchising
        </a>
      </div>

      {/* Call-to-Action Button */}
      <button className="hidden md:inline-block bg-[#FFC263] text-black font-ubuntu font-medium px-5 py-2 rounded-full hover:bg-[#e6ad55] transition">
        Get Invited
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <span className="text-3xl">&#10005;</span> // Close icon
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1A1A1A] text-white flex flex-col space-y-4 py-6 px-6 md:hidden font-playfair text-lg">
          <a
            href="#home"
            className="hover:text-[#FFC263]"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#experience"
            className="hover:text-[#FFC263]"
            onClick={toggleMenu}
          >
            GSN Experience
          </a>
          <a
            href="#vision"
            className="hover:text-[#FFC263]"
            onClick={toggleMenu}
          >
            Our Vision
          </a>
          <a
            href="#community"
            className="hover:text-[#FFC263]"
            onClick={toggleMenu}
          >
            Global Community
          </a>
          <a
            href="#franchising"
            className="hover:text-[#FFC263]"
            onClick={toggleMenu}
          >
            GSN Franchising
          </a>
          <button className="bg-[#FFC263] text-black font-ubuntu font-medium px-5 py-2 rounded-full hover:bg-[#e6ad55] transition">
            Get Invited
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
