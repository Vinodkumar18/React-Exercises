import React from 'react';
import './CardDetails.css';

function CardDetails(props){
    return (
        <div className="card-body">
            <h5 className="card-title"> {props.title} </h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    );
}

export default CardDetails;