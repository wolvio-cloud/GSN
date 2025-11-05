import React from "react";
import { FaUsers } from "react-icons/fa";

const Impact = () => {
  return (
    <section className="relative py-10 px-5 md:px-16 lg:px-24 w-full bg-white overflow-hidden mt-4 sm:mt-20">

      <div className="mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ✅ Left Side - Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-8 auto-rows-[220px] sm:auto-rows-[200px]">
          {/* Card 1 */}
          <div
            className="rounded-3xl p-4 shadow-md flex flex-col justify-between"
            style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }}
          >
            <div>
              <h3 className="text-xl md:text-[20px] font-bold text-black">150K+</h3>
              <p className="md:text-[15px] text-[16px] text-black mt-1 leading-snug">
                Growth-Oriented Members
              </p>
            </div>
            <div className="flex justify-end">
              <FaUsers className="text-black text-3xl" />
            </div>
          </div>

          {/* Card 2 → lifted only on sm+ */}
          {/* Card 2 – Businesses Represented */}
          <div
            className="relative rounded-3xl rounded-tr-none shadow-md flex flex-col justify-between overflow-hidden sm:-mt-10"
            style={{
              background: "linear-gradient(135deg, #80EAF6 0%, #9080E7 100%)",
            }}
          >
            {/* Text Section */}
            <div className="relative z-20 p-5 md:p-6 max-w-[60%]">
              <h3 className="md:text-[22px] text-[20px] font-bold text-black">100+</h3>
              <p className="text-[15px] md:text-[16px] text-black mt-1 leading-snug">
                Businesses <br /> Represented
              </p>
            </div>

            {/* Image aligned to bottom-right */}
            <img
              src="/impact.png"
              alt="Businesses Represented"
              className="absolute bottom-0 -right-5 h-[90%] md:h-[95%] object-contain z-10"
            />
          </div>



          {/* Card 3 → pushed down only on sm+ */}
          <div
            className="relative rounded-3xl rounded-tl-none shadow-md flex flex-col justify-between overflow-hidden sm:-mb-10"
            style={{
              background: "linear-gradient(135deg, #F9C7E5 0%, #A0E9E1 100%)",
            }}
          >
            <div className="relative z-10 p-4 max-w-[95%]">
              <h3 className="md:text-[20px] text-[18px] font-bold text-black leading-snug">
                AI-Driven Smart Matchmaking
              </h3>
              <p className="text-[14px] md:text-[14px] text-black mt-2 leading-snug">
                Helping members connect meaningfully and grow faster
              </p>
            </div>

            {/* Image aligned bottom-left */}
            <img
              src="/graph.png"
              alt="Smart Matchmaking"
              className="absolute bottom-4 left-4 h-[60px] md:h-[60px] object-contain"
            />
          </div>



          {/* Card 4 */}
          <div
            className="relative rounded-3xl shadow-md flex flex-col justify-between p-4"
            style={{ backgroundColor: "rgba(145, 210, 195, 0.5)" }}
          >
            <img
              src="/country.png"
              alt="Global Participation"
              className="w-[50px] md:w-[40px] object-contain"
            />
            <div className="text-right">
              <h3 className="md:text-[18px] text-[18px] font-bold text-black">45+ Countries</h3>
              <p className="md:text-[14px] text-[14px] text-black mt-1 leading-snug">
                Open to Global Participation
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Text Content */}
        <div className="text-left sm:pl-6 md:pl-16">
          <h2 className="text-[28px] sm:text-[44px] font-ubuntu font-normal text-[#1A1A1A] leading-[1.2]">
            The GSN Impact: <br />
            Growth, Connection & <br />
            Purpose
          </h2>
          <p className="text-[15px] font-ubuntu font-semibold italic text-[#1A1A1A] mt-4 leading-relaxed">
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
