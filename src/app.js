import React from 'react';
import AboutMe from './compontents/AboutMe/AboutMe';
import Hero from './compontents/Hero/hero';
import './app.scss'
import Hobbies from './compontents/Hobbies/Hobbies';


const App = () => (
    <div className="app">
        <div className="cursor"></div>
        <div className="small__cursor"></div>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Hobbies/>
    </div>
)

export default App;
