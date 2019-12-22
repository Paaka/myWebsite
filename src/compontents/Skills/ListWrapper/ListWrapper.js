import React from 'react';
import data from "./data"; 
import Styles from './ListWrapper.module.scss'


let defaultId = data.ids[0];

class ListWrapper extends React.Component{
    state = {
        data : data[data.ids[0]][0],
        item : data[defaultId][0]
    }
    idk(e){
        console.log(e.target.id)
        
    }
    render(){
        return(
            <div className={Styles.wrapper}>
        <div className={Styles.singleBlock}>
            <h2>Projects</h2>
            <h3>This website</h3>
            <h3 onClick={e =>this.idk(e)} id="Natours">This other website</h3>
        </div>
        {this.state.idk}
        <div className={Styles.singleBlock}>
            <h2>Description</h2>
            <div className={Styles.singleBlock__description}>
            <p>{this.state.item.description}</p>
            <div className={Styles.singleBlock__Link}>This website github repo you can find : <a href={this.state.item.link} target="_blank" rel="noopener noreferrer">here</a></div>
            </div>
        </div>
        
    </div>
        )
    }
}
    

export default ListWrapper;