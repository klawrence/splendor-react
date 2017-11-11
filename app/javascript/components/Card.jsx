import React from 'react'
import Player from "./Player";
import Gem from "./Gem";

const Card = ({card}) => (
  <div className={`card ${card.gem}`} >
    <div className={`points ${card.points === 0 ? 'zero' : ''}`}>{card.points}</div>
    <div className="cost">
      {
        Object.keys(card.cost.gems).map( (gem) => (
          <Gem key={gem} gem={gem} amount={card.cost.gems[gem]} />
        ))
      }
    </div>
  </div>
)


export default Card
