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
                   Who We Are
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl mt-4">
                    At Global Success Network, we’re building more than just business connections - we’re
cultivating a conscious global community. Rooted in collaboration, guided by purpose,
and empowered by AI, GSN exists to help individuals grow together through
meaningful, values-based relationships.
                </p>
            </div>
        </section>
    );
};

export default Hero;
