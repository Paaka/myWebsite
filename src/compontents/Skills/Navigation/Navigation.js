import React from 'react';
import styles from './Navigation.module.scss'

const Navigation = (props) =>(
    <div className={styles.nav}>
        <h2>MY SKILLS</h2>
        <ul id="listOfNavs" className={styles.navWrapper}>
            <li id="websites"
                className="navItemActive"
                onClick={props.onClickFn} 
                >
            HTML & CSS</li>
            <li id="Javascript"

                onClick={props.onClickFn}>JAVASCRIPT</li>
            <li  id="React"
                onClick={props.onClickFn}>REACT</li>
            <li id="CSharp"
                onClick={props.onClickFn}>C#</li>
            <li id="Other"
                onClick={props.onClickFn}>OTHER</li>
        </ul>
    </div>
)

export default Navigation;