import React from 'react'
import Gem from "./Gem";
import {mapHash} from "../utils/collections";

const Card = ({card, type}) => (
  <div className={`card ${type || card.gem}`} >
    <div className={`points ${card.points === 0 ? 'zero' : ''}`}>{card.points}</div>
    <div className="cost">
      {
        mapHash(card.cost.gems, (gem, cost) => (
            <Gem key={gem} gem={gem} count={cost} />
          )
        )
      }
    </div>
  </div>
)


export default Card
