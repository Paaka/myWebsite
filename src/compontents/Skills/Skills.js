import React from 'react';
import Nav from './Navigation/Navigation';
import ListWrapper from './ListWrapper/ListWrapper'
import styles from './Skills.module.scss'

class Skills extends React.Component{
    state={
        currentId:"Websites",
    }
    
    changeCurrentSkill = (e) =>{
        const HTMLCollectionOfItems = document.querySelector('#listOfNavs').getElementsByTagName('li');
        for(let i=0;i<HTMLCollectionOfItems.length;i++){
            HTMLCollectionOfItems[i].classList = "";
        }
        e.target.classList = "navItemActive";
        this.setState({
            currentId:e.target.id
        })
    }
    
    render(){
        
        return(
        <section className={styles.wrapper}>
            <Nav onClickFn={e =>this.changeCurrentSkill(e)}></Nav>
            <ListWrapper currentItem={this.state.currentId}></ListWrapper>
        </section>)
    }
}

export default Skills;