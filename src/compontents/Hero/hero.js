import React from 'react';
import styles from './hero.module.scss'

const Hero = () => (
    <div className={styles.hero}>
     <div className={styles.hero__wrapper}>
        <h1 className={styles.header}>Hi, I'm Matthew Hartabus</h1>
        <p className={styles.para}>AN ASPIRING FRONT-END DEVELOPER</p>
     </div>
    </div>
)
export default Hero;