import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/vision/hero.webp"
                alt="Background"
            />

            {/* Black transparent overlay (gradient or solid) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/85 via-black/85 to-black/85"></div>

            {/* Text content */}
            <div className="relative z-10 px-4 max-w-4xl">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Our Vision for Conscious Growth
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl mt-4">
                    Elevate Your Business Through At GSN, we’re building more than a network - we’re
                    creating a global movement. One where business thrives through intentional
                    connections, AI-driven insight, and a shared commitment to purpose. Our vision is to
                    empower individuals and organizations to grow with integrity, clarity, and
                    consciousness - together.h Meaningful Connections
                </p>
            </div>
        </section>
    );
};

export default Hero;
