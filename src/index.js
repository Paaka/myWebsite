import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.scss';
import './cursor.scss'



ReactDOM.render(<App/> ,document.querySelector('#root'));

const cursor = document.querySelector('.cursor');
const second = document.querySelector('.xd');

document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", 'top: '+(e.pageY- 5)+"px; left: "+(e.pageX-5)+"px;");
        setTimeout(()=>{
           second.setAttribute("style", 'top: '+(e.pageY- 22)+"px; left: "+(e.pageX-22)+"px;");
        },50)
       
})

