import React from 'react';
import styles from './AboutMe.module.scss'
import picture from '../../assets/images/temporaryImg.jpg';

const AboutMe = () =>(
    <div className={styles.wrapper}>
        <img className={styles.wrapper__img} alt="Profile" src={picture}/>
        <h2 className={styles.wrapper__header}>Hello, There</h2>
        <hr className={styles.wrapper__hr}/>
        <p>I'm 21 years old an aspiring front-end developer. Mostly I use React, and pure Javascript</p>
        <p>I'm come from 
            <a  className={styles.wrapper__link}
                href="https://goo.gl/maps/5bz2pXmZiytqssrXA"
                >Raciborsko, PL</a>
        </p>

        <hr className={styles.wrapper__hr}/>
    
    </div>
)

export default AboutMe;
