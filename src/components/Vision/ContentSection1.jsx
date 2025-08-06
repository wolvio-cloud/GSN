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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout with 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-start space-y-8 h-full">
            <div>
              <h1 className="text-2xl sm:text-2xl font-bold text-[#153153] leading-tight">
                A New Era of Networking
              </h1>
              <p className="text-lg sm:text-xl text-[#153153] mt-6">
                GSN is redefining professional networking by merging technology with intention.
                We're moving from cold transactions to conscious connections that are smarter,
                deeper, and built to last.
              </p>
            </div>

            <div className="flex-1">
              <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full">
                <h3 className="text-2xl font-bold text-[#153153]">{features1[0].title}</h3>
                <p className="text-[#153153] mt-4">{features1[0].description}</p>
              </div>
            </div>
          </div>

          {/* Center Column - Empty space or connector */}
          <div></div>

          {/* Right Column */}
          <div className="flex flex-col justify-start space-y-8 h-full ">
            <div className="flex-1">
              <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full">
                <h3 className="text-2xl font-bold text-[#153153]">{features1[1].title}</h3>
                <p className="text-[#153153] mt-4">{features1[1].description}</p>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full">
                <h3 className="text-2xl font-bold text-[#153153]">{features1[2].title}</h3>
                <p className="text-[#153153] mt-4">{features1[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection1;
