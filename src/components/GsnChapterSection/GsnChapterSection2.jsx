import React from "react";
import { Link } from "react-router-dom";

const GsnChapterSection2 = () => {
  return (
    <section className="w-full flex justify-center px-4 py-12 bg-white">
      <div className="bg-[#05162F] rounded-[50px] max-w-6xl w-full text-center px-6 sm:px-10 py-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          Is GSN Chapter Leadership Right for You?
        </h2>
        <p className="text-white text-base sm:text-lg mt-4 max-w-3xl mx-auto">
          Let’s connect and explore how you can bring conscious networking to your
          region with the tools, support, and vision of GSN
        </p>
        <div className="mt-8">
          {/* ✅ Updated CTA */}
          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            className="bg-[#FFE982] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300"
          >
            Get Invited
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GsnChapterSection2;
