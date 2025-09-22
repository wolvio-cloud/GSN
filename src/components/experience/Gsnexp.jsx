import React from "react";

const gsnCards = [
  {
    title: "GSN In-Person Circles",
    content:
      "Experience the power of face-to-face connection. Build deeper relationships through intentional, local meetups.",
    image: "/experience/gsnexp/e1.webp",
  },
  {
    title: "GSN Hybrid Sessions",
    content:
      "The perfect balance. Meet in person once a month, and continue connecting online — flexible, consistent, and powerful.",
    image: "/experience/gsnexp/e2.webp",
  },
  {
    title: "GSN Virtual Connect",
    content:
      "Join from anywhere. Enjoy the full GSN experience with global members right from your home or workspace.",
    image: "/experience/gsnexp/e3.webp",
  },
];

const Gsnexp = () => {
  return (
    <section className="py-6 px-3 md:py-16 md:px-16 lg:px-24 w-full bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Row 1 */}
          <div>
            <h1 className="text-2xl font-bold text-[#153153]">
              Professional & Inspiring
            </h1>
            <p className="text-lg mt-6 text-[#153153]">
              See how entrepreneurs worldwide are <br />
              transforming their businesses through <br />
              GSN's unique blend of conscious networking and<br />
              intelligent connection.
            </p>
          </div>

          {/* Spacer (hidden on mobile) */}
          <div className="hidden lg:block"></div>
          <div className="bg-[#D2DCE4] rounded-3xl p-6 h-[280px] w-full flex flex-col md:flex-row items-center gap-6">
            {/* Image */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={gsnCards[0].image}
                alt={gsnCards[0].title}
                className="w-[120px] h-[130px] md:w-[140px] md:h-[150px] object-cover rounded-2xl"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start text-left flex-1">
              <h3 className="text-[#153153] text-[18px] md:text-[20px] font-ubuntu font-bold mb-2">
                {gsnCards[0].title}
              </h3>
              <p className="text-[#183466] text-[13px] md:text-[14px] font-ubuntu leading-snug">
                {gsnCards[0].content}
              </p>
            </div>
          </div>

          {/* Row 2 – connector line (desktop only) */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:flex justify-center">
            <div className="w-[2px] bg-gray-300 h-16 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -top-2.5 -left-[5px]"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -bottom-2.5 -left-[5px]"></div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-[#D2DCE4] rounded-3xl p-6 h-[280px] w-full flex flex-col md:flex-row items-center gap-6">
            {/* Image */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={gsnCards[1].image}
                alt={gsnCards[1].title}
                className="w-[120px] h-[130px] md:w-[140px] md:h-[150px] object-cover rounded-2xl"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start text-left flex-1">
              <h3 className="text-[#153153] text-[18px] md:text-[20px] font-ubuntu font-bold mb-2">
                {gsnCards[1].title}
              </h3>
              <p className="text-[#183466] text-[13px] md:text-[14px] font-ubuntu leading-snug">
                {gsnCards[1].content}
              </p>
            </div>
          </div>

          {/* Horizontal Line (desktop only) */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full h-[2px] bg-gray-300 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -left-2.5 -top-1.5"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -right-2.5 -top-1.5"></div>
            </div>
          </div>
          
          <div className="bg-[#D2DCE4] rounded-3xl p-6 h-[280px] w-full flex flex-col md:flex-row items-center gap-6">
            {/* Image */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={gsnCards[2].image}
                alt={gsnCards[2].title}
                className="w-[120px] h-[130px] md:w-[140px] md:h-[150px] object-cover rounded-2xl"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start text-left flex-1">
              <h3 className="text-[#153153] text-[18px] md:text-[20px] font-ubuntu font-bold mb-2">
                {gsnCards[2].title}
              </h3>
              <p className="text-[#183466] text-[13px] md:text-[14px] font-ubuntu leading-snug">
                {gsnCards[2].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gsnexp;