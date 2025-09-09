import React from "react";
import { FaUsers } from "react-icons/fa";

const Impact = () => {
  return (
    <section className="relative py-16 px-6 md:px-16 lg:px-24 w-full py-20 mt-20 bg-white overflow-hidden">
      <div className="mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ✅ Left Side - Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-12 auto-rows-[250px] sm:auto-rows-[200px]">
          {/* Card 1 */}
          <div
            className="rounded-3xl p-4 shadow-md flex flex-col justify-between mt-12"
            style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }}
          >
            <div>
              <h3 className="text-xl md:text-[20px] font-bold text-black">150K+</h3>
              <p className="md:text-[15px] text-[20px] text-black mt-1">
                Growth-Oriented Members
              </p>
            </div>
            <div className="flex justify-end">
              <FaUsers className="text-black text-3xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-l-3xl shadow-md overflow-visible"
            style={{
              background: "linear-gradient(135deg, #80EAF6 0%, #9080E7 100%)",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "1.5rem",
            }}
          >
            {/* Text stays safe */}
            <div className="relative z-20 p-6 max-w-[60%]">
              <h3 className="md:text-[20px] text-[20px] font-bold text-black">100+</h3>
              <p className="text-[20px] md:text-[15px] text-black mt-1">
                Businesses Represented
              </p>
            </div>

            {/* Image — flush bottom, overflow top/right */}
            <img
              src="/impact.png"
              alt="Business"
              className="
      absolute
      bottom-0         /* lock to card bottom */
      -top-6           /* small overflow top */
      -right-6         /* small overflow right */
      max-h-[112%]     /* allow slight top overflow */
      object-contain
      z-10
      pointer-events-none
    "
            />
          </div>





          {/* Card 3 */}
          <div
            className="relative rounded-r-3xl shadow-md"
            style={{
              background: "linear-gradient(135deg, #F9C7E5 0%, #A0E9E1 100%)",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "1.5rem",
            }}
          >
            <div className="relative z-10 p-6 max-w-[95%]">
              <h3 className="md:text-[20px] text-[20px] font-bold text-black leading-snug">
                AI-Driven Smart Matchmaking
              </h3>
              <p className="text-[18px] md:text-[14px] text-black mt-2 leading-snug">
                Helping members connect meaningfully and grow faster
              </p>
            </div>
            <img
              src="/graph.png"
              alt="Smart Matchmaking"
              className="absolute bottom-3 md:right-6 right-14 md:h-[55px] h-[85px] object-contain"
            />
          </div>

          {/* Card 4 */}
          <div
            className="relative rounded-3xl shadow-md"
            style={{ backgroundColor: "rgba(145, 210, 195, 0.5)" }}
          >
            <img
              src="/country.png"
              alt="Global Participation"
              className="absolute top-3 left-4 md:h-[40px] h-[50px] object-contain"
            />
            <div className="absolute bottom-6 right-4 text-right">
              <h3 className="md:text-[18px] text-[20px] font-bold text-black">45+ Countries</h3>
              <p className="md:text-[14px] text-[20px] text-black mt-1">
                Open to Global Participation
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Text Content */}
        <div className="text-left sm:pl-6 md:pl-16">
          <h2 className="text-[30px] sm:text-[44px] font-ubuntu font-normal text-[#1A1A1A] leading-[1.2]">
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
