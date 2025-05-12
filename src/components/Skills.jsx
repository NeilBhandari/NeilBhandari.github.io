import React from 'react';

const skills = [
    'JavaScript', 'Python', 'Java', 'C', 'SQL', 'Lua',
    'React', 'Node.js', 'MongoDB', 'Tailwind CSS',
    'Blockchain', 'AI/ML', 'Streamlit', 'Git/GitHub'
];

const Skills = () => {
    return (
        <section id="skills" className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-semibold mb-6">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-700 text-teal-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
