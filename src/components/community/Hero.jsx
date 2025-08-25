import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
        <video
  className="absolute top-0 left-0 w-full h-full object-cover"
  src="/community/c1hero.mp4"
  autoPlay
  loop
  muted
  playsInline
></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/85 via-black/85 to-black/85"></div>

      {/* Text content */}
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Our Global Community
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4">
          GSN is more than a local circle — it’s a global movement. Our members
          come from diverse backgrounds, cultures, and industries, united by a
          common vision: to grow with purpose and connect through conscious
          collaboration. Whether you're in India or across the world, GSN
          welcomes you into a thriving community without borders.
        </p>
      </div>
    </section>
  );
};

export default Hero;
