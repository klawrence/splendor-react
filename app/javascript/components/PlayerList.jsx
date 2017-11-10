import React from 'react'
import Player from "./Player";

const PlayerList = ({players}) => (
  <div className="players">
    <h3>Players</h3>
    <ul>
      {
        players.map( (player) => (
          <li key={player.name}><Player player={player} /></li>
        ))
      }
    </ul>
    </div>
)

export default PlayerList
