import React from "react";

const Gainexp = () => {
  const cards = [
    {
      title: "Purpose-Driven Networking",
      desc: "Engage in relationships built on trust, values, and spiritual alignment — not just transactions",
      image: "/experience/gaincard/c1.webp",
    },
    {
      title: "Global Business Exposure",
      desc: "Showcase your services to a growing international network across multiple industries and countries",
      image: "/experience/gaincard/c2.webp",
    },
    {
      title: "Referral-Focused Growth",
      desc: "Access a high-trust referral system that helps you attract clients who already believe in your value.",
      image: "/experience/gaincard/c3.webp",
    },
    {
      title: "Weekly Networking Circles",
      desc: "Attend powerful sessions where members exchange ideas, opportunities, and support consistently.",
      image: "/experience/gaincard/c4.webp",
    },
    {
      title: "Exclusive Learning Resources",
      desc: "Get access to workshops, insights, and tools to sharpen your business, tech, and communication skills.",
      image: "/experience/gaincard/c5.webp",
    },
    {
      title: "AI-Powered Matchmaking",
      desc: "Smart technology connects you with the most relevant professionals for meaningful collaboration and referrals.",
      image: "/experience/gaincard/c6.webp",
    },
    {
      title: "Supportive Community",
      desc: "Be part of a collective that celebrates collaboration over competition and thrives on shared success",
      image: "/experience/gaincard/c7.webp",
    },
    {
      title: "Leadership Development",
      desc: "Grow not just professionally, but personally — with mindfulness-driven leadership and growth sessions.",
      image: "/experience/gaincard/c8.webp",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] sm:text-[32px] md:text-[42px] text-black font-bold text-center font-ubuntu mb-12">
          What you gain with GSN
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-35 sm:h-44 md:h-35 object-cover rounded-xl mb-4"
              />
              <h3 className="text-[20px] sm:text-[17px] font-ubuntu font-bold mb-2 text-black">
                {card.title}
              </h3>
              <p className="text-[16px] sm:text-[14px] font-ubuntu text-gray-800 leading-snug">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gainexp;
