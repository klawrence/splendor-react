import React from 'react'
import Player from "./Player";
import CardLevel from "./CardLevel";

const CardsOnTable = props => (
  <div className="table">
      {
        props.cards.reverse().map( (level, index) => (
          <CardLevel key={index} cards={level} level={3 - index} />
        ))
      }
   </div>
)

export default CardsOnTable
