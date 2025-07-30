import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-end justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/heromain.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Bottom-Centered Text with Margin */}
      <div className="relative z-10 max-w-5xl w-full px-4 text-center mb-6">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-white font-playfair leading-tight">
          ACCELERATE YOUR NETWORK
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-garamond mt-2">
          Join a global network where business meets purpose.
        </p>
      </div>
    </section>
  );
};

export default Hero;
