import React from 'react';
import Styles from './Footer.module.scss'
import linkedIn from '../../assets/SVG/linkedin.svg';

const Footer = () =>(
    <footer className={Styles.footer}>
        <img src={linkedIn} alt="linkedin"/>
        @Copy
    </footer>
)

export default Footer;