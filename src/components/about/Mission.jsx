import React from "react";

const Mission = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 w-full bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* ✅ Heading moved to the right */}
        <div className="flex justify-end">
          <h2
            className="font-ubuntu font-bold text-[#153153] mb-8 text-right"
            style={{
              fontSize: "clamp(36px, 4.5vw, 40px)",
              lineHeight: 1.05,
            }}
          >
            Mission
          </h2>
        </div>

        {/* Outer container only wraps text */}
        <div className="relative bg-white border border-gray-200 rounded-[18px] p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_5fr] gap-6 lg:gap-10 items-start">
            {/* LEFT - Image (taken out of box height flow with absolute positioning) */}
            <div className="relative w-full">
              <img
                src="/about/mission.webp"
                alt="Mission visual"
                className="
      rounded-[20px] 
      w-full object-cover
      h-[180px] md:h-[280px] lg:h-[360px]   /* 🔽 Reduced heights */
      lg:absolute lg:top-0 lg:left-0
    "
              />
            </div>


            {/* RIGHT - Text (controls box height) */}
            <div className="relative z-20 flex flex-col justify-start">
              <p
                className="text-black font-ubuntu mb-6"
                style={{
                  fontSize: "clamp(18px, 2vw, 20px)",
                  lineHeight: 1.6,
                }}
              >
                To empower individuals and businesses to grow through conscious
                collaboration, trusted referrals, and spiritually aligned
                networking — guided by intelligent systems and a shared vision
                of global success.
              </p>

              <p
                className="text-black font-ubuntu"
                style={{
                  fontSize: "clamp(18px, 2vw, 20px)",
                  lineHeight: 1.6,
                }}
              >
                We exist to transform traditional networking into a journey of
                mutual elevation, personal evolution, and purposeful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
