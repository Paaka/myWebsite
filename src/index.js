import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import './main.css'



ReactDOM.render(<App/> ,document.querySelector('#root'));

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", 'top: '+(e.pageY- 5)+"px; left: "+(e.pageX-5)+"px;");
})