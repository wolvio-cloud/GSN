
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[130vh] flex items-end justify-center text-center overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src="/hero2.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* ✅ Bottom-Centered Text (Responsive) */}
      <div className="absolute bottom-2 left-0 right-0 z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-white font-playfair leading-tight whitespace-normal">
          ACCELERATE YOUR NETWORK
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[20px] text-white font-garamond  mt-2 md:mt-4 whitespace-normal">
          Join a global network where business meets purpose.
        </p>
      </div>
    </section>
  );
};

export default Hero;
