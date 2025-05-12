import React from 'react';

const ProjectCard = ({ title, description, tech, repo, demo }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-teal-300 mb-4">
                {tech.map((t, idx) => (
                    <span key={idx} className="bg-gray-700 px-2 py-1 rounded">{t}</span>
                ))}
            </div>
            <div className="flex space-x-4">
                <a href={repo} className="text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                {demo && (
                    <a href={demo} className="text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
