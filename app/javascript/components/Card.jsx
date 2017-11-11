import React from 'react'
import Gem from "./Gem";
import {mapHash} from "../utils/mapHash";

const Card = ({card}) => (
  <div className={`card ${card.gem}`} >
    <div className={`points ${card.points === 0 ? 'zero' : ''}`}>{card.points}</div>
    <div className="cost">
      {
        mapHash(card.cost.gems, (gem, cost) => (
            <Gem key={gem} gem={gem} amount={cost} />
          )
        )
      }
    </div>
  </div>
)


export default Card
