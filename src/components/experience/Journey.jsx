
import React from "react";
import { Link } from "react-router-dom";

const Journey = () => {
  return (
    <section className="px-4 md:px-8 py-16 -mt-20 md:-mt-65">
      <div className="bg-[#06172D] rounded-[50px] w-full max-w-5xl mx-auto px-6 md:px-20 py-12 md:py-14 text-center text-white">
        {/* Main Heading */}
        <h2 className="text-[26px] md:text-[50px] font-ubuntu font-bold leading-tight mb-6">
          Start your journey with GSN
        </h2>

        {/* Subtext */}
        <p className="text-[16px] md:text-[16px] font-ubuntu font-normal mb-6 md:mb-10 max-w-2xl mx-auto leading-snug">
          Looking to scale your business and build meaningful relationships?
          <br className="hidden md:block" />
          Start your journey now.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          state={{ scrollTo: "contact" }}
          className="bg-[#F2C063] text-[#06172D] text-[16px] md:text-[14px]  font-ubuntu font-medium px-6 py-2 md:px-10 md:py-3 rounded-full hover:brightness-105 transition duration-300"
        >
          Get Invited
        </Link>
      </div>
    </section>
  );
};

export default Journey;
