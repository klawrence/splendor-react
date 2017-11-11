import React from 'react'
import {mapHash} from "../utils/collections";

const CardStacks = ({cards}) => (
  <div className='card-stacks' >
    {
      mapHash(cards, (gem, count) => (
        <div key={gem} className={`stack ${gem}`}>{count}</div>
      ))
    }
  </div>
)


export default CardStacks
