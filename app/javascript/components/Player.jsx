import React from 'react'
import GemStacks from "./GemStacks";
import CardStacks from "./CardStacks";

const Player = ({player}) => (
  <div className="player">
    <h4>{player.name}</h4>
    <div className="points">{player.points}</div>
    <CardStacks cards={player.cards} />
    <GemStacks gems={player.gems} />
  </div>
)

export default Player
