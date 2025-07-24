// import React from "react";
// import { FaUsers } from "react-icons/fa";

// const Impact = () => {
//   return (
//     <section className="relative w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Left Side - Cards Grid */}
//         <div className="grid grid-cols-2 gap-6">
//           {/* Card 1 */}
//                     <div
//             className="rounded-3xl p-6 shadow-md flex flex-col justify-between w-[280px] h-[200px]"
//             style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }} // F0E68C @ 50%
//           >
//             <div>
//               <h3 className="text-l font-bold text-black">150K+</h3>
//               <p className="text-lg text-black mt-2">Growth-Oriented Members</p>
//             </div>
//             <div className="flex justify-end mt-auto">
//               <FaUsers className="text-black text-3xl" />
//             </div>
//           </div>

//           {/* Card 2 */}

//           <div
//             className="relative rounded-3xl shadow-md w-[280px] h-[200px] p-6 overflow-hidden"
//             style={{
//               background: "linear-gradient(135deg, #9C80E7 0%, #80EAF6 100%)",
//             }}
//           >
//             {/* Text */}
//             <div className="relative z-10">
//               <h3 className="text-2xl font-bold text-black">100+</h3>
//               <p className="text-lg text-black mt-2">Businesses Represented</p>
//             </div>

//             {/* Image (fills bottom-right, like Figma) */}
//             <img
//               src="/suit.png"
//               alt="Business"
//               className="absolute bottom-0 right-0 h-[120px] w-auto object-cover rounded-bl-2xl"
//             />
//           </div>

//           {/* Card 3 */}
//           <div
//             className="rounded-3xl p-6 shadow-md flex flex-col justify-between"
//             style={{
//               background: "linear-gradient(135deg, #A0E9E1 0%, #F9C7E5 100%)",
//             }}
//           >
//             <div>
//               <h3 className="text-xl font-bold text-black">
//                 AI-Driven Smart Matchmaking
//               </h3>
//               <p className="text-lg text-black mt-2">
//                 Helping members connect meaningfully and grow faster
//               </p>
//             </div>
//             <img
//               src="/graph.png" // <-- Add a graph-like image in public folder
//               alt="Smart Matchmaking"
//               className="rounded-lg mt-4"
//             />
//           </div>

//           {/* Card 4 */}
//           <div
//             className="rounded-3xl p-6 shadow-md flex flex-col justify-between"
//             style={{ backgroundColor: "rgba(145, 210, 195, 0.5)" }} // 91D2C3 @ 50%
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-black">45+ Countries</h3>
//               <p className="text-lg text-black mt-2">
//                 Open to Global Participation
//               </p>
//             </div>
//             <img
//               src="/country.png" // <-- Your provided icon in public folder
//               alt="Global Participation"
//               className="w-23 h-13 mt-4"
//             />
//           </div>
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="text-left">
//           <h2 className="text-[44px] font-ubuntu font-semibold text-[#1A1A1A]  leading-tight">
//             The GSN Impact: <br />
//             Growth, Connection & <br />
//             Purpose
//           </h2>
//           <p className="text-[16px] font-ubuntu  font-normal italic text-[#1A1A1A] mt-4 leading-relaxed">
//             At Global Success Network (GSN), we’re building more than just a
//             networking group — we’re cultivating a global ecosystem where
//             business growth meets conscious collaboration.
//             <br />
//             Here’s a glimpse into our early momentum
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Impact;
import React from "react";
import { FaUsers } from "react-icons/fa";

