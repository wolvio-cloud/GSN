


// import React from "react";

// const Hero = () => {
//   return (
//     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//       <video
//         style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
//         src="/hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       <h1 style={{ position: "relative", zIndex: 10, color: "white" }}>
//         ✅ Video Test
//       </h1>
//     </div>
//   );
// };

// export default Hero;


import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content (No z-index, just relative so it's naturally above) */}
      <div className="relative max-w-4xl px-4">
        <h1 className="text-[80px] text-white font-playfair leading-tight">
          ACCELERATE YOUR NETWORK
        </h1>
        <p className="text-[34px] text-white font-garamond mt-6">
          Join a global network where business meets purpose.
        </p>
      </div>
    </section>
  );
};

export default Hero;
