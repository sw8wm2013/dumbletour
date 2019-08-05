import React from 'react';

const ResultCard = props =>(
  <div>
    <h2>{props.name}</h2>
    <div>{props.price}</div>
    <div>{props.www}</div>
    <img src={props.imgUrl}></img>
    <div>{props.ig}</div>
    <button id={props.id} onClick={(e) => props.addToItinerary(e.target.id)}>add</button>
    <button>remove</button>
  </div> 
)

export default ResultCard;