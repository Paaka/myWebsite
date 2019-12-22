import React from 'react';
import data from "./data"; 
import Styles from './ListWrapper.module.scss'

const item = data.items[0];

const ListWrapper = () =>(
    <div className={Styles.wrapper}>
        <div className={Styles.singleBlock}>
            <h2>Projects</h2>
            <h3>This website</h3>
        </div>
        <div className={Styles.singleBlock}>
            <h2>Description</h2>
            <div className={Styles.singleBlock__description}>
            <p>This website was created using React and SCSS. But here mostly you can find SCSS. If you are on mobile device it's worth to check up this website on bigger screen</p>
            <div class={Styles.singleBlock__Link}>This website github repo you can find : <a href={item.link} target="_blank" rel="noopener noreferrer">here</a></div>
            </div>
        </div>
        
    </div>
)
export default ListWrapper;