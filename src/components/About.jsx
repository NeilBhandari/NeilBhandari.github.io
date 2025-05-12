import React from 'react';

const About = () => {
    return (
        <section id="about" className="max-w-4xl mx-auto px-4 py-20 text-center">
            {/* Enlarged Profile Image */}
            <img
                src="/src/assets/about.jpg"
                alt="Neil Bhandari"
                className="w-52 h-52 rounded-full mx-auto mb-8 shadow-lg object-cover"
            />

            <h2 className="text-3xl font-semibold mb-4">About Me</h2>

            <p className="text-gray-300 leading-relaxed">
                I’m a recent Computer Science graduate from Florida International University, where I consistently achieved Dean’s List honors.
                My interests lie at the intersection of artificial intelligence, virtual reality, and full-stack development. I’ve led award-winning
                hackathon teams, built original tools using AI and blockchain, and gained hands-on industry experience through software internships
                and game development work. I value curiosity, clean code, and building things that matter.
            </p>
        </section>
    );
};

export default About;
