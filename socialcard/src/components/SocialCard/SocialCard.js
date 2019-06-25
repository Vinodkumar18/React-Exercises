import React, { Component }  from 'react';
import CardHead from '../CardHead/CardHead';
import CardDetails from '../CardDetails/CardDetails';
import './SocialCard.css';

class SocialCard extends Component{
    render(){
        return (
            <div >
            { this.createCards() }
            </div>
        );
    };

    createCards = () => {
        let element = [];
        for(let i=0;i<5;i++){
            element.push(<div className="card"> 
                    <CardHead />
                    <CardDetails title = {i} description = {"Description" + i} />
            </div>);
        }
        return element;
    };

}

export default SocialCard;