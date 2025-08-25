import React from "react";

const topCards = [
  {
    number: "01",
    title: "Purpose-Driven Connection",
    text:
      "We believe real success starts with meaningful relationships. Every interaction is rooted in trust, intention, and shared values.",
  },
  {
    number: "02",
    title: "Collaboration Over Competition",
    text:
      "GSN fosters a community where professionals lift each other up. We grow stronger together — not by outpacing, but by empowering.",
  },
];

const bottomCards = [
  {
    number: "06",
    title: "Global Unity",
    text:
      "GSN connects individuals across borders, creating a unified space where diversity is celebrated and collective success is shared.",
  },
  {
    number: "05",
    title: "Spiritual Alignment",
    text:
      "Our work is an extension of who we are. We honor mindfulness, ethics, and inner clarity in every step of the journey.",
  },
  {
    number: "04",
    title: "Innovation with Intention",
    text:
      "Technology like AI should serve human growth. We use smart tools to build smarter, more intentional networks.",
  },
  {
    number: "03",
    title: "Conscious Leadership",
    text:
      "We lead with integrity, empathy, and awareness — inspiring growth that’s not only profitable but aligned with a higher purpose.",
  },
];

/* Connector with hollow dots */
const Connector = ({ width = 64 }) => (
  <div className="hidden lg:flex items-center justify-center" style={{ width }}>
    <div className="relative w-full h-1 bg-gray-300 rounded-full">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-gray-400 bg-white"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-gray-400 bg-white"></div>
    </div>
  </div>
);

const Card = ({ number, title, text }) => (
  <div className="w-full lg:w-[270px] h-[300px] flex">
    <div className="relative bg-[#D2DCE4] rounded-2xl p-6 md:p-8 w-full h-full flex flex-col">
      {/* faded number */}
      <span className="absolute top-2 right-4 -mt-6 md:mt-0 text-[64px] md:text-[50px] font-ubuntu font-bold text-[#737576] opacity-40 select-none pointer-events-none">
        {number}
      </span>

      {/* content */}
      <h3 className="text-[22px] md:text-[22px] font-ubuntu font-bold text-[#153153] mt-10 leading-snug">
        {title}
      </h3>
      <p className="text-[16px] md:text-[15px] text-[#153153] mt-5 leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

const CoreValues = () => {
  return (
    <section className="py-20 px-6 lg:px-24 bg-white overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="lg:w-1/2 mt-10">
            <h2 className="text-[50px] md:text-[56px] lg:text-[40px] font-ubuntu font-bold text-[#153153] leading-tight">
              Core Values
            </h2>
            <p className="mt-6 text-[18px] md:text-[20px] text-[#153153] max-w-xl leading-relaxed">
              GSN is grounded in a set of conscious principles that guide how our
              members connect, grow, and lead. These values shape every
              interaction and define the heart of our global community.
            </p>
          </div>

          <div className="lg:w-1/3 flex flex-col items-end">
            <p className="text-right text-[18px]  md:text-[24px] md:mt-20 text-[#183466] font-ubuntu font-bold">
              we’re <span className="font-extrabold">reimagining</span> how the
              world grows together
            </p>
          </div>
        </div>

        {/* Cards section */}
        <div className="mt-12">
          {/* MOBILE: stacked in numeric order */}
          <div className="flex flex-col gap-6 lg:hidden">
            {[...topCards, ...bottomCards]
              .sort((a, b) => Number(a.number) - Number(b.number))
              .map((card) => (
                <Card key={card.number} {...card} />
              ))}
          </div>

          {/* DESKTOP: two rows with connectors */}
          <div className="hidden lg:block">
            {/* Top row (right-aligned) */}
            <div className="flex items-center justify-end gap-0">
              <Card {...topCards[0]} />
              <Connector width={50} />
              <Card {...topCards[1]} />
            </div>

            {/* reduced gap between rows */}
            <div className="h-8" />

            {/* Bottom row */}
            <div className="flex items-center gap-0">
              {bottomCards.map((c, idx) => (
                <React.Fragment key={c.number}>
                  <Card {...c} />
                  {idx !== bottomCards.length - 1 && (
                    <Connector width={50} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