const Impact = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Side - Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div
            className="rounded-3xl p-4 shadow-md flex flex-col justify-between w-[270px] h-[170px] mt-10 -ml-6"
            style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }} // F0E68C @ 50%
          >
            <div>
              <h3 className="text-xl font-bold text-black mt-7">150K+</h3>
              <p className="text-[15px] text-black mt-1">
                Growth-Oriented Members
              </p>
            </div>
            <div className="flex justify-end -mt-18 ">
              <FaUsers className="text-black text-3xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-l-3xl shadow-md w-[280px] h-[230px] -mt-5 -ml-2 "
            style={{
              background: "linear-gradient(135deg, #80EAF6 0%, #9080E7 100%)",
              borderTopRightRadius: "0px", // sharp right top
              borderBottomRightRadius: "1.5rem", // keep bottom right slightly rounded if needed
            }}
          >
            {/* Text Content (left side) */}
            <div className="relative z-10 p-6 max-w-[55%]">
              <h3 className="text-[20px] font-bold text-black -ml-2">100+</h3>
              <p className="text-[15px] text-black mt-1 -ml-2">
                Businesses Represented
              </p>
            </div>

            {/* Business Image (right side, overlaps upward) */}
           <img
  src="/suit.png"
  alt="Smart Matchmaking"
  className="
    absolute
    bottom-[-155px]         /* ✅ Stick firmly to bottom */
    right-[-110px]           /* ✅ Stick to right */
    h-[500px]         /* ✅ Increase height */
    w-[500px]         /* ✅ Increase width proportionally */
    min-w-[90%]       /* ✅ Prevent overflow beyond card */
    object-contain
    z-20
  "
/>
          </div>

          {/* Card 3 */}
          <div
            className="relative rounded-r-3xl shadow-md w-[280px] h-[230px] -mt-2 -ml-6"
            style={{
              background: "linear-gradient(135deg, #F9C7E5 0%, #A0E9E1 100%)",
              borderTopLeftRadius: "0px", // sharp left top
              borderBottomLeftRadius: "1.5rem", // rounded bottom left
            }}
          >
            {/* Text Content */}
            <div className="relative z-10 p-6 max-w-[70%]">
              <h3 className="text-[18px] font-bold text-black whitespace-nowrap leading-snug -ml-2">
                AI-Driven Smart Matchmaking
              </h3>
              <p className="text-[15px] text-black mt-2 -ml-2 leading-snug min-w-[210px]">
                Helping members connect meaningfully and grow faster
              </p>
            </div>

            {/* Graph Image (bottom-right like Figma) */}
            <img
              src="/graph.png"
              alt="Smart Matchmaking"
              className="
      absolute 
      bottom-[20px] 
      right-[50px] 
      h-[65px] 
      w-auto 
      object-contain 
      z-20
    "
            />
          </div>

          {/* Card 4 */}
          <div
            className="relative rounded-3xl shadow-md  w-[270px] h-[170px] -mt-2 ml-0"
            style={{
              backgroundColor: "rgba(145, 210, 195, 0.5)", // 91D2C3 @50%
            }}
          >
            {/* Country Image at Top-Left */}
            <img
              src="/country.png"
              alt="Global Participation"
              className="
      absolute 
      top-3 
      left-4 
      h-[40px] 
      w-auto 
      object-contain
    "
            />

            {/* Content (Right side, slightly bottom shifted) */}
            <div className="absolute bottom-8 right-4 text-right">
              <h3 className="text-[18px] font-bold text-black">
                45+ Countries
              </h3>
              <p className="text-[15px] text-black mt-1">
                Open to Global Participation
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Text Content */}
        <div className="text-left pl-6 md:pl-16 -mt-28">
          {" "}
          {/* moved slightly right */}
          <h2 className="text-[44px] font-ubuntu font-normal text-[#1A1A1A] leading-[1.1] -mt-12">
            {/* -mt-4 moves heading slightly upward */}
            The GSN Impact:
            <br />
            Growth, Connection & <br />
            Purpose
          </h2>
          <p className="text-[16px] font-ubuntu  italic text-[#1A1A1A] mt-4 leading-[1.2]">
            At Global Success Network (GSN), we’re building more than just a
            networking group — we’re cultivating a global ecosystem where
            business growth meets conscious collaboration.
            <br />
            Here’s a glimpse into our early momentum
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
