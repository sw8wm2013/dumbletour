import React from 'react';

const ResultCard = props =>(
  <div id={props.id}>
    <h2>{props.name}</h2>
    <div>{props.price}</div>
    <div>{props.www}</div>
    <img src={props.imgUrl}></img>
    <div>{props.ig}</div>
  </div> 
)

export default ResultCard;