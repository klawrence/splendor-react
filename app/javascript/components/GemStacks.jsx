import React from 'react'
import Player from "./Player";

const GemStacks = ({gems}) => (
  <div className='gem-stacks' >
    {
      Object.keys(gems).map( (gem) => (
        <div key={gem} className={`gem ${gem}`}>{gems[gem]}</div>
      ))
    }
  </div>
)


export default GemStacks
