import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import './main.css'



ReactDOM.render(<App/> ,document.querySelector('#root'));

const cursor = document.querySelector('.cursor');
const second = document.querySelector('.cursor__small');

document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", 'top: '+(e.pageY- 5)+"px; left: "+(e.pageX-5)+"px;");
        second.setAttribute("style", 'top: '+(e.pageY- 5)+"px; left: "+(e.pageX-5)+"px;");
        setTimeout(()=>{
                second.setAttribute("style", 'top: '+(-30)+"px; left: "+(-30)+"px;");
        },200)
       
})

