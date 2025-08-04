// import React from "react";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen flex items-end justify-center overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/heromain.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       ></video>

//       {/* Bottom-Centered Text with Margin */}
//       <div className="relative z-10 max-w-5xl w-full px-4 text-center mb-6">
//         <h1 className="text-[28px] sm:text-[36px] md:text-[58px] text-white font-playfair font-semibold  leading-tight">
//           ACCELERATE YOUR NETWORK
//         </h1>
//         <p className="text-[16px] sm:text-[18px] md:text-[25px] text-white font-garamond  font-semibold mt-2">
//           Join a global network where business meets purpose.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";

const rotatingWords = ["NETWORK", "INCOME", "BUSINESS"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(timer);
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

      {/* Bottom-Centered Text */}
      <div className="relative z-10 max-w-5xl w-full px-4 text-center mb-6">
        <h1 className="text-[28px] sm:text-[36px] md:text-[58px] text-white font-playfair font-semibold leading-tight">
          ACCELERATE YOUR{" "}
          <span className="relative inline-block h-[1em] overflow-hidden">
            <span className="block transition-all duration-500 ease-in-out animate-fade-in-up">
              {rotatingWords[index]}
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
