import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6 md:px-16 lg:px-24">
      {/* ✅ Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ✅ Logo */}
        <div>
          <h2 className="text-[50px] font-ubuntu font-bold leading-[50px]">
            Global <br /> Success <br />
            <span className="text-[50px] font-ubuntu font-bold">
              Network<sup>®</sup>
            </span>
          </h2>
        </div>

        {/* ✅ Explore Links */}
        <div>
          <h3 className="text-[30px] font-ubuntu font-bold mb-4">Explore</h3>
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
        <div>
          <h3 className="text-[30px] font-ubuntu font-bold mb-4 ">Who We Are</h3>
          <ul className="space-y-2 text-[14px] font-ubuntu">
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Our Vision</li>
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div>
          <h3 className="text-[30px] font-ubuntu font-bold mb-4">
            Reach Out to us
          </h3>
          <p className="text-[16px] font-ubuntu mb-2">📞 In India.</p>
          <p className="text-[16px] font-ubuntu mb-4">(91) 9500078674</p>
          <p className="text-[16px] font-ubuntu mb-2">✉️ Outside India</p>
          <p className="text-[16px] font-ubuntu">Info@zenith77.com</p>
        </div>
      </div>
 {/* ✅ Social Icons + Scroll Button */}
        <div className="flex items-center gap-6 ml-170 mt-20">
          {/* ✅ Social Links */}
          <a
            href="https://instagram.com"
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

          {/* ✅ Scroll To Top */}
          <div className=" flex justify-end  ml-50 m">
          <button
            onClick={scrollToTop}
            className="w-[50px] h-[50px] flex items-center justify-center bg-transparent border border-gray-400 rounded-full hover:bg-gray-700"
          >
            <FaArrowUp className="text-[24px]" />
          </button>
          </div>
        </div>

      {/* ✅ Divider Line */}
      <hr className="border-white-700 border-t-1  my-8 mt-4" />

      {/* ✅ Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* ✅ Policies */}
        <div className="flex flex-wrap gap-6 text-[16px] font-ubuntu">
          <p className="hover:text-gray-400 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-gray-400 cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-gray-400 cursor-pointer">Cookies Policy</p>
        </div>

        {/* ✅ Copyright */}
        <div className="text-[16px] font-ubuntu text-center font-bold ">
          © 2025 <span className="font-bold">GSN</span>, all rights reserved. A
          group of zenith77 Multi Business Pvt Ltd.
        </div>

             </div>
    </footer>
  );
};

export default Footer;
