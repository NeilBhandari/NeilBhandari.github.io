import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-semibold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
