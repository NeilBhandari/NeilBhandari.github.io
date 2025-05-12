import React from 'react';

const experiences = [
    {
        role: "Product Development Intern",
        company: "EVPassport",
        period: "Jun 2022 – Sep 2022",
        description: "Worked on a customer-facing web app using React, Node.js, and MongoDB. Contributed across the stack in a fast-paced dev team."
    },
    {
        role: "Indie Game Developer",
        company: "Aurora Australis (Project Zenerith)",
        period: "Jul 2020 – Jul 2022",
        description: "Collaborated remotely on an MMORPG with over 3.5M plays. Designed multiplayer logic and storyline systems."
    },
    {
        role: "Accounting Department Intern",
        company: "Park Central Hotel (Highgate)",
        period: "Jun 2017 – Aug 2017",
        description: "Managed Oracle accounting tools and weekly audits involving large datasets."
    },
    {
        role: "Park Maintenance",
        company: "Riverside Park",
        period: "Jun 2016 – Aug 2016",
        description: "Handled public space maintenance in a community-led initiative in NYC."
    },
];

const Experience = () => (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
            {experiences.map((exp, idx) => (
                <div key={idx}>
                    <h3 className="text-xl font-bold">{exp.role} <span className="text-teal-400">@ {exp.company}</span></h3>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Experience;
