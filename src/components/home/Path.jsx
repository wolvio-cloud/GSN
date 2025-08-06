// import React from "react";

// const stepsData = [
//   {
//     number: "1",
//     title: "Experience a GSN Circle",
//     text: "Join a local or virtual session and feel the energy of meaningful, spiritually-aligned networking.",
//   },
//   {
//     number: "2",
//     title: "Connect with Visionaries",
//     text: "Engage with entrepreneurs and professionals driven by purpose, innovation, and collaboration.",
//   },
//   {
//     number: "3",
//     title: "Begin Your Journey with GSN",
//     text: "Apply to become a member and unlock access to referrals, growth tools, and AI-powered networking.",
//   },
// ];

// const Path = () => {
//   return (
//     <section className="w-full bg-[#1A1A1A] py-20 px-6 md:px-16 lg:px-24">
//       {/* ✅ Heading */}
//       <div className="text-center max-w-5xl mx-auto">
//         <h2 className="text-[40px] font-ubuntu font-bold text-white leading-tight">
//           Your Path to Purposeful Networking
//         </h2>
//         <p className="text-[18px] font-ubuntu font-normal text-white mt-6 leading-snug">
//           Three simple steps to elevate your business through conscious
//           connections and intelligent growth
//         </p>
//       </div>

//       {/* ✅ Steps */}
//       <div className="mt-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto relative gap-y-16 md:gap-y-0">
//         {stepsData.map((step, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center text-white relative w-full md:w-1/3"
//           >
//             {/* Number Circle */}
//             <div className="w-[80px] h-[80px] bg-white text-[#1A1A1A] rounded-full flex items-center justify-center text-[36px] font-ubuntu font-normal z-10">
//               {step.number}
//             </div>

//             {/* Horizontal Line Between Circles (Only for middle steps) */}
//             {index !== stepsData.length - 1 && (
//              <div className="hidden md:block absolute left-[70%] top-[15%] w-[220px] h-[1.5px] bg-gray-400"></div>
//               )}

//             {/* Title */}
//             <h3 className="text-[25px] font-ubuntu font-bold mt-6">
//               {step.title}
//             </h3>

//             {/* Description */}
//             <p className="text-[15px] font-ubuntu font-normal mt-2 leading-snug max-w-[280px]">
//               {step.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Path;

import React from "react";

const stepsData = [
  {
    number: "1",
    title: "Experience a GSN Circle",
    text: "Join a local or virtual session and feel the energy of meaningful, spiritually-aligned networking.",
  },
  {
    number: "2",
    title: "Connect with Visionaries",
    text: "Engage with entrepreneurs and professionals driven by purpose, innovation, and collaboration.",
  },
  {
    number: "3",
    title: "Begin Your Journey with GSN",
    text: "Apply to become a member and unlock access to referrals, growth tools, and AI-powered networking.",
  },
];

const Path = () => {
  return (
   <section
  className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#1A1A1A] bg-no-repeat bg-center bg-[length:600px]"
  style={{ backgroundImage: "url('/pathbg.png')" }}
>

      {/* ✅ Heading */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-[40px] font-ubuntu font-bold text-white leading-tight">
          Your Path to Purposeful Networking
        </h2>
        <p className="text-[18px] font-ubuntu font-normal text-white mt-6 leading-snug">
          Three simple steps to elevate your business through conscious
          connections and intelligent growth
        </p>
      </div>

      {/* ✅ Steps */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto relative gap-y-16 md:gap-y-0">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-white relative w-full md:w-1/3"
          >
            {/* Number Circle */}
            <div className="w-[80px] h-[80px] bg-white text-[#1A1A1A] rounded-full flex items-center justify-center text-[36px] font-ubuntu font-normal z-10">
              {step.number}
            </div>

            {/* Horizontal Line Between Steps (only between steps 1 and 2, and 2 and 3) */}
            {index !== stepsData.length - 1 && (
              <div className="hidden md:block absolute left-[70%] top-[15%] w-[220px] h-[1.5px] bg-gray-400">
                {/* Left Hollow Dot */}
                <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full border-2 border-white bg-[#1A1A1A]"></div>

                {/* Right Hollow Dot */}
                <div className="absolute -right-[10px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full border-2 border-white bg-[#1A1A1A]"></div>
              </div>
            )}

            {/* Title */}
            <h3 className="text-[25px] font-ubuntu font-bold mt-6">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] font-ubuntu font-normal mt-2 leading-snug max-w-[280px]">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Path;
