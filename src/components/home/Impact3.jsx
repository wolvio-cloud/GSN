import React from "react";
import { FaUsers } from "react-icons/fa";

const Impact = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Side - Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {/* Card 1 */}
          <div
            className="rounded-3xl p-4 shadow-md flex flex-col justify-between 
                       w-full sm:w-[270px] h-[170px] 
                       mt-4 sm:mt-10 sm:-ml-6"
            style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }}
          >
            <div>
              <h3 className="text-xl font-bold text-black mt-2 sm:mt-7">
                150K+
              </h3>
              <p className="text-[15px] text-black mt-1">
                Growth-Oriented Members
              </p>
            </div>
            <div className="flex justify-end">
              <FaUsers className="text-black text-3xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-l-3xl shadow-md 
                       w-full sm:w-[280px] h-[230px] 
                       mt-4 sm:-mt-5 sm:ml-4 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #80EAF6 0%, #9080E7 100%)",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "1.5rem",
            }}
          >
            <div className="relative z-20 p-4 sm:p-6 max-w-[55%]">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-black">
                100+
              </h3>
              <p className="text-[14px] sm:text-[15px] text-black mt-1">
                Businesses Represented
              </p>
            </div>
                       <img
  src="/suit.png"
  alt="Business"
  className="absolute bottom-0 right-[-90px] h-full w-auto   max-h-full object-contain  scale-[1.3] z-10"
/>

          </div>

          {/* Card 3 */}
          <div
            className="relative rounded-r-3xl shadow-md 
                       w-full sm:w-[280px] h-[230px] 
                       mt-2 sm:-mt-2 sm:-ml-6 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #F9C7E5 0%, #A0E9E1 100%)",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "1.5rem",
            }}
          >
            <div className="relative z-10 p-4 sm:p-6 max-w-[75%]">
              <h3 className="text-[16px] sm:text-[18px] font-bold text-black leading-snug">
                AI-Driven Smart Matchmaking
              </h3>
              <p className="text-[14px] text-black mt-2 leading-snug">
                Helping members connect meaningfully and grow faster
              </p>
            </div>
            <img
              src="/graph.png"
              alt="Smart Matchmaking"
              className="absolute bottom-3 right-3 sm:bottom-[20px] sm:right-[50px] h-[55px] sm:h-[65px] object-contain"
            />
          </div>

          {/* Card 4 */}
          <div
            className="relative rounded-3xl shadow-md 
                       w-full sm:w-[270px] h-[170px] 
                       mt-2 sm:-mt-2 sm:ml-4 overflow-hidden"
            style={{ backgroundColor: "rgba(145, 210, 195, 0.5)" }}
          >
            <img
              src="/country.png"
              alt="Global Participation"
              className="absolute top-3 left-4 h-[35px] sm:h-[40px] object-contain"
            />
            <div className="absolute bottom-6 right-4 text-right">
              <h3 className="text-[16px] sm:text-[18px] font-bold text-black">
                45+ Countries
              </h3>
              <p className="text-[14px] text-black mt-1">
                Open to Global Participation
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Text Content */}
        <div className="text-left sm:pl-6 md:pl-16 sm:-mt-0 md:-mt-28">
          <h2 className="text-[30px] sm:text-[44px] font-ubuntu font-normal text-[#1A1A1A] leading-[1.2]">
            The GSN Impact: <br />
            Growth, Connection & <br />
            Purpose
          </h2>
          <p className="text-[15px] sm:text-[15px] font-ubuntu font-semibold italic text-[#1A1A1A] mt-4 leading-relaxed">
            At Global Success Network (GSN), we’re building more than just a
            networking group — we’re cultivating a global ecosystem where
            business growth meets conscious collaboration.
            <br />
            Here’s a glimpse into our early momentum
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
