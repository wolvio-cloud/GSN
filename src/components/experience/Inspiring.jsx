


import React from "react";

const testimonials = [
  {
    name: "Karunamoorthy",
    title: "Waste Water Treatment",
    image: "/experience/inspiring/i1.png",
    content:
      "GSN gave me more than just business leads — it gave me purpose-driven partners who align with my values. I’ve never felt so connected to my work and network.",
  },
  {
    name: "Hariprasad",
    title: "Digital Marketing Consultant",
    image: "/experience/inspiring/i2.png",
    content:
      "GSN gave me more than just business leads — it gave me purpose-driven partners who align with my values. I’ve never felt so connected to my work and network.",
  },
  {
    name: "Sasirekha",
    title: "HVAC",
    image: "/experience/inspiring/i3.png",
    content:
      "GSN gave me more than just business leads — it gave me purpose-driven partners who align with my values. I’ve never felt so connected to my work and network.",
  },
];

const Inspiring = () => {
  return (
    <section className="bg-[#fdfdfd] py-16 px-4 md:px-20">
      {/* Heading */}
      <div className="text-left md:w-[500px] mb-10 md:ml-8">
        <h2 className="text-[#153153] text-[28px] md:text-[35px] font-ubuntu font-bold leading-snug">
          Professional & Inspiring
        </h2>
        <p className="text-[#183466] text-[16px] md:text-[18px] font-ubuntu mt-4 leading-snug">
          See how entrepreneurs worldwide are transforming their businesses
          through GSN’s unique blend of conscious networking and intelligent
          connection.
        </p>
      </div>

      {/* Cards + Connecting Lines */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center gap-5 md:gap-20 md:-mt-50">
        {/* CARD 1 */}
        <div className="relative bg-[#D2DCE4] rounded-3xl p-6 md:p-10 w-full md:w-[500px] min-h-[200px] md:self-end">
          <div className="flex items-start gap-4">
            <img
              src={testimonials[0].image}
              alt="Karunamoorthy"
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {testimonials[0].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {testimonials[0].title}
              </p>
              <p className="text-[#183466] text-[14px] font-ubuntu mt-4 leading-relaxed">
                {testimonials[0].content}
              </p>
            </div>
          </div>
        </div>

        {/* LINE + DOTS Between Card 1 & 2 */}
        <div className="w-[2px] h-12 bg-[#8d8e91] relative  flex-col items-center md:-mt-16 md:ml-150 hidden md:flex ">
          <div className="w-3 h-3 rounded-full bg-[#8d8e91] absolute -top-2"></div>
          <div className="w-3 h-3 rounded-full bg-[#8d8e91] absolute -bottom-2"></div>
        </div>

        {/* CARD 2 */}
        <div className="relative bg-[#D2DCE4] rounded-3xl p-6 md:p-10 w-full md:w-[500px] min-h-[200px] md:self-end md:-mt-18  ">
          <div className="flex items-start gap-4">
            <img
              src={testimonials[1].image}
              alt="Hariprasad"
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {testimonials[1].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {testimonials[1].title}
              </p>
              <p className="text-[#183466] text-[14px] font-ubuntu mt-4 leading-relaxed">
                {testimonials[1].content}
              </p>
            </div>
          </div>
        </div>

        {/* HORIZONTAL LINE Between Card 2 & 3 */}
        <div className="h-[2px] w-full max-w-[90px] bg-[#8d8e91] relative  items-center justify-center  md:-mt-50 hidden md:flex">
          <div className="w-3 h-3 rounded-full bg-[#8d8e91] absolute -left-2"></div>
          <div className="w-3 h-3 rounded-full bg-[#8d8e91] absolute -right-2"></div>
        </div>

        {/* CARD 3 */}
        <div className="relative bg-[#D2DCE4] rounded-3xl p-6 md:p-10 w-full md:w-[500px] min-h-[200px] md:self-start mt-8 md:-top-50">
          <div className="flex items-start gap-4">
            <img
              src={testimonials[2].image}
              alt="Sasirekha"
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {testimonials[2].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {testimonials[2].title}
              </p>
              <p className="text-[#183466] text-[14px] font-ubuntu mt-4 leading-relaxed">
                {testimonials[2].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiring;
