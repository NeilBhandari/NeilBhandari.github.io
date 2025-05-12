import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Articles from './components/Articles';
import Contact from './components/Contact';


function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Awards />
            <Articles />
            <Contact />
        </div>
    );
}

export default App;
