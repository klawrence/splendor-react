import React from 'react'
import Player from "./Player";

const PlayerList = ({players, actions}) => (
  <div className="players">
    {
      players.map( (player) => (
        <Player  key={player.name} player={player} actions={actions}/>
      ))
    }
  </div>
)

export default PlayerList
