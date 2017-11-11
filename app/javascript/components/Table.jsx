import React from 'react'
import Player from "./Player";
import CardLevel from "./CardLevel";
import GemStacks from "./GemStacks";
import Nobles from "./Nobles";

const Table = ({cards, gems, nobles}) => (
  <div className="table">
    <Nobles nobles={nobles} />

      {
        cards.reverse().map( (level, index) => (
          <CardLevel key={index} cards={level} level={3 - index} />
        ))
      }

     <GemStacks gems={gems} />
   </div>
)

export default Table
