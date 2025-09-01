// import React from "react";

// const features1 = [
//   {
//     title: "Purpose-Driven Business",
//     description:
//       "GSN encourages entrepreneurs to stay grounded in their values while scaling their ventures with clarity and intention.",
//   },
//   {
//     title: "Ethical Entrepreneurship",
//     description:
//       "Integrity isn’t optional - it’s foundational. Our community uplifts businesses that lead with ethics, empathy, and sustainability.",
//   },
//   {
//     title: "Collective Empowerment",
//     description:
//       "GSN is not a competition. It’s a collective - where collaboration fuels momentum, and every win is shared.",
//   },
// ];

// const ContentSection2 = () => {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
//           {/* Left Column */}
//           <div className="flex flex-col justify-start space-y-8 h-full">
//             <div className="md:ml-6 lg:ml-15">
//               <h1 className="text-2xl sm:text-2xl font-bold text-[#153153] leading-tight">
//                 Growth With Purpose
//               </h1>
//               <p className="text-lg sm:text-xl text-[#153153] mt-6">
//                 We believe true success goes beyond revenue.
//                 GSN fosters holistic growth - helping members
//                 expand their businesses while remaining aligned
//                 with their deeper purpose
//               </p>
//             </div>

//             <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full mt-6 md:mt-10 md:ml-6 lg:ml-10">
//               <h3 className="text-2xl font-bold text-[#153153]">{features1[0].title}</h3>
//               <p className="text-[#153153] mt-4">{features1[0].description}</p>
//             </div>
//           </div>

//           {/* Center Lines */}
//           <div className="hidden lg:flex flex-col items-center relative">
//             {/* Vertical Line */}
//             <div className="w-[2px] h-[18px]  bg-gray-300 relative mt-[260px] lg:ml-190">
//               <div className="w-2 h-2 rounded-full bg-gray-300 absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
//               <div className="w-2 h-2 rounded-full  bg-gray-300 absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
//             </div>

//             {/* Horizontal Line */}
//             <div className="w-[420px] h-[2px]  bg-gray-300 relative mt-[120px]">
//               <div className="w-3 h-3 rounded-full bg-gray-300 absolute -left-1.5 -top-1.5"></div>
//               <div className="w-3 h-3 rounded-full  bg-gray-300 absolute -right-1.5 -top-1.5"></div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col justify-start space-y-8 h-full">
//             <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full md:mr-6 lg:mr-8">
//               <h3 className="text-2xl font-bold text-[#153153]">{features1[1].title}</h3>
//               <p className="text-[#153153] mt-4">{features1[1].description}</p>
//             </div>

//             <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full md:mr-6 lg:mr-8">
//               <h3 className="text-2xl font-bold text-[#153153]">{features1[2].title}</h3>
//               <p className="text-[#153153] mt-4">{features1[2].description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContentSection2;

import React from "react";

const features1 = [
  {
    title: "Purpose-Driven Business",
    description:
      "GSN encourages entrepreneurs to stay grounded in their values while scaling their ventures with clarity and intention.",
  },
  {
    title: "Ethical Entrepreneurship",
    description:
      "Integrity isn’t optional - it’s foundational. Our community uplifts businesses that lead with ethics, empathy, and sustainability.",
  },
  {
    title: "Collective Empowerment",
    description:
      "GSN is not a competition. It’s a collective - where collaboration fuels momentum, and every win is shared.",
  },
];

const ContentSection2 = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* ✅ Right Column moved to Left side */}
          <div className="flex flex-col justify-start space-y-16 h-full order-2 lg:order-1  w-full md:w-[120%] md:ml-8 lg:ml-10 ">
            <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full md:mr-6 lg:mr-8">
              <h3 className="text-2xl font-bold text-[#153153]">
                {features1[1].title}
              </h3>
              <p className="text-[#153153] mt-4">{features1[1].description}</p>
            </div>

            <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full md:mr-6 lg:mr-8 md:mt-1">
              <h3 className="text-2xl font-bold text-[#153153]">
                {features1[2].title}
              </h3>
              <p className="text-[#153153] mt-4">{features1[2].description}</p>
            </div>
          </div>

          {/* Center Lines */}
          <div className="hidden lg:flex flex-col items-center relative order-2">
            {/* Vertical Line (center-left with hollow dots) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-45 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent mb-0"></div>
              <div className="w-[2px] h-[31px] bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent mt-0"></div>
            </div>

            {/* Horizontal Line */}
            <div className="w-[290px] h-[2px] bg-gray-300 relative mt-[350px] ml-10">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -left-2.5 -top-1.5"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -right-2.5 -top-1.5"></div>
            </div>
          </div>

          {/* ✅ Left Column moved to Right side */}
          <div className="flex flex-col justify-start space-y-8 h-full w-full md:w-[120%] md:-ml-18 lg:-ml-20 order-1 lg:order-3 ">
            <div className="md:ml-6 lg:ml-13">
              <h1 className="text-2xl sm:text-2xl font-bold text-[#153153] leading-tight">
                Growth With Purpose
              </h1>
              <p className="text-lg sm:text-xl text-[#153153] mt-6">
                We believe true success goes beyond revenue. GSN fosters
                holistic growth - helping members expand their businesses while
                remaining aligned with their deeper purpose
              </p>
            </div>

            <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 h-full mt-6 md:mt-5 md:ml-6 lg:ml-10">
              <h3 className="text-2xl font-bold text-[#153153]">
                {features1[0].title}
              </h3>
              <p className="text-[#153153] mt-4">{features1[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection2;
