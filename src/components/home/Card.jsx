import React from "react";
import { FaAward, FaShieldAlt } from "react-icons/fa";

const cardsData = [
  {
    icon: <FaAward size={30} />,
    title: "Verified Member Network",
    text: "Connect with trusted professionals from diverse industries, all verified through GSN’s secure onboarding.",
  },
  {
    icon: <img src="/tickIcon.png" alt="tick" className="w-[30px] h-[30px]" />,
    title: "Quality Referrals",
    text: "Receive and share high-quality referrals that match your expertise, values, and business goals.",
  },
  {
    icon: (
      <img
        src="/morningIcon.png"
        alt="Morning Icon"
        className="w-[30px] h-[30px]"
      />
    ),
    title: "Spiritual Networking",
    text: "Participate in mindful sessions and conscious connections that fuel inner clarity and meaningful success.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Secure Business Hub",
    text: "Your data, connections, and interactions are protected with end-to-end encrypted communication on GSN.",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 -mt-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-300 p-6 bg-white 
              shadow-md transition-all duration-300 
              hover:bg-[#324456] active:bg-[#324456] focus:bg-[#324456]
              hover:shadow-lg active:shadow-lg focus:shadow-lg
              cursor-pointer w-[270px] text-left"
          >
            {/* ✅ Icon Hover Logic */}
            {card.title === "Spiritual Networking" ? (
              <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition duration-300">
                <img
                  src="/morningIcon.png"
                  alt="Morning Icon"
                  className="w-[30px] h-[30px]"
                />
              </div>
            ) : card.title === "Quality Referrals" ? (
              <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition duration-300">
                <img
                  src="/tickIcon.png"
                  alt="Tick Icon"
                  className="w-[30px] h-[30px]"
                />
              </div>
            ) : (
              <div className="text-[#324456] group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
            )}

            {/* ✅ Title */}
            <h3 className="text-[17px] font-ubuntu font-bold mt-10 text-[#1A1A1A] group-hover:text-white active:text-white focus:text-white transition-colors duration-300">
              {card.title}
            </h3>

            {/* ✅ Text */}
            <p className="text-[14px] font-ubuntu mt-2 text-[#1A1A1A] leading-snug group-hover:text-white active:text-white focus:text-white transition-colors duration-300">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;


// import React, { useState } from "react";
// import { FaAward, FaShieldAlt } from "react-icons/fa";

// const cardsData = [
//   {
//     key: "verified",
//     icon: <FaAward size={30} />,
//     title: "Verified Member Network",
//     text: "Connect with trusted professionals from diverse industries, all verified through GSN’s secure onboarding.",
//   },
//   {
//     key: "referrals",
//     icon: "/tickIcon.png",
//     title: "Quality Referrals",
//     text: "Receive and share high-quality referrals that match your expertise, values, and business goals.",
//   },
//   {
//     key: "spiritual",
//     icon: "/morningIcon.png",
//     title: "Spiritual Networking",
//     text: "Participate in mindful sessions and conscious connections that fuel inner clarity and meaningful success.",
//   },
//   {
//     key: "secure",
//     icon: <FaShieldAlt size={30} />,
//     title: "Secure Business Hub",
//     text: "Your data, connections, and interactions are protected with end-to-end encrypted communication on GSN.",
//   },
// ];

// const Cards = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const handleTouch = (key) => {
//     setActiveCard((prev) => (prev === key ? null : key));
//   };

//   return (
//     <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 -mt-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
//         {cardsData.map((card, index) => {
//           const isActive = activeCard === card.key;

//           return (
//             <div
//               key={index}
//               onClick={() => handleTouch(card.key)}
//               className={`group rounded-2xl border border-gray-300 p-6 bg-white shadow-md transition-all duration-300 cursor-pointer w-[270px] text-left
//               ${isActive ? "bg-[#324456]" : "hover:bg-[#324456]"} 
//               ${isActive ? "text-white" : "text-[#1A1A1A]"}`}
//             >
//               {/* Icon */}
//               <div className="mb-4">
//                 {typeof card.icon === "string" ? (
//                   <img
//                     src={card.icon}
//                     alt={card.title}
//                     className={`w-[30px] h-[30px] transition duration-300 
//                       ${isActive ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"}`}
//                   />
//                 ) : (
//                   <div
//                     className={`transition duration-300 
//                     ${isActive ? "text-white" : "text-[#324456] group-hover:text-white"}`}
//                   >
//                     {card.icon}
//                   </div>
//                 )}
//               </div>

//               {/* Title */}
//               <h3
//                 className={`text-[17px] font-ubuntu font-bold mb-2 transition-colors duration-300 
//                 ${isActive ? "text-white" : "text-[#1A1A1A] group-hover:text-white"}`}
//               >
//                 {card.title}
//               </h3>

//               {/* Description */}
//               <p
//                 className={`text-[14px] font-ubuntu leading-snug transition-colors duration-300 
//                 ${isActive ? "text-white" : "text-[#1A1A1A] group-hover:text-white"}`}
//               >
//                 {card.text}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Cards;
