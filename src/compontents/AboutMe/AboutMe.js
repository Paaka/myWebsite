import React from 'react';
import styles from './AboutMe.module.scss'
import picture from '../../assets/images/temporaryImg.jpg';

const AboutMe = () =>(
    <div className={styles.wrapper}>
        <img className={styles.wrapper__img} alt="Profile" src={picture}/>
        <h2 className={styles.wrapper__header}>Hello, There</h2>
    </div>
)

export default AboutMe;
