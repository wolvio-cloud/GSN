import React from "react";

const testimonials = [
  {
    name: "Karunamoorthy",
    title: "Waste Water Treatment",
    image: "/experience/inspiring/i1.webp",
    content:
      "GSN gave me more than just business leads — it gave me purpose-driven partners who align with my values. I've never felt so connected to my work and network.",
  },
  {
    name: "Hariprasad",
    title: "Digital Marketing Consultant",
    image: "/experience/inspiring/i2.webp",
    content:
      "GSN gave me more than just business leads — it gave me purpose-driven partners who align with my values. I've never felt so connected to my work and network.",
  },
  {
    name: "Sasirekha",
    title: "HVAC",
    image: "/experience/inspiring/i3.webp",
    content:
      "GSN gave me more than just business leads — it gave me purpose-driven partners who align with my values. I've never felt so connected to my work and network.",
  },
];

const Inspiring = () => {
  return (
  <section className="py-6 px-3 sm:py-16 sm:px-6 md:px-16 lg:px-24 w-full bg-white">

      <div className="mx-auto px-4 md:px-6 lg:px-8 relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 → Heading & Description */}
        <div>
          <h2 className="text-[#153153] text-[28px] md:text-[35px] font-ubuntu font-bold leading-snug">
            Professional & Inspiring
          </h2>
          <p className="text-[#183466] text-[16px] md:text-[18px] font-ubuntu mt-4 leading-snug">
            See how entrepreneurs worldwide are <br />
            transforming their businesses through <br />
            GSN's unique blend of conscious networking and<br />
            intelligent connection.
          </p>

        </div>

        {/* Card 2 */}
        <div className="relative bg-[#D2DCE4] rounded-3xl p-6 md:p-8 shadow-sm">
          {/* Connector (Card 2 → Card 4 vertical) */}
          <div className="absolute left-1/2 bottom-0 translate-y-full -translate-x-1/2 hidden md:flex flex-col items-center">
            <div className="h-6 w-[2px] bg-[#8d8e91] relative">
              {/* Dot at Card 2 bottom */}
              <div className="w-3 h-3 rounded-full border-1 border-[#8d8e91] bg-white absolute -top-0 left-1/2 -translate-x-1/2"></div>
              {/* Floating dot above Card 4 */}
              <div className="w-3 h-3 rounded-full border-1 border-[#8d8e91] bg-white absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="w-[55px] h-[55px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {testimonials[0].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {testimonials[0].title}
              </p>
            </div>
          </div>
          <p className="text-[#183466] text-[14px] font-ubuntu mt-12 mb-5 leading-relaxed">
            {testimonials[0].content}
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-[#D2DCE4] rounded-3xl p-6 md:p-8 shadow-sm">
          {/* Connector (Card 3 → Card 4 horizontal) */}
          <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 hidden md:flex items-center">
            <div className="w-6 h-[2px] bg-[#8d8e91] relative">
              {/* Dot at Card 3 right */}
              <div className="w-3 h-3 rounded-full border-2 border-[#8d8e91] bg-white absolute -left-1 top-1/2 -translate-y-1/2"></div>
              {/* Floating dot left of Card 4 */}
              <div className="w-3 h-3 rounded-full border-2 border-[#8d8e91] bg-white absolute -right-3 top-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src={testimonials[1].image}
              alt={testimonials[1].name}
              className="w-[55px] h-[55px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {testimonials[1].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {testimonials[1].title}
              </p>
            </div>
          </div>
          <p className="text-[#183466] text-[14px] font-ubuntu mt-12 mb-5 leading-relaxed">
            {testimonials[1].content}
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#D2DCE4] rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <img
              src={testimonials[2].image}
              alt={testimonials[2].name}
              className="w-[55px] h-[55px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {testimonials[2].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {testimonials[2].title}
              </p>
            </div>
          </div>
          <p className="text-[#183466] text-[14px] font-ubuntu mt-12 mb-5 leading-relaxed">
            {testimonials[2].content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inspiring;
