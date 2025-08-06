import React from "react";

const Heroexp = () => {
  return (
    <section className="relative w-full h-[100vh] sm:h-[100vh] md:h-[120vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
  className="absolute top-0 left-0 w-full h-full object-cover"
  src="/experience/hexp.mp4"
  autoPlay
  loop
  muted
  playsInline
></video>


      {/* Overlay Text */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h1 className="text-white font-playfair font-semibold text-[38px] sm:text-[50px] md:text-[65px] lg:text-[65px] leading-tight">
          Referrals That Truly Resonate
        </h1>
        <p className="text-white font-ubuntu text-[16px] sm:text-[20px] md:text-[26px] lg:text-[24px] mt-4">
          Elevate Your Business Through Meaningful Connections
        </p>
      </div>

      {/* Optional: Gradient Overlay for readability
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
    </section>
  );
};

export default Heroexp;
