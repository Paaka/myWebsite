import React from 'react';
import Navbar from './compontents/NavbarWrapper/NavbarWrapper'
import Hero from './compontents/Hero/hero';
import './app.scss'


const App = () => (
    <div className="app">
        <div className="cursor"></div>
        <div className="small__cursor"></div>
        <Navbar/>
        <Hero></Hero>
    </div>
)

export default App;
