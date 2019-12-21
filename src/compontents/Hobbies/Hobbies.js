import React from 'react';
import Styles from './Hobbies.module.scss';
import Book from "../../assets/SVG/book.svg";
import gamingController from '../../assets/SVG/ps4.svg';
import mountains from '../../assets/SVG/mountains.svg'

const Hobbies = () =>(
    <div className={Styles.Hobbies}>
        <h2 className={Styles.Hobbies__heading}>MY HOBBIES :</h2>
        <div className={Styles.ItemWrapper}>
            <img className={Styles.ItemWrapper__img} alt="book" src={gamingController}></img>
            <div className={Styles.ItemWrapper__description}>
                <h2 className={Styles.ItemWrapper__heading}>Computer Games</h2>
                <p>What can I say ? I used to spend countless hours in World of Warcraft, and other MMORPGs. Currently I don't play so much, maybe 2-3 hours per week. I love pixelart games, and all retro games for SNES or Polish equivalent pegazus.</p>
            </div>           
        </div>
        <hr className={Styles.horizontalLine}/>
        <div className={Styles.ItemWrapperReverse}>
         <img className={Styles.ItemWrapper__img} alt="book" src={Book}></img>
            <div className={Styles.ItemWrapper__description}>
                <h2 className={Styles.ItemWrapper__heading}>Reading</h2>
                <p>I love reading books. I mainly read autobiographies and nonfiction novels nevertheless I love fantasy, and science fiction. Books that I enjoyed : </p>
                <ul>
                    <li>The Last Viking: The Life of Roald Amundsen By Stephen R. Bown</li>
                    <li>Nineteen Eighty-Four By George Orwell</li>
                    <li>Metro 2033 By Dmitry Glukhovsky</li>
                    <li>The Witcher Saga by Andrzej Sapkowski</li>
                </ul>
            </div>
        </div>
        <hr className={Styles.horizontalLine}/>
        <div className={Styles.ItemWrapper}>
            <img className={Styles.ItemWrapper__img} alt="book" src={mountains}></img>
            <div className={Styles.ItemWrapper__description}>
                <h2 className={Styles.ItemWrapper__heading}>Hiking</h2>
                <p>I love hiking, spending time in mountains and all kinds of nearby forests. I usually go once a month in the Tatras or in the Beskid mountains.Plus there's nothing better than driving a car, in the winter scenery on winding snowy roads.</p>
            </div>
        </div>
        <hr className={Styles.horizontalLine}/>
        <div className={Styles.link}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
    </div>
)

export default Hobbies;