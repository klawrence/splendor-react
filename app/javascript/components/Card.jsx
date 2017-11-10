import React from 'react'
import Player from "./Player";

const Card = ({card}) => (
  <div className={`card ${card.gem}`} >
    {
      Object.keys(card.cost.gems).map( (gem) => (
        <div key={gem} className={`gem ${gem}`}>{card.cost.gems[gem]}</div>
      ))
    }
  </div>
)


export default Card
