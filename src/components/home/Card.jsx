import React from "react";
import { FaAward,FaShieldAlt } from "react-icons/fa";

const cardsData = [
  {
    icon: <FaAward size={30} />,
    title: "Verified Member Network",
    text: "Connect with trusted professionals from diverse industries, all verified through GSN’s secure onboarding.",
  },
  {
    icon: <img src="/tickIcon.png" alt="tick" className="w-[30px] h-[30px] " />,
    title: "Quality Referrals",
    text: "Receive and share high-quality referrals that match your expertise, values, and business goals.",
  },
  {
   icon: <img src="/morningIcon.png" alt="Morning Icon" className="w-[30px] h-[30px]" />,
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-300 p-6 bg-white 
                       shadow-md transition-all duration-300 
                       hover:bg-[#324456] hover:shadow-lg cursor-pointer w-[270px] text-left"
          >
            {/* ✅ Icon Hover Logic */}
            {card.title === "Spiritual Networking" ? (
              // Morning Icon hover effect
              <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition duration-300">
                <img
                  src="/morningIcon.png"
                  alt="Morning Icon"
                  className="w-[30px] h-[30px]"
                />
              </div>
            ) : card.title === "Quality Referrals" ? (
              // Tick Icon hover effect
              <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition duration-300">
                <img
                  src="/tickIcon.png"
                  alt="Tick Icon"
                  className="w-[30px] h-[30px]"
                />
              </div>
            ) : (
              // Default React Icons hover
              <div className="text-[#324456] group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
            )}


            {/* ✅ Title */}
            <h3
              className="text-[17px] font-ubuntu font-bold mt-10 text-[#1A1A1A] 
                         group-hover:text-white transition-colors duration-300"
            >
              {card.title}
            </h3>

            {/* ✅ Text */}
            <p
              className="text-[14px] font-ubuntu mt-2 text-[#1A1A1A] leading-snug 
                         group-hover:text-white transition-colors duration-300"
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Cards;