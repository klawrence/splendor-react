import React from 'react'
import Player from "./Player";

const CardLevel = props => (
  <div className="level">
     <h4>Level {props.level}</h4>
      {
        props.cards.map( (card, index) => (
           <div key={index}>{card.gem}</div>
        ))
      }
   </div>
)

// {/*<Card key={index} card={card} />*/}

export default CardLevel
