import React, { useEffect, useRef } from "react";

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

  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const nextCard = cardRefs.current[i + 1];
        if (!nextCard) return;

        const cardRect = card.getBoundingClientRect();
        console.log("cardRect",cardRect);
        
        const nextRect = nextCard.getBoundingClientRect();

        // Distance between next card's top and current card's top
        const overlap = cardRect.height - (nextRect.top - cardRect.top);

        if (overlap > 0) {
          const start = cardRect.height * 0.2; // 30% point
          const end = cardRect.height * 1;   // 90% point

          let progress = (overlap - start) / (end - start);
          progress = Math.min(Math.max(progress, 0), 1); // clamp 0-1

          const scale = 1 - progress * 0.2; // shrink to 70%
          const opacity = 1 - progress; // fade out

          card.style.transform = `scale(${scale})`;
          card.style.opacity = opacity;
        } else {
          // Reset if not overlapped
          card.style.transform = "scale(1)";
          card.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log("ref",cardRefs)
  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-tight">
          Connect · Evolve · Thrive
        </h2>
        <p className="text-[16px] sm:text-[20px] font-ubuntu text-[#1A1A1A] mt-4 sm:mt-6 leading-snug">
          Unlock the power of conscious Networking and AI Driven Collaboration
        </p>
      </div>

      {/* Cards */}
      <div className="relative space-y-8">
        {cards.map((card, i) => {
          const isReversed = card.index === "02"
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="sticky top-24 h-[360px] sm:h-[480px] w-full bg-[#324456] rounded-[30px] text-white overflow-hidden p-6 sm:p-10 transition-transform duration-200 ease-out will-change-transform will-change-opacity"
            >
              {/* Background pattern */}
              <div
                className={`absolute inset-y-0 ${isReversed ? "left-0" : "right-0"
                  } mt-8 w-1/2 bg-[#111111] opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]`}
              ></div>

              {/* Image */}
              <img
                src={card.image}
                alt={`Connect ${card.index}`}
                className={`absolute bottom-0 ${isReversed ? "left-0" : "right-0"
                  } w-[190px] sm:w-[460px] h-[160px] sm:h-[350px] object-contain sm:object-cover`}
              />

              {/* Text */}
              <div
                className={`relative z-10 mt-2 sm:mt-0 max-w-full sm:max-w-[40%] ${isReversed ? "sm:ml-auto sm:text-right" : ""
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
                className={`text-[24px] sm:text-[40px] font-playfair absolute bottom-4 sm:bottom-6 ${isReversed ? "right-6 sm:right-10" : "left-6 sm:left-10"
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
