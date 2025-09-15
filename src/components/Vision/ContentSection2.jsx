const features2 = [
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
    <section className="py-16 px-6 md:px-16 lg:px-24 w-full bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Row 1 (Card left, Text right on desktop — stacked on mobile) */}
          <div className="bg-[#D2DCE4] rounded-3xl p-6 md:p-10">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features2[0].title}
            </h3>
            <p className="text-[#153153] mt-4">{features2[0].description}</p>
          </div>

          {/* Spacer for desktop, hidden on mobile */}
          <div className="hidden lg:block"></div>

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

          {/* Row 2 (Connector Line - visible only on lg) */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[2px] bg-gray-300 h-16 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -top-2.5 -left-[5px]"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -bottom-2.5 -left-[5px]"></div>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>

          {/* Row 3 */}
          <div className="bg-[#D2DCE4] rounded-3xl p-6 md:p-10">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features2[1].title}
            </h3>
            <p className="text-[#153153] mt-4">{features2[1].description}</p>
          </div>

          {/* Horizontal Connector (desktop only) */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full h-[2px] bg-gray-300 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -left-2.5 -top-1.5"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -right-2.5 -top-1.5"></div>
            </div>
          </div>

          <div className="bg-[#D2DCE4] rounded-3xl p-6 md:p-10">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features2[2].title}
            </h3>
            <p className="text-[#153153] mt-4">{features2[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection2;
