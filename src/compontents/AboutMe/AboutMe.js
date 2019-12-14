import React from 'react';
import styles from './AboutMe.module.scss'
import picture from '../../assets/images/temporaryImg.jpg';

const AboutMe = () =>(
    <div className={styles.wrapper}>
        <div className={styles.wrapperBox}>
        <img className={styles.wrapper__img} alt="Profile" src={picture}/>
        <h2 className={styles.wrapper__header}>Hello, There</h2>
        <hr className={styles.wrapper__hr}/>
        <span className={styles.wrapper__paragraph}>I'm 21 years old an aspiring front-end developer.I'm currenty a second-year student at the 
             <a  
                id="school"
                href="https://en.wsei.edu.pl/"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.wrapper__link}>
            College of Economics and Computer Science(WSEI)
            </a>
        Mostly I use React, and pure Javascript and I'm come from 
            <a  
                rel="noopener noreferrer"
                target="_blank"
                className={styles.wrapper__link}
                href="https://goo.gl/maps/5bz2pXmZiytqssrXA"
                >Raciborsko, PL
            </a>
        near Cracow.
        </span>
      
        <hr className={styles.wrapper__hr}/>
        
        </div>
    </div>
)

export default AboutMe;
