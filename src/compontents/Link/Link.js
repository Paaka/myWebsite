import React from 'react';
import Styles from './Link.module.scss';

const Link = (props) =>{
   if(props.light){
    return <a
        className={Styles.LinkLight}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer">
        {props.children}</a>
   }else{
      return <a
        className={Styles.Link}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer">
        {props.children}</a>
   }
    
}

export default Link;