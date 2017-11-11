import React from 'react'
import Player from "./Player";

const CardStacks = ({cards}) => (
  <div className='card-stacks' >
    {
      Object.keys(cards).map( (gem) => (
        <div key={gem} className={`stack ${gem}`}>{cards[gem].count}</div>
      ))
    }
  </div>
)


export default CardStacks
