import React from "react";

const PrivacyHero = () => {
  // auto-formatted date like "July 04, 2025"
  const updated = new Date();
  const updatedStr = updated.toLocaleDateString(undefined, {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <header className="w-full" aria-label="Privacy policy hero">
      {/* gradient background */}
      <div
        className="w-full bg-gradient-to-b from-[#241818] to-[#33485c] text-white"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-36 lg:py-40 min-h-[75vh] flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 text-center lg:text-left">
            {/* Left title */}
            <h1
              className="font-ubuntu font-bold text-white lg:ml-[-50px]"
              style={{
                fontSize: "clamp(30px, 5.5vw, 40px)",
                lineHeight: 1,
              }}
            >
              Privacy Policy
            </h1>

            {/* Right updated block */}
            <div className="text-center lg:text-right">
              <p
                className="font-ubuntu text-[#a9a9a9]"
                style={{
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                  marginBottom: 6,
                }}
              >
                Last Updated
              </p>
              <p
                className="font-ubuntu"
                style={{
                  color: "#a9a9a9",
                  fontWeight: 500,
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                }}
              >
                {updatedStr}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PrivacyHero;
