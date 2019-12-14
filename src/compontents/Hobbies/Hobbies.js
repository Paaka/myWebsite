import React from 'react';
import Styles from './Hobbies.module.scss'
import Book from "../../assets/SVG/book.svg"

const Hobbies = () =>(
    <div className={Styles.Hobbies}>
        <h2 className={Styles.Hobbies__heading}>MY HOBBIES :</h2>
        <div className={Styles.ItemWrapper}>
            <img className={Styles.ItemWrapper__img} alt="book" src={Book}></img>
        </div>
    </div>
)

export default Hobbies;