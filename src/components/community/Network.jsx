import React from "react";

const regions = [
  "ASIA PACIFIC",
  "NORTH AMERICA",
  "LATIN AMERICA",
  "EUROPE",
  "MIDDLE EAST & AFRICA",
];

const Network = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 xl:px-24">
      {/* Title and Description */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <div>
          <h1 className="text-[#153153] text-[32px] sm:text-[48px] lg:text-[45px] font-bold font-ubuntu leading-tight">
            One Network, Many Nations
          </h1>
          <p className="text-[#183466] text-[18px] sm:text-[24px] lg:text-[25px] font-ubuntu mt-2">
            From Local Circles to Global Collaboration
          </p>
        </div>

        <div className="lg:text-right -mt-10">
          <p className="text-[#153153] text-[24px] sm:text-[30px] lg:text-[26px] font-ubuntu leading-snug">
            Discover the Impact of <br />
            <span className="font-bold">Purposeful Referrals</span>
          </p>
        </div>
      </div>

      {/* Grid: Regions + Map */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Region Buttons */}
        <div className="flex flex-col space-y-6 w-full lg:w-[37%]">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-[#D2DCE4] w-full max-w-[694px] h-[60px] rounded-full flex items-center justify-center text-[#153153] text-[20px] sm:text-[28px] lg:text-[30px] font-bold font-ubuntu text-center shadow-sm"
            >
              {region}
            </div>
          ))}
        </div>

        {/* Right: Map Image */}
        <div className="w-full lg:w-[55%]">
          <img
            src="/community/map.png"
            alt="GSN Global Map"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Note */}
     <p className="mt-10 text-left text-black text-[16px] sm:text-[18px] md:text-[20px] font-ubuntu italic max-w-5xl  px-2 leading-relaxed">
  If your country isn’t listed yet, reach out to us to explore opportunities for launching a <span className="font-bold">GSN</span> chapter in your region.
</p>

    </section>
  );
};

export default Network;
