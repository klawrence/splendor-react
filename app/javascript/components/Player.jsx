import React from 'react'
import GemStacks from "./GemStacks";
import CardStacks from "./CardStacks";
import ActionButton from "./ui/ActionButton";

const Player = ({player, actions}) => (
  <div className={`player ${player.my_turn ? 'my-turn' : ''}`}>
      <h2>{player.name}</h2>
      <div className="points">{player.points}</div>
      <GemStacks gems={player.gems} />
      <CardStacks cards={player.cards} />

      <div className="actions">
        {player.my_turn && <ActionButton action={actions.takeTurn} label="take turn" />}
      </div>
  </div>
)


export default Player
