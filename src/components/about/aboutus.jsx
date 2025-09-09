import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 w-full">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
        {/* Left Text Block */}
        <div className="flex-1">
          <h2 className="text-[#153153] font-ubuntu font-bold text-[40px] md:text-[48px] lg:text-[40px] leading-tight">
            About GSN
          </h2>
          <p className="mt-6 text-[#183466] font-ubuntu text-[18px] md:text-[24px] lg:text-[22px] leading-relaxed max-w-2xl">
            Global Success Network (GSN) is a purpose-driven business networking
            platform designed for the modern entrepreneur. We bring together
            professionals from diverse industries through a conscious,
            collaborative ecosystem powered by trust, innovation, and technology
          </p>
        </div>

        {/* Right Text Block */}
        <div className="flex-1 lg:pl-8">
          <p className="text-[#183466] font-ubuntu text-[18px] md:text-[24px] lg:text-[22px] leading-relaxed max-w-2xl">
            Our integration of AI-driven smart matchmaking with spiritual
            alignment, helping members build not just profitable partnerships,
            but meaningful, lasting relationships.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Card 1 */}
        <div className="relative flex-1 bg-[#D2DCE4] rounded-[20px] p-10 flex flex-col min-h-[260px]">
          <h3 className="text-[#183466] font-ubuntu font-bold text-[28px] md:text-[32px] lg:text-[24px]">
            Grow <br /> Together
          </h3>
          <p className="mt-4 text-[#183466] font-ubuntu text-[18px] md:text-[22px] lg:text-[18px] leading-relaxed">
            We rise by uplifting one another through shared purpose and
            meaningful connection.
          </p>

          {/* Right Line Connector */}
          <div className="hidden lg:flex absolute top-1/2 right-[-46px] items-center">
            <span className="w-3 h-3 rounded-full border-2 border-[#D2DCE4] bg-transparent"></span>
            <div className="w-5 h-[2px] bg-[#D2DCE4]"></div>
            <span className="w-3 h-3 rounded-full border-2 border-[#D2DCE4] bg-transparent"></span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-[#D2DCE4] rounded-[20px] p-10 flex flex-col min-h-[260px]">
          <h3 className="text-[#183466] font-ubuntu font-bold text-[28px] md:text-[32px] lg:text-[24px]">
            Win <br /> Together
          </h3>
          <p className="mt-4 text-[#183466] font-ubuntu text-[18px] md:text-[22px] lg:text-[18px] leading-relaxed">
            We rise by uplifting one another through shared purpose and
            meaningful connection.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="/about/a12.webp"
            alt="About GSN"
            className="rounded-[20px] w-full min-h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
