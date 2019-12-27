import React from 'react';
import AboutMe from './compontents/AboutMe/AboutMe';
import Hero from './compontents/Hero/hero';
import Skills from './compontents/Skills/Skills'
import './app.scss'
import Hobbies from './compontents/Hobbies/Hobbies';
import Contact from './compontents/Contact/Contact';
import Footer from './compontents/Footer/Footer';


const App = () => (
    <div className="app">
        <div className="cursor"></div>
        <div className="small__cursor"></div>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Hobbies/>
        <Skills/>
        <Contact/> 
        <Footer/>
    </div>
)

export default App;
