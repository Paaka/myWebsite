import React from 'react';
import data from "./data"; 

import Styles from './ListWrapper.module.scss';
import Link from '../../Link/Link';




class ListWrapper extends React.Component{
    state = {
        xd: this.props.currentItem,
        items : data[this.props.currentItem],
        item : data[this.props.currentItem][0]
    }
    chagngeItemDescription(e){
        const currentIndexOfArr = e.target.getAttribute('num');
        this.setState({
            item:data[this.props.currentItem][currentIndexOfArr]
        })
    }
    static getDerivedStateFromProps(props, state) {
        if(props.currentItem !== state.xd){
            return {
                xd: props.currentItem,
                item : data[props.currentItem][0],
                items : data[props.currentItem]
            }
        }
        return null;
    }
   
    render(){
        return(
            <div className={Styles.itemWrapper}>
                {this.state.items.map((el)=>{
                 return(<div className={Styles.item}>
                     <h3
                      className={Styles.item__heading}
                      key={el.num}>{el.id.toUpperCase()}</h3>
                      <p>{el.description}</p>
                      <p>{el.linkDes}
                        <Link light={true}
                            link={el.link}>here</Link>.
                      </p>
                 </div>)
            })}
            </div>
        )
    //     return(
    //         <div className={Styles.wrapper}>
    //     <div className={Styles.singleBlock}>
    //         <h2>My Projects :</h2>
    //         {this.state.items.map((el)=>{
    //         return(<h3 
    //             num={el.num}
    //             onClick={e =>this.chagngeItemDescription(e)}
    //             key={el.num}>{el.id}</h3>)
    //         })}
    //         {/* <h3>This website</h3>
    //         <h3 onClick={e =>this.chagngeItemDescription(e)} num="1" id="Natours">This other website</h3> */}
    //     </div>
    //     {this.state.idk}
    //     <div className={Styles.singleBlock}>
    //         <h2>Description</h2>
    //         <div className={Styles.singleBlock__description}>
    //         <p>{this.state.item.description}</p>
    //         <div className={Styles.singleBlock__Link}>This website github repo you can find : <a href={this.state.item.link} target="_blank" rel="noopener noreferrer">here</a></div>
    //         </div>
    //     </div>
        
    // </div>
    //     )
    }
}
    

export default ListWrapper;