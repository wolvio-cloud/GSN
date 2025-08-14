import React from "react";

const nContinent = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      {/* Top section: Heading + CTA */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
        <div>
          <h2 className="text-[#153153] text-[32px] sm:text-[48px] lg:text-[45px] font-ubuntu font-bold leading-tight">
            Continent Specific
          </h2>
          <p className="text-[#183466] text-[20px] sm:text-[24px] lg:text-[26px] font-ubuntu mt-4">
            From Local Circles to Global Collaboration
          </p>
        </div>
        <button className="mt-6 lg:mt-0 bg-[#F2C063] text-black text-[16px] sm:text-[20px] font-ubuntu font-bold px-6 py-3 rounded-full">
          Get Invited
        </button>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Asia Pacific */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 md:p-5 w-full">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[28px] lg:text-[30px] mb-4">
              ASIA PACIFIC
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] md:text-[18px] lg:text-[20px] leading-relaxed">
              Australia, New Zealand, Cambodia, Bangladesh, Bhutan, East Timor,
              Guinea, China, India, Indonesia, Japan, Kazakhstan, Malaysia,
              Mongolia, Myanmar, Nepal, Pakistan, Philippines, Singapore, South
              Korea, Sri Lanka, Tajikistan, Thailand, Uzbekistan, Vietnam
            </p>
          </div>

          {/* Latin America */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 md:p-5 w-full">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[28px] lg:text-[30px] mb-4">
              LATIN AMERICA
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] md:text-[18px] lg:text-[20px] leading-relaxed">
              Argentina, Brazil, Chile, Colombia, Costa Rica, Dominican Republic,
              Ecuador, El Salvador, Guatemala, Guyana, Honduras, Jamaica,
              Nicaragua, Paraguay, Panamá, Perú, Puerto Rico, Suriname, Trinidad
              and Tobago, Uruguay
            </p>
          </div>
        </div>

        {/* Center Column */}
        <div className="space-y-8">
          {/* Europe */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 md:p-8 w-full">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[32px] lg:text-[30px] mb-4">
              EUROPE
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] md:text-[22px] lg:text-[20px] leading-relaxed">
              Albania, Armenia, Austria, Azerbaijan, Bosnia & Herzegovina,
              Belgium, Bulgaria, Cyprus, Croatia, Czechia, Denmark, Estonia,
              Finland, France, Germany, Georgia, Greece, Hungary, Ireland,
              Italy, Kosovo, Latvia, Lithuania, Luxembourg, Malta, Moldova,
              Montenegro, Netherlands, North Macedonia, Norway, Poland,
              Portugal, Romania, Serbia, Spain, Slovakia, Slovenia, Sweden,
              Switzerland, Turkey, United Kingdom
            </p>
          </div>

          {/* North America */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 md:p-6 w-full">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[32px] lg:text-[30px] mb-4">
              NORTH AMERICA
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] md:text-[22px] lg:text-[20px] leading-relaxed">
              Barbados, Canada, Mexico, United States
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#D2DCE4] rounded-xl p-6 md:p-9 w-full h-fit">
          <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[32px] lg:text-[30px] mb-4">
            MIDDLE EAST & AFRICA
          </h3>
          <p className="text-[#153153] font-ubuntu text-[18px] md:text-[22px] lg:text-[20px] leading-relaxed">
            Bahrain, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi, United
            Arab Emirates, Algeria, Angola, Benin, Botswana, Burundi, Cameroon,
            Central African Republic, Comoros, Democratic Republic of the Congo,
            Djibouti, Eritrea, Egypt, Equatorial Guinea, Eswatini, Ethiopia,
            Ghana, Gabon, Guinea, Guinea-Bissau, Ivory Coast, Kenya, Lesotho,
            Liberia, Libya, Madagascar, Malawi, Mali, Mauritania, Mauritius,
            Morocco, Mozambique, Namibia, Nigeria, Niger, Republic of the Congo,
            Rwanda, Senegal, Sierra Leone, Tanzania, The Gambia, Togo, South
            Africa, Sudan, Tunisia, Uganda, Zambia, Zimbabwe
          </p>
        </div>
      </div>
    </section>
  );
};

export default nContinent;
