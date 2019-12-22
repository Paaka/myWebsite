import React from 'react';
import styles from './Navigation.module.scss'

const Navigation = () =>(
    <div className={styles.nav}>
        <h2>MY SKILLS</h2>
        <ul className={styles.navWrapper}>
            <li className={styles.navItemActive}>HTML & CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>C#</li>
            <li>OTHER</li>
        </ul>
    </div>
)

export default Navigation;