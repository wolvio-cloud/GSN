import React from "react";
import { Link } from "react-router-dom";

const Journey = () => {
  return (
      <section className="py-6 px-3 sm:py-16 sm:px-6 md:px-16 lg:px-24 w-full bg-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 bg-[#06172D] rounded-3xl sm:rounded-[50px] text-center text-white">
        {/* Main Heading */}
        <h2 className="text-[22px] sm:text-[32px] md:text-[50px] font-ubuntu font-bold leading-snug sm:leading-tight mb-4 sm:mb-6">
          Start your journey with GSN
        </h2>

        {/* Subtext */}
        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-ubuntu font-normal mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Looking to scale your business and build meaningful relationships?
          <br className="hidden sm:block" />
          Start your journey now.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          state={{ scrollTo: "contact" }}
          className="bg-[#F2C063] text-[#06172D] text-[14px] sm:text-[15px] md:text-[16px] font-ubuntu font-medium px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:brightness-105 transition duration-300"
        >
          Get Invited
        </Link>
      </div>
    </section>
  );
};

export default Journey;
