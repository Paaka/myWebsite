import React from 'react';
import Chat from '../../assets/SVG/chat.svg';
import email from '../../assets/SVG/email.svg'
import Styles from './Contact.module.scss';

const Contact = () =>(
    <section className={Styles.Contact}>
        <div className={Styles.Contact__smallBox}>
        <img className={Styles.Contact__icon} src={Chat} alt="Chat"></img>
        <h2 className={Styles.Contact__heading}> Find Out more</h2>
        <p>If you want to ask me something, have an offer for me or just want to say Hello. You send me Email using link below</p>
        <a 
            className={Styles.Contact__Link} href="mailto:Mateuszhartabus@gmail.com">
                 Email Me
            <img className={Styles.Contact__LinkIcon} alt="Email" src={email} />
         </a>
        </div>
    </section>
)

export default Contact;