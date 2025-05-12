import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // ✅ Import the image

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40" />
            </div>

            {/* Name */}
            <h2 className="text-2xl text-white mb-2">Neil Bhandari</h2>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Software Engineer & Full-Stack Developer
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl max-w-2xl text-gray-300">
                Focused on building practical AI, VR, and blockchain-powered products with clean code and big ideas.
            </p>

            {/* Links */}
            <div className="mt-6 space-x-4">
                <a
                    href="https://github.com/NeilBhandari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/neil-bhandari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    LinkedIn
                </a>
                <a
                    href="/NBResume.pdf"
                    download="NBResume.pdf" // ✅ Optional: force correct filename
                    className="text-white hover:underline"
                >
                    Resume
                </a>
            </div>
        </section>
    );
};

export default Hero;
