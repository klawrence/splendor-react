import React from 'react'
import {mapHash} from "../utils/collections";

const CardStacks = ({stacks}) => (
  <div className='card-stacks' >
    {
      mapHash(stacks, (gem, stack) => (
        <div key={gem} className={`stack ${gem}`}>{stack.length}</div>
      ))
    }
  </div>
)


export default CardStacks
