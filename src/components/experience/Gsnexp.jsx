import React from "react";

const gsnCards = [
  {
    title: "GSN In-Person Circles",
    description:
      "Experience the power of face-to-face connection. Build deeper relationships through intentional, local meetups.",
    image: "/experience/gsnexp/e1.png", // adjust your path accordingly
  },
  {
    title: "GSN Hybrid Sessions",
    description:
      "The perfect balance. Meet in person once a month, and continue connecting online — flexible, consistent, and powerful.",
    image: "/experience/gsnexp/e2.png",
  },
  {
    title: "GSN Virtual Connect",
    description:
      "Join from anywhere. Enjoy the full GSN experience with global members right from your home or workspace.",
    image: "/experience/gsnexp/e3.png",
  },
];

const Gsnexp = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-20">
      {/* Heading */}
      <div className="text-left md:w-[400px] mb-10 md:ml-8 justify-center">
        <h2 className="text-[#153153] text-[28px] md:text-[35px] font-ubuntu font-bold leading-snug">
          Choose Your GSN Experience
        </h2>
        <p className="text-black text-[16px] md:text-[18px] font-ubuntu font-normal mt-4 leading-snug">
          Connect in the way that aligns best with your goals — flexible formats
          designed for your lifestyle and business journey
        </p>
      </div>

      {/* Cards layout */}
      <div className="relative flex flex-col items-center gap-5 md:gap-20 max-w-6xl mx-auto md:-mt-60 ">

        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-[#D2DCE4] rounded-[30px] w-full md:w-[500px] min-h-[200px] md:self-end p-6 md:p-10 gap-6 ">
          <img
            src={gsnCards[0].image}
            alt={gsnCards[0].title}
            className="w-full md:w-[180px] h-[194px] object-cover rounded-2xl"
          />
          <div>
            <h3 className="text-[#153153] text-[20px] md:text-[22px] font-ubuntu font-bold mb-4">
              {gsnCards[0].title}
            </h3>
            <p className="text-[#183466] text-[14px] md:text-[16px] font-ubuntu font-normal leading-snug">
              {gsnCards[0].description}
            </p>
          </div>
        </div>

        {/* Vertical line + dots between Card 1 & 2 */}
        <div className="hidden md:flex flex-col items-center md:-mt-20 md:ml-150">
          <div className="w-3 h-3 bg-[#8d8e91] rounded-full -left-2" />
          <div className="w-[2px] h-12 bg-[#8d8e91]" />
          <div className="w-3 h-3 bg-[#8d8e91] rounded-full -right-2" />
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-[#D2DCE4] rounded-[30px] w-full md:w-[500px] min-h-[200px] md:self-end p-6 md:p-10 gap-6 md:-mt-20">
          <img
            src={gsnCards[1].image}
            alt={gsnCards[1].title}
            className="w-full md:w-[180px] h-[194px] object-cover rounded-2xl"
          />
          <div>
            <h3 className="text-[#153153] text-[20px] md:text-[20px] font-ubuntu font-bold mb-4">
              {gsnCards[1].title}
            </h3>
            <p className="text-[#183466] text-[14px] md:text-[16px] font-ubuntu font-normal leading-snug">
              {gsnCards[1].description}
            </p>
          </div>
        </div>

        {/* Horizontal line + dots between Card 2 & 3 */}
        <div className="hidden md:flex items-center justify-center w-[125px] h-[2px] bg-[#8d8e91] relative -mt-14 md:-mt-50 -ml-10 ">
          <div className="w-3 h-3 bg-[#8d8e91] rounded-full absolute -left-2" />
          <div className="w-3 h-3 bg-[#8d8e91] rounded-full absolute -right-2" />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center bg-[#D2DCE4] rounded-[30px] w-full md:w-[500px] min-h-[200px] md:self-start p-6 md:p-10 gap-6 mt-8 md:-mt-59 md:-ml-10">
          <img
            src={gsnCards[2].image}
            alt={gsnCards[2].title}
            className="w-full md:w-[180px] h-[194px] object-cover rounded-2xl"
          />
          <div>
            <h3 className="text-[#153153] text-[20px] md:text-[20px] font-ubuntu font-bold mb-4">
              {gsnCards[2].title}
            </h3>
            <p className="text-[#183466] text-[14px] md:text-[16px] font-ubuntu font-normal leading-snug">
              {gsnCards[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gsnexp;
