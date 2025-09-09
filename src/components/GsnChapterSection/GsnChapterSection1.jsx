import React from "react";

const features = [
  {
    title: "Global",
    subtitle: "Opportunities",
    description:
      "Launch and grow your GSN chapter with the backing of an expanding international network",
    icon: (
      <img src="/franchsing/icon1.png" alt="Global Icon" className="w-10 h-10" />
    ),
  },
  {
    title: "Exclusive",
    subtitle: "Resources",
    description:
      "Get access to proven systems, branding, AI tools, and frameworks to run your chapter efficiently",
    icon: (
      <img src="/franchsing/icon2.png" alt="Resources Icon" className="w-10 h-10" />
    ),
  },
  {
    title: "Ongoing",
    subtitle: "Support",
    description:
      "Receive continuous training, mentorship, and operational guidance from the GSN core team",
    icon: (
      <img src="/franchsing/icon3.png" alt="Support Icon" className="w-10 h-10" />
    ),
  },
  {
    title: "Purpose-Led",
    subtitle: "Leadership",
    description:
      "Lead a community rooted in conscious growth, collaboration, and values-based business building",
    icon: (
      <img src="/franchsing/icon4.png" alt="Leadership Icon" className="w-10 h-10" />
    ),
  },
];

const GsnChapterSection1 = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 w-full relative">
      <div className="mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Unified Grid: Heading + 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left (Heading + Paragraph) spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col justify-start mt-5 md:w-[90%]">
            <h1 className="text-2xl sm:text-2xl font-bold text-[#153153] leading-tight">
              Build a Purpose-Driven GSN Chapter <br />
              & Uplift Local Entrepreneurs
            </h1>
            <p className="text-lg sm:text-xl text-[#153153] mt-6">
              Create a thriving networking ecosystem in your region while growing
              a meaningful and impactful business.
            </p>
          </div>

          {/* First Card (top-right) */}
          <div className="relative bg-[#D2DCE4] rounded-3xl p-6 sm:p-5 flex flex-col justify-between w-full md:w-[85%] min-h-[100px]">
            <div className="flex justify-end">{features[0].icon}</div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-[#153153]">
                {features[0].title}
              </h3>
              <h3 className="text-2xl font-bold text-[#153153]">
                {features[0].subtitle}
              </h3>
              <p className="text-[#153153] mt-4">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Remaining 3 Cards */}
          {features.slice(1).map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-[#D2DCE4] rounded-3xl p-6 sm:p-5 flex md:mt-10 flex-col justify-between min-h-[100px] w-full md:w-[85%]"
            >
              <div className="flex justify-end">{feature.icon}</div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-[#153153]">
                  {feature.title}
                </h3>
                <h3 className="text-2xl font-bold text-[#153153]">
                  {feature.subtitle}
                </h3>
                <p className="text-[#153153] mt-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GsnChapterSection1;
