import React from 'react'
import Player from "./Player";

const GemStacks = ({gems}) => (
  <div className='gem-stacks' >
    {
      mapHash(gems, (gem, count) => (
        <div key={gem} className={`gem ${gem}`}>{count}</div>
      ))
    }
  </div>
)


export default GemStacks
