import React from "react";
import { Link } from "react-router-dom";

const nContinent = () => {
  return (
    <section className="py-6 px-6 md:px-16 lg:px-24 bg-white">
      {/* Top section: Heading + CTA */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
        <div>
          <h2 className="text-[#153153] text-[32px] sm:text-[48px] lg:text-[40px] font-ubuntu font-bold leading-tight">
            Continent Specific
          </h2>
          <p className="text-[#183466] text-[20px] sm:text-[24px] lg:text-[24px] font-ubuntu mt-4">
            From Local Circles to Global Collaboration
          </p>
        </div>

        {/* ✅ Fixed CTA Button */}
        <Link
          to="/"
          state={{ scrollTo: "contact" }}
          className="mt-6 lg:mt-0 bg-[#F2C063] text-black text-[16px] sm:text-[18px] font-ubuntu font-bold px-6 py-3 rounded-full hover:brightness-105 transition"
        >
          Get Invited
        </Link>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col gap-8 h-full">
          {/* Asia Pacific */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 flex flex-col flex-1">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[28px] lg:text-[25px] mb-4">
              ASIA PACIFIC
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] leading-relaxed">
              Australia, New Zealand, Cambodia, Bangladesh, Bhutan, East Timor, Guinea, China, India, Indonesia, Japan, Kazakhstan, Malaysia, Mongolia, Myanmar, Nepal, Pakistan, Philippines, Singapore, South Korea, Sri Lanka, Tajikistan, Thailand, Uzbekistan, Vietnam
            </p>
          </div>

          {/* Latin America */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 flex flex-col flex-1">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[28px] lg:text-[25px] mb-4">
              LATIN AMERICA
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] leading-relaxed">
              Argentina, Brazil, Chile, Colombia, Costa Rica, Dominican Republic, Ecuador, El Salvador, Guatemala, Guyana, Honduras, Jamaica, Nicaragua, Paraguay, Panamá, Perú, Puerto Rico, Suriname, Trinidad and Tobago, Uruguay
            </p>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-8 h-full">
          {/* Europe */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 flex flex-col flex-1">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[32px] lg:text-[25px] mb-4">
              EUROPE
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] leading-relaxed">
              Albania, Armenia, Austria, Azerbaijan, Bosnia & Herzegovina, Belgium, Bulgaria, Cyprus, Croatia, Czechia, Denmark, Estonia, Finland, France, Germany, Georgia, Greece, Hungary, Ireland, Italy, Kosovo, Latvia, Lithuania, Luxembourg, Malta, Moldova, Montenegro, Netherlands, North Macedonia, Norway, Poland, Portugal, Romania, Serbia, Spain, Slovakia, Slovenia, Sweden, Switzerland, Turkey, United Kingdom
            </p>
          </div>

          {/* North America */}
          <div className="bg-[#D2DCE4] rounded-xl p-6 flex flex-col flex-1">
            <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[32px] lg:text-[25px] mb-4">
              NORTH AMERICA
            </h3>
            <p className="text-[#153153] font-ubuntu text-[18px] leading-relaxed">
              Barbados, Canada, Mexico, United States
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#D2DCE4] rounded-xl p-6 flex flex-col h-full">
          <h3 className="text-[#153153] font-bold font-ubuntu text-[28px] md:text-[32px] lg:text-[25px] mb-4">
            MIDDLE EAST & AFRICA
          </h3>
          <p className="text-[#153153] font-ubuntu text-[18px] leading-relaxed">
            Bahrain, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi, United Arab Emirates, Algeria, Angola, Benin, Botswana, Burundi, Cameroon, Central African Republic, Comoros, Democratic Republic of the Congo, Djibouti, Eritrea, Egypt, Equatorial Guinea, Eswatini, Ethiopia, Ghana, Gabon, Guinea, Guinea-Bissau, Ivory Coast, Kenya, Lesotho, Liberia, Libya, Madagascar, Malawi, Mali, Mauritania, Mauritius, Morocco, Mozambique, Namibia, Nigeria, Niger, Republic of the Congo, Rwanda, Senegal, Sierra Leone, Tanzania, The Gambia, Togo, South Africa, Sudan, Tunisia, Uganda, Zambia, Zimbabwe
          </p>
        </div>
      </div>

    </section>
  );
};

export default nContinent;
