import React from 'react'
import Player from "./Player";
import Gem from "./Gem";
import {renderHash} from "../utils/renderHash";

const Card = ({card}) => (
  <div className={`card ${card.gem}`} >
    <div className={`points ${card.points === 0 ? 'zero' : ''}`}>{card.points}</div>
    <div className="cost">
      {
        renderHash(card.cost.gems, (gem, cost) => (
            <Gem key={gem} gem={gem} amount={cost} />
          )
        )
      }
    </div>
  </div>
)


export default Card
