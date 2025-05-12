import React from 'react';
import useScrollDirection from '../hooks/useScrollDirection';

const Navbar = () => {
    const scrollDirection = useScrollDirection();
    const visible = scrollDirection !== 'down';

    return (
        <nav className={`fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-wide">Neil Bhandari</h1>
                <ul className="flex flex-wrap space-x-6 text-sm font-medium">
                    <li><a href="#about" className="hover:text-teal-400">About</a></li>
                    <li><a href="#experience" className="hover:text-teal-400">Experience</a></li>
                    <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
                    <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
                    <li><a href="#awards" className="hover:text-teal-400">Awards</a></li>
                    <li><a href="#articles" className="hover:text-teal-400">Articles</a></li>
                    <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
