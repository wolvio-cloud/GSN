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
    <section className="py-8 px-6 md:px-16 lg:px-24 w-full bg-white">
      {/* Title and Description */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <div>
          <h1 className="text-[#153153] text-[32px] sm:text-[40px] lg:text-[40px] font-bold font-ubuntu leading-tight">
            One Network, Many Nations
          </h1>
          <p className="text-[#183466] text-[20px] sm:text-[24px] lg:text-[24px] font-ubuntu mt-2">
            From Local Circles to Global Collaboration
          </p>
        </div>

        <div className="lg:text-right -mt-4">
          <p className="text-[#153153] text-[20px] sm:text-[30px] lg:text-[24px] font-ubuntu leading-snug">
            Discover the Impact of <br />
            <span className="font-bold">Purposeful Referrals</span>
          </p>
        </div>
      </div>

      {/* Grid: Regions + Map */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Region Buttons */}
        <div className="flex flex-col space-y-6 w-full lg:w-[35%]">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-[#D2DCE4] w-full max-w-[690px] h-[60px] rounded-full flex items-center justify-center text-[#153153] text-[20px] sm:text-[28px] lg:text-[25px] font-bold font-ubuntu text-center shadow-sm"
            >
              {region}
            </div>
          ))}
        </div>

        {/* Right: Map Image */}
        <div className="w-full lg:w-[53%]">
          <img
            src="/community/map.png"
            alt="GSN Global Map"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Note */}
     <p className="mt-25 text-left text-black text-[16px] sm:text-[18px] md:text-[18px] font-ubuntu italic max-w-5xl  px-2 leading-relaxed">
  If your country isn’t listed yet, reach out to us to explore opportunities for launching a <span className="font-bold">GSN</span> chapter in your region.
</p>

    </section>
  );
};

export default Network;
