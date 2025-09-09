
import React from "react";
import { FaAward, FaShieldAlt } from "react-icons/fa";

const cardsData = [
  {
    icon: <FaAward size={30} />,
    title: "Verified Member Network",
    text: "Connect with trusted professionals from diverse industries, all verified through GSN’s secure onboarding.",
    line: "top-right",
    iconPosition: "left",
  },
  {
    icon: <img src="/tickIcon.png" alt="tick" className="w-[30px] h-[30px]" />,
    title: "Quality Referrals",
    text: "Receive and share high-quality referrals that match your expertise, values, and business goals.",
    line: "top-left",
    iconPosition: "right",
  },
  {
    icon: (
      <img
        src="/morningIcon.png"
        alt="Morning"
        className="w-[30px] h-[30px]"
      />
    ),
    title: "Spiritual Networking",
    text: "Participate in mindful sessions and conscious connections that fuel inner clarity and meaningful success.",
    line: "bottom-right",
    iconPosition: "left",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Secure Business Hub",
    text: "Your data, connections, and interactions are protected with end-to-end encrypted communication on GSN.",
    line: "bottom-left",
    iconPosition: "right",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 -mt-4">
      <div className="mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center relative overflow-visible">
        {cardsData.map((card, index) => {
          const isIconRight = card.iconPosition === "right";

          return (
            <div
              key={index}
              className="relative group rounded-2xl border border-gray-300 p-6 bg-white 
                shadow-md transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer 
                w-[100%] text-left z-10 overflow-visible"
            >
              {/* === LINE WITH DOT === */}
              {card.line === "top-right" && (
                <div className="absolute top-[36px] right-[-1px] w-[65px] h-[7px] bg-gray-200 z-10 rounded-l-full">
                  <div className="absolute right-17 -top-[3px] w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
              )}
              {card.line === "top-left" && (
                <div className="absolute top-[36px] left-[-1px] w-[65px] h-[7px] bg-gray-200 z-10 rounded-r-full">
                  <div className="absolute left-17 -top-[3px] w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
              )}
              {card.line === "bottom-right" && (
                <div className="absolute bottom-[10px] right-[-1px] w-[75px] h-[7px] bg-gray-200 z-10 rounded-l-full">
                  <div className="absolute right-19 -top-[3px] w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
              )}
              {card.line === "bottom-left" && (
                <div className="absolute bottom-[10px] left-[-1px] w-[75px] h-[7px] bg-gray-200 z-10 rounded-r-full">
                  <div className="absolute left-19 -top-[3px] w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
              )}

              {/* === ICON === */}
              <div
                className={`mb-6 ${isIconRight ? "flex justify-end" : "text-[#324456]"
                  } group-hover:text-white transition-colors duration-300`}
              >
                {typeof card.icon.type === "string" ? (
                  // It's an image-based icon
                  <div className="group-hover:brightness-0 group-hover:invert transition duration-300">
                    {card.icon}
                  </div>
                ) : (
                  // It's a React icon (FaAward, FaShieldAlt)
                  card.icon
                )}
              </div>

              {/* === TITLE === */}
              <h3 className="text-[17px] font-ubuntu font-bold mb-2 text-[#1A1A1A] group-hover:text-white transition duration-300">
                {card.title}
              </h3>

              {/* === TEXT === */}
              <p className="text-[14px] font-ubuntu leading-snug text-[#1A1A1A] group-hover:text-white transition duration-300">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
