import React from "react";

const gsnCards = [
  {
    title: "GSN In-Person Circles",
    description:
      "Experience the power of face-to-face connection. Build deeper relationships through intentional, local meetups.",
    image: "/experience/gsnexp/e1.webp",
  },
  {
    title: "GSN Hybrid Sessions",
    description:
      "The perfect balance. Meet in person once a month, and continue connecting online — flexible, consistent, and powerful.",
    image: "/experience/gsnexp/e2.webp",
  },
  {
    title: "GSN Virtual Connect",
    description:
      "Join from anywhere. Enjoy the full GSN experience with global members right from your home or workspace.",
    image: "/experience/gsnexp/e3.webp",
  },
];

const Gsnexp = () => {
  return (
    <section className="py-6 px-5 sm:py-16 sm:px-6 md:px-16 lg:px-24 w-full bg-white">

      <div className="mx-auto px-4 md:px-6 lg:px-8 relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Heading & Description */}
        <div>
          <h2 className="text-[#153153] text-[28px] md:text-[35px] font-ubuntu font-bold leading-snug">
            Choose Your GSN Experience
          </h2>
          <p className="text-[#183466] text-[16px] md:text-[18px] font-ubuntu mt-4 leading-snug">
            Connect in the way that aligns best with your <br />
            goals —  flexible formats designed for your lifestyle <br />
            and business journey
          </p>

        </div>

        {/* Card 1 */}
        <div className="relative bg-[#D2DCE4] rounded-[30px] p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6">
          {/* Connector (Card 1 → Card 3 vertical) */}
          <div className="absolute left-1/2 bottom-0 translate-y-full -translate-x-1/2 hidden md:flex flex-col items-center">
            <div className="h-6 w-[2px] bg-[#8d8e91] relative">
              <div className="w-3 h-3 rounded-full border-2 border-[#8d8e91] bg-white absolute -top-0 left-1/2 -translate-x-1/2"></div>
              <div className="w-3 h-3 rounded-full border-2 border-[#8d8e91] bg-white absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          <img
            src={gsnCards[0].image}
            alt={gsnCards[0].title}
            className="w-full md:w-[180px] h-[194px] object-cover rounded-2xl"
          />
          <div>
            <h3 className="text-[#153153] text-[20px] md:text-[22px] font-ubuntu font-bold mb-4">
              {gsnCards[0].title}
            </h3>
            <p className="text-[#183466] text-[14px] md:text-[16px] font-ubuntu leading-snug">
              {gsnCards[0].description}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#D2DCE4] rounded-[30px] p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6">
          {/* Connector (Card 2 → Card 3 horizontal) */}
          <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 hidden md:flex items-center">
            <div className="w-6 h-[2px] bg-[#8d8e91] relative">
              <div className="w-3 h-3 rounded-full border-2 border-[#8d8e91] bg-white absolute -left-1 top-1/2 -translate-y-1/2"></div>
              <div className="w-3 h-3 rounded-full border-2 border-[#8d8e91] bg-white absolute -right-3 top-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          <img
            src={gsnCards[1].image}
            alt={gsnCards[1].title}
            className="w-full md:w-[180px] h-[194px] object-cover rounded-2xl"
          />
          <div>
            <h3 className="text-[#153153] text-[20px] md:text-[22px] font-ubuntu font-bold mb-4">
              {gsnCards[1].title}
            </h3>
            <p className="text-[#183466] text-[14px] md:text-[16px] font-ubuntu leading-snug">
              {gsnCards[1].description}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#D2DCE4] rounded-[30px] p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <img
            src={gsnCards[2].image}
            alt={gsnCards[2].title}
            className="w-full md:w-[180px] h-[194px] object-cover rounded-2xl"
          />
          <div>
            <h3 className="text-[#153153] text-[20px] md:text-[22px] font-ubuntu font-bold mb-4">
              {gsnCards[2].title}
            </h3>
            <p className="text-[#183466] text-[14px] md:text-[16px] font-ubuntu leading-snug">
              {gsnCards[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gsnexp;
