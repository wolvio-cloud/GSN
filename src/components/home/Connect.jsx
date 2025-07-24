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

  const cardHeight = 480;
  const gap = 20;
  const totalHeight = cards.length * (cardHeight + gap);

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-24">
        <h2 className="text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-tight -mt-12">
          Connect · Evolve · Thrive
        </h2>
        <p className="text-[23px] font-ubuntu text-[#1A1A1A] mt-6 leading-snug">
          Unlock the power of conscious Networking and AI Driven Collaboration
        </p>
      </div>

      {/* Cards */}
      <div className="relative" style={{ height: `${totalHeight}px` }}>
        {cards.map((card, i) => {
          const isReversed = card.index === "02";

          return (
            <div
              key={i}
              className={`sticky top-0 z-[${i + 1}] h-[480px] w-full bg-[#324456] rounded-[50px] text-white overflow-hidden p-10`}
              style={{
                transform: `translateY(${i * gap}px)`,
              }}
            >
              <div
                className={`absolute inset-y-0 ${
                  isReversed ? "left-0" : "right-0"
                } mt-8 w-1/2 bg-[#2a3947] opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]`}
                style={{
                  borderTopRightRadius: isReversed ? "0px" : "50px",
                  borderTopLeftRadius: isReversed ? "50px" : "0px",
                  borderBottomLeftRadius: isReversed ? "40px" : "0px",
                  borderBottomRightRadius: isReversed ? "0px" : "40px",
                }}
              ></div>

              <img
                src={card.image}
                alt={`Connect ${card.index}`}
                className={`absolute bottom-0 ${
                  isReversed ? "left-0" : "right-0"
                } w-[450px] h-[350px] object-cover`}
                style={{
                  borderTopLeftRadius: isReversed ? "0px" : "40px",
                  borderTopRightRadius: isReversed ? "40px" : "0px",
                  borderBottomLeftRadius: isReversed ? "40px" : "0px",
                  borderBottomRightRadius: isReversed ? "0px" : "40px",
                }}
              />

              <div
                className={`max-w-[40%] ${
                  isReversed ? "ml-auto text-right" : ""
                }`}
              >
                <h3 className="text-[24px] font-ubuntu font-bold">
                  {card.title}
                </h3>
                <p className="text-[18px] mt-4 font-ubuntu leading-snug">
                  {card.desc}
                </p>
              </div>

              <span
                className={`text-[40px] font-playfair absolute bottom-6 ${
                  isReversed ? "right-10" : "left-10"
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
