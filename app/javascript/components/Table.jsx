import React from 'react'
import Player from "./Player";
import CardLevel from "./CardLevel";
import GemStacks from "./GemStacks";

const Table = ({cards, gems}) => (
  <div className="table">
      {
        cards.reverse().map( (level, index) => (
          <CardLevel key={index} cards={level} level={3 - index} />
        ))
      }

     <GemStacks gems={gems} />
   </div>
)

export default Table
