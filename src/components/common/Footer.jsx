import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6 md:px-16 lg:px-24">
      {/* ✅ Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ✅ Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-[40px] md:text-[50px] font-ubuntu font-bold leading-[50px]">
            Global <br /> Success <br />
            <span className="text-[40px] md:text-[50px] font-ubuntu font-bold">
              Network<sup>®</sup>
            </span>
          </h2>
        </div>

        {/* ✅ Explore Links */}
        <div className="text-center md:text-left">
          <h3 className="text-[24px] md:text-[30px] font-ubuntu font-bold mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-[14px] font-ubuntu">
            <li className="hover:text-gray-400 cursor-pointer">
              GSN Experience
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              Global Community
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              GSN Franchising
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              Blogs & Insights
            </li>
          </ul>
        </div>

        {/* ✅ Who We Are */}
        <div className="text-center md:text-left">
          <h3 className="text-[24px] md:text-[30px] font-ubuntu font-bold mb-4">
            Who We Are
          </h3>
          <ul className="space-y-2 text-[14px] font-ubuntu">
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Our Vision</li>
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-[24px] md:text-[30px] font-ubuntu font-bold mb-4">
            Reach Out to us
          </h3>
          <p className="text-[16px] font-ubuntu mb-2">📞 In India.</p>
          <p className="text-[16px] font-ubuntu mb-4">(91) 9500078674</p>
          <p className="text-[16px] font-ubuntu mb-2">✉️ Outside India</p>
          <p className="text-[16px] font-ubuntu">Info@zenith77.com</p>
        </div>
      </div>

      {/* ✅ Social Icons + Scroll Button */}
      <div className="flex flex-col sm:flex-row items-center justify-end max-w-7xl mx-auto   mt-12 gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-6 justify-center">
          <a
            href="https://www.instagram.com/gsn_network?igsh=eTd5cXd5NDNnZms="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[28px] hover:text-gray-400 cursor-pointer" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-[28px] hover:text-gray-400 cursor-pointer" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-[28px] hover:text-gray-400 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-[28px] hover:text-gray-400 cursor-pointer" />
          </a>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="w-[50px] h-[50px] flex items-center justify-center bg-transparent border border-gray-400 rounded-full hover:bg-gray-700"
        >
          <FaArrowUp className="text-[24px]" />
        </button>
      </div>

      {/* ✅ Divider Line */}
      <hr className="border-white border-t my-8" />

      {/* ✅ Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center">
        {/* ✅ Policies */}
        <div className="flex flex-wrap gap-6 text-[14px] font-ubuntu justify-center">
          <Link
            to="/privacy-policy"
            className="hover:text-gray-400 cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-conditions"
            className="hover:text-gray-400 cursor-pointer"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/cookie-policy"
            className="hover:text-gray-400 cursor-pointer"
          >
            Cookie Policy
          </Link>
        </div>

        {/* ✅ Copyright */}
        <div className="text-[14px] font-ubuntu font-bold text-center">
          © 2025 <span className="font-bold">GSN</span>, all rights reserved. A
          group of Zenith77 Multi Business Pvt Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
