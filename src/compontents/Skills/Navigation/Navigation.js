import React from 'react';
import styles from './Navigation.module.scss'

const Navigation = (props) =>(
    <div className={styles.nav}>
        <h2 className={styles.nav__heading}>MY PROJECTS IN:</h2>
        <ul id="listOfNavs" className={styles.navWrapper}>
            <li id="Websites"
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
        </ul>
    </div>
)

export default Navigation;