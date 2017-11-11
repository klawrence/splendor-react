import React from 'react'
import Player from "./Player";
import Card from "./Card";

const CardLevel = ({cards, level}) => (
  <div className="level">
     <h3>Level {level}</h3>
      {
        cards.map( (card, index) => (
           <Card key={index} card={card} />
        ))
      }
   </div>
)

export default CardLevel
