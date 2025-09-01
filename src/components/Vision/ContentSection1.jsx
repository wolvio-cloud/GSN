import React from "react";

const features1 = [
  {
    title: "Connection With Intention",
    description:
      "Members don't just network - they align. Every interaction is designed to build relationships rooted in mutual respect and purpose.",
  },
  {
    title: "Flexibility in Engagement",
    description:
      "Choose how you connect - in-person, virtually, or hybrid - all designed to support your schedule without compromising authenticity.",
  },
  {
    title: "Trust-Centered Collaboration",
    description:
      "We believe trust is the currency of growth. GSN nurtures safe spaces for professionals to share, refer, and grow together.",
  },
];

const ContentSection1 = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-start space-y-10 h-full w-full md:w-[120%]  ">
            <div className="md:ml-6  lg:ml-15">
              <h1 className="text-2xl sm:text-2xl font-bold text-[#153153] leading-tight">
                A New Era of Networking
              </h1>
              <p className="text-lg sm:text-xl text-[#153153] mt-6">
                GSN is redefining professional networking by merging technology with intention.
                We're moving from cold transactions to conscious connections that are smarter,
                deeper, and built to last.
              </p>
            </div>

            <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full mt-6 md:mt-4 md:ml-6 lg:ml-10 ">
              <h3 className="text-2xl font-bold text-[#153153]">{features1[0].title}</h3>
              <p className="text-[#153153] mt-4">{features1[0].description}</p>
            </div>
          </div>

          {/* Center - Lines (only on lg+) */}
          <div className="hidden lg:flex flex-col items-center relative">
           {/* Vertical Line */}
<div className="w-[2px] h-[36px] bg-gray-300 relative mt-[200px] lg:ml-190">
  <div className="w-3 h-3 rounded-full bg-transparent border-2 border-gray-300 absolute -top-2.5 left-1/2 -translate-x-1/2"></div>
   <div className="w-3 h-3 rounded-full bg-transparent border-2 border-gray-300 absolute -bottom-2.5 left-1/2 -translate-x-1/2"></div>
</div>

            {/* Horizontal Line */}
<div className="w-[270px] h-[2px] bg-gray-300 relative md:mt-[110px] ml-6">
  <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -left-2.5 -top-1.5"></div>
  <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -right-2.5 -top-1.5"></div>
</div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-start space-y-16 h-full md:h-[200px]  w-full md:w-[120%] md:-ml-10 lg:-ml-12">
            <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full md:mr-6 lg:mr-8">
              <h3 className="text-2xl font-bold text-[#153153]">{features1[1].title}</h3>
              <p className="text-[#153153] mt-4">{features1[1].description}</p>
            </div>

            <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full md:mr-6 lg:mr-8">
              <h3 className="text-2xl font-bold text-[#153153]">{features1[2].title}</h3>
              <p className="text-[#153153] mt-4">{features1[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection1;
