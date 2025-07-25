
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[130vh] flex items-end justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay (optional, enable if Figma shows dark tint) */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div> */}

      {/* Content (Bottom-Centered Text) */}
      {/* <div className="relative z-10 max-w-5xl px-4 mb-2"> */}
      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-5xl mx-auto px-4 mb-12 text-center">
        <h1 className="text-[70px] text-white font-playfair leading-none whitespace-nowrap">
          ACCELERATE YOUR NETWORK
        </h1>
        <p className="text-[30px] text-white font-garamond mt-4 whitespace-nowrap">
          Join a global network where business meets purpose.
        </p>
      </div>
    </section>
  );
};

export default Hero;
