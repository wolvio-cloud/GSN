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
    <section className="py-6 px-3 md:py-16 md:px-16 lg:px-24 w-full bg-white">

      <div className="mx-auto px-4 md:px-6 lg:px-8">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Row 1 */}
          <div>
            <h1 className="text-2xl font-bold text-[#153153]">
              A New Era of Networking
            </h1>
            <p className="text-lg mt-6 text-[#153153]">
              GSN is redefining professional networking by merging technology
              with intention. We're moving from cold transactions to conscious
              connections that are smarter, deeper, and built to last.
            </p>
          </div>

          {/* Spacer (hidden on mobile) */}
          <div className="hidden lg:block"></div>

          <div className="bg-[#D2DCE4] rounded-3xl p-6">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features1[0].title}
            </h3>
            <p className="text-[#153153] mt-4">{features1[0].description}</p>
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
          <div className="bg-[#D2DCE4] rounded-3xl p-6">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features1[1].title}
            </h3>
            <p className="text-[#153153] mt-4">{features1[1].description}</p>
          </div>

          {/* Horizontal Line (desktop only) */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full h-[2px] bg-gray-300 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -left-2.5 -top-1.5"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -right-2.5 -top-1.5"></div>
            </div>
          </div>

          <div className="bg-[#D2DCE4] rounded-3xl p-6">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features1[2].title}
            </h3>
            <p className="text-[#153153] mt-4">{features1[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection1;
