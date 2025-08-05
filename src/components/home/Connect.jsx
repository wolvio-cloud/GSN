

import React from "react";

const Connect = () => {
  const cards = [
    {
      title: "AI-Enhanced Business Connections",
      desc: "GSN's smart matchmaking connects you with the most relevant members based on industry, goals, and values.",
      image: "/connect1.png",
      index: "01",
    },
    {
      title: "Conscious Collaboration Culture",
      desc: "We believe growth should align with values. GSN integrates mindfulness and spiritual principles into networking.",
      image: "/connect2.png",
      index: "02",
    },
    {
      title: "Tools to Scale Your Business",
      desc: "Everything you need to grow your network and elevate your business in one intelligent platform.",
      image: "/connect3.png",
      index: "03",
    },
  ];

  const webCardHeight = 480;
    const webGap = 30;
  const mobileGap = 12;

  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-16 lg:px-24 ">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-tight ">
          Connect · Evolve · Thrive
        </h2>
        <p className="text-[16px] sm:text-[20px] font-ubuntu text-[#1A1A1A] mt-4 sm:mt-6 leading-snug">
          Unlock the power of conscious Networking and AI Driven Collaboration
        </p>
      </div>

      {/* Cards */}
      <div
        className="relative"
        style={{
          height: `calc(${cards.length} * (${webCardHeight}px + ${webGap}px))`,
        }}
      >
        {cards.map((card, i) => {
          const isReversed = card.index === "02";

          return (
            <div
              key={i}
              className={`sticky top-0 z-[${i + 1}] h-[360px] sm:h-[480px] w-full bg-[#324456] rounded-[30px] text-white overflow-hidden p-6 sm:p-10 flex flex-col sm:block`}
              style={{ transform: `translateY(${i * mobileGap}px)` }}
            >
              {/* Pattern background */}
              <div
                className={`absolute inset-y-0 ${
                  isReversed ? "left-0" : "right-0"
                } mt-8 w-1/2 bg-[#111111] opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]`}
                style={{
                  borderTopRightRadius: isReversed ? "50px" : "0px",
                  borderTopLeftRadius: isReversed ? "0px" : "50px",
                  borderBottomLeftRadius: isReversed ? "40px" : "0px",
                  borderBottomRightRadius: isReversed ? "0px" : "40px",
                }}
              ></div>

              {/* Image */}
              <img
                src={card.image}
                alt={`Connect ${card.index}`}
                className={`absolute bottom-0 ${
                  isReversed ? "left-0" : "right-0"
                } w-[190px] sm:w-[460px] h-[160px] sm:h-[350px] object-contain sm:object-cover`}
                style={{
                  borderTopLeftRadius: isReversed ? "0px" : "40px",
                  borderTopRightRadius: isReversed ? "40px" : "0px",
                  borderBottomLeftRadius: isReversed ? "20px" : "0px",
                  borderBottomRightRadius: isReversed ? "0px" : "20px",
                }}
              />

              {/* Text */}
              <div
                className={`relative z-10 mt-2 sm:mt-0 max-w-full sm:max-w-[40%] ${
                  isReversed ? "sm:ml-auto sm:text-right" : ""
                }`}
              >
                <h3 className="text-[18px] sm:text-[24px] font-ubuntu font-bold">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[18px] mt-2 sm:mt-4 font-ubuntu leading-snug">
                  {card.desc}
                </p>
              </div>

              {/* Card Number */}
              <span
                className={`text-[24px] sm:text-[40px] font-playfair absolute bottom-4 sm:bottom-6 ${
                  isReversed ? "right-6 sm:right-10" : "left-6 sm:left-10"
                }`}
              >
                {card.index}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Connect;
