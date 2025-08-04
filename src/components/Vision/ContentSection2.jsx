import React from "react";

const features1 = [
  {
    title: "Purpose-Driven Business",
    description:
      "GSN encourages entrepreneurs to stay grounded in their values while scaling their ventures with clarity and intention.",
  },
  {
    title: "Ethical Entrepreneurship",
    description:
      "Integrity isn’t optional - it’s foundational. Our community uplifts businesses that lead with ethics, empathy, and sustainability.",
  },
  {
    title: "Collective Empowerment",
    description:
      "GSN is not a competition. It’s a collective - where collaboration fuels momentum, and every win is shared.",
  },
];

const ContentSection2 = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout with 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-start space-y-8 h-full">
            <div>
              <h1 className="text-2xl sm:text-2xl font-bold text-[#153153] leading-tight">
                Growth With Purpose
              </h1>
              <p className="text-lg sm:text-xl text-[#153153] mt-6">
                We believe true success goes beyond revenue.
                GSN fosters holistic growth - helping members
                expand their businesses while remaining aligned
                with their deeper purpose
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
          <div className="flex flex-col justify-start space-y-8 h-full">
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

export default ContentSection2;
