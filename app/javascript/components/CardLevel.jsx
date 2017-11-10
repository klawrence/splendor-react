import React from 'react'
import Player from "./Player";
import Card from "./Card";

const CardLevel = props => (
  <div className="level">
     <h4>Level {props.level}</h4>
      {
        props.cards.map( (card, index) => (
           <Card key={index} card={card} />
        ))
      }
   </div>
)

export default CardLevel
