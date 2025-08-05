

import React, { useEffect, useState, useRef } from "react";

const rotatingWords = ["NETWORK", "INCOME", "BUSINESS"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl w-full px-4 text-center mb-6">
        <h1 className="text-[28px] sm:text-[36px] md:text-[60px] text-white font-playfair font-semibold leading-tight">
          ACCELERATE YOUR
          <span className="inline-block ml-4 h-[70px] overflow-hidden align-middle relative">
            <span
              ref={containerRef}
              className="inline-block transition-transform duration-700 ease-in-out  -ml-1 -mt-2 will-change-transform"
              style={{
                transform: `translateY(-${index * 70}px)`
              }}
            >
              {rotatingWords.map((word, i) => (
                <div
                  key={i}
                  className="h-[70px] flex items-center justify-center  text-white"
                >
                  {word}
                </div>
              ))}
            </span>
          </span>
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[25px] text-white font-garamond font-semibold mt-2">
          Join a global network where business meets purpose.
        </p>
      </div>
    </section>
  );
};

export default Hero;
