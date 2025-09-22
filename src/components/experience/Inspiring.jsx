import React from "react";

const features1 = [
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
    <section className="py-6 px-3 md:py-16 md:px-16 lg:px-24 w-full bg-white">

      <div className="mx-auto px-4 md:px-6 lg:px-8">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Row 1 */}
          <div>
            <h1 className="text-2xl font-bold text-[#153153]">
              Professional & Inspiring
            </h1>
            <p className="text-lg mt-6 text-[#153153]">
              See how entrepreneurs worldwide are <br />
              transforming their businesses through <br />
              GSN's unique blend of conscious networking and<br />
              intelligent connection.
            </p>
          </div>

          {/* Spacer (hidden on mobile) */}
          <div className="hidden lg:block"></div>

          <div className="bg-[#D2DCE4] rounded-3xl p-6">
            <img
              src={features1[0].image}
              alt={features1[0].name}
              className="w-[55px] h-[55px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {features1[0].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {features1[0].title}
              </p>
            </div>
            <p className="text-[#153153] mt-4">{features1[0].content}</p>
          </div>

          {/* Row 2 – connector line (desktop only) */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:flex justify-center">
            <div className="w-[2px] bg-gray-300 h-16 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -top-2.5 -left-[5px]"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -bottom-2.5 -left-[5px]"></div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-[#D2DCE4] rounded-3xl p-6">
                <img
              src={features1[1].image}
              alt={features1[1].name}
              className="w-[55px] h-[55px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {features1[1].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {features1[1].title}
              </p>
            </div>
            <p className="text-[#153153] mt-4">{features1[1].content}</p>
          </div>

          {/* Horizontal Line (desktop only) */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full h-[2px] bg-gray-300 relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -left-2.5 -top-1.5"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-transparent absolute -right-2.5 -top-1.5"></div>
            </div>
          </div>

          <div className="bg-[#D2DCE4] rounded-3xl p-6">
               <img
              src={features1[2].image}
              alt={features1[2].name}
              className="w-[55px] h-[55px] object-cover rounded-full"
            />
            <div>
              <h3 className="text-[#153153] text-[20px] font-ubuntu font-medium">
                {features1[2].name}
              </h3>
              <p className="text-[#183466] text-[12px] font-ubuntu font-medium">
                {features1[2].title}
              </p>
            </div>
            <p className="text-[#153153] mt-4">{features1[2].content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiring;
