const features2 = [
  {
    title: "Purpose-Driven Business",
    description:
      "GSN encourages entrepreneurs to stay grounded in their values while scaling their ventures with clarity and intention.",
  },
  {
    title: "Ethical Entrepreneurship",
    description:
      "Integrity isn't optional - it's foundational. Our community uplifts businesses that lead with ethics, empathy, and sustainability.",
  },
  {
    title: "Collective Empowerment",
    description:
      "GSN is not a competition. It's a collective - where collaboration fuels momentum, and every win is shared.",
  },
];

const ContentSection2 = () => {
  return (
    <section className="py-6 px-3 md:py-16 md:px-16 lg:px-24 w-full bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Card 1: Purpose-Driven Business - LEFT column */}
          <div className="bg-[#D2DCE4] rounded-3xl p-6 md:p-10 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features2[0].title}
            </h3>
            <p className="text-[#153153] mt-4">{features2[0].description}</p>
          </div>

          {/* Spacer - MIDDLE column, row 1 */}
          <div className="hidden lg:block lg:order-2"></div>

          {/* Title + Description - RIGHT column */}
          <div className="order-1 lg:order-3">
            <h1 className="text-2xl md:text-3xl font-bold text-[#153153]">
              Growth with Purpose
            </h1>
            <p className="text-base md:text-lg mt-4 md:mt-6 text-[#153153]">
              We believe true success goes beyond revenue. GSN fosters holistic growth - 
              helping members expand their business while remaining aligned with their 
              deeper purpose.
            </p>
          </div>

          {/* Row 2 - Vertical Connector in LEFT column (between Card 1 and Card 2) */}
          <div className="hidden lg:flex justify-center lg:order-4">
            <div className="w-[2px] bg-gray-300 h-16 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -top-2.5 -left-[5px]"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -bottom-2.5 -left-[5px]"></div>
            </div>
          </div>

          {/* Spacers for MIDDLE and RIGHT columns, row 2 */}
          <div className="hidden lg:block lg:order-5"></div>
          <div className="hidden lg:block lg:order-6"></div>

          {/* Card 2: Ethical Entrepreneurship - LEFT column */}
          <div className="bg-[#D2DCE4] rounded-3xl p-6 md:p-10 order-3 lg:order-7">
            <h3 className="text-2xl font-bold text-[#153153]">
              {features2[1].title}
            </h3>
            <p className="text-[#153153] mt-4">{features2[1].description}</p>
          </div>

          {/* Horizontal Connector in MIDDLE column (between Card 2 and Card 3) */}
          <div className="hidden lg:flex justify-center lg:order-8">
            <div className="w-full h-[2px] bg-gray-300 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -left-2.5 -top-1.5"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -right-2.5 -top-1.5"></div>
            </div>
          </div>

          {/* Card 3: Collective Empowerment - RIGHT column */}
          <div className="bg-[#D2DCE4] rounded-3xl p-6 md:p-10 order-4 lg:order-9">
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