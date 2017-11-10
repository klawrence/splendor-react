import React from 'react'
import Player from "./Player";

const Card = ({card}) => (
  <div className={`card ${card.gem}`} >
    <div className={`points ${card.points === 0 ? 'zero' : ''}`}>{card.points}</div>
    <div className="cost">
      {
        Object.keys(card.cost.gems).map( (gem) => (
          <div key={gem} className={`gem ${gem}`}>{card.cost.gems[gem]}</div>
        ))
      }
    </div>
  </div>
)


export default Card
