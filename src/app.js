import React from 'react';
import Navbar from './compontents/NavbarWrapper/NavbarWrapper'
import Hero from './compontents/Hero/hero';
import './app.css'


const App = () => (
    <div className="app">
        <div className="cursor">
            <div className="cursor__small"></div>
        </div>
        <Navbar/>
        <Hero></Hero>
    </div>
)

export default App;
