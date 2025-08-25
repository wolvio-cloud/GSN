import React from "react";

const Mission = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Outer container with border + rounded corners */}
        <div className="relative bg-white border border-gray-200 rounded-[28px] p-6 md:p-10 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] gap-6 lg:gap-10 items-start">
            
            {/* LEFT - Image */}
            <div className="relative flex justify-center z-20 w-full">
              <img
                src="/about/m1.PNG"
                alt="Mission visual"
                className="rounded-[20px] w-full object-cover"
                style={{ minHeight: "300px", maxHeight: "600px" }}
              />
            </div>

            {/* RIGHT - Text */}
            <div className="relative z-20 flex flex-col justify-start">
              <h2
                className="font-ubuntu font-bold text-[#153153] mb-8"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 40px)",
                  lineHeight: 1.05,
                }}
              >
                Mission
              </h2>

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
