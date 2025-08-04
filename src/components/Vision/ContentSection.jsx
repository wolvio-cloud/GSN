// src/components/GSNSection.jsx
import React from "react";

const features1 = [
    {
        title: "Connection With Intention",
        description:
            "Members don't just network - they align. Every interaction is designed to build relationships rooted in mutual respect and purpose.",
    },
    {
        title: "Flexibility in Engagement",
        description:
            "Choose how you connect - in-person, virtually, or hybrid - all designed to support your schedule without compromising authenticity.",
    },
    {
        title: "Trust-Centered Collaboration",
        description:
            "We believe trust is the currency of growth. GSN nurtures safe spaces for professionals to share,refer, and grow together.",
    }
];

const ContentSection = () => {
    return (
        <section className="bg-white py-10 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                {/* Unified Grid: Heading + 4 Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left (Heading + Paragraph) spans 2 columns */}
                    <div className="lg:col-span-1 flex flex-col justify-start">
                        <h1 className="text-2xl sm:text-2xl font-bold text-[#153153] leading-tight">
                            A New Era of Networking
                        </h1>
                        <p className="text-lg sm:text-xl text-[#153153] mt-6">
                            GSN is redefining professional networking by
                            merging technology with intention. We're
                            moving from cold transactions to conscious
                            connections that are smarter, deeper, and built
                            to last.
                        </p>
                        <div><img src="/vision/l2.png" /></div>
                    </div>


                    {/* First Card (top-right) */}
                    <div className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
                        <div className="mt-2">
                            <h3 className="text-2xl font-bold text-[#153153]">{features1[0].title}</h3>
                            <p className="text-[#153153] mt-4">{features1[0].description}</p>
                        </div>
                    </div>

                    {/* Remaining 3 Cards */}
                    {features1.slice(1).map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-[#D2DCE4] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px]"
                        >
                            <div className="mt-2">
                                <h3 className="text-2xl font-bold text-[#153153]">{feature.title}</h3>
                                <p className="text-[#153153] mt-4">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>



    );
};

export default ContentSection;
