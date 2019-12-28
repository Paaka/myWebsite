import React from 'react';
import Link from '../Link/Link';
import Styles from './Footer.module.scss';
import linkedIn from '../../assets/SVG/linkedin.svg';
import facebook from '../../assets/SVG/facebook-logo.svg';
import github from '../../assets/SVG/github.svg';

const Footer = () =>(
    <footer className={Styles.footer}>
        <h2 className={Styles.footer__heading}> VISIT ME ON:</h2>
        <div className={Styles.footer__wrapper}>
            <a href="https://www.linkedin.com/in/mateusz-hartabus-08127919a/" title="Freepik">
                <img className={Styles.footer__wrapper__image} src={linkedIn} alt="linkedin"/>
            </a>
            <a href="https://pl-pl.facebook.com/mateusz.hartabus" title="Freepik">
                <img className={Styles.footer__wrapper__image} src={facebook} alt="facebook"/>
            </a>
            <a href="https://github.com/Paaka" title="Freepik">    
                <img className={Styles.footer__wrapper__image} src={github} alt="github"/>
            </a>
        </div>
        <div className={Styles.footer__link}>All icons on this website made by 
            <Link link="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</Link>
            from 
            <Link link="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</Link>
        </div>
    </footer>
)

export default Footer;