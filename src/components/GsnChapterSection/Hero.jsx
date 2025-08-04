import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/franchsing/bg.jpg"
                alt="Background"
            />

            {/* Black transparent overlay (gradient or solid) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/85 via-black/85 to-black/85"></div>

            {/* Text content */}
            <div className="relative z-10 px-4 max-w-4xl">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Lead the Network, Grow the Vision
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl mt-4">
                    Become a pioneer in conscious business networking by launching a GSN chapter in your region.
                    As a GSN franchise partner, you’ll help professionals grow through meaningful connections,
                    AI-powered tools, and a spiritually aligned ecosystem – while building a purpose-driven venture of your own.
                </p>
            </div>
        </section>
    );
};

export default Hero;
