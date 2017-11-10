import React from 'react'
import Player from "./Player";

const PlayerList = ({players}) => (
  <div className="players">
    <h3>Players</h3>
      {
        players.map( (player) => (
          <Player  key={player.name} player={player} />
        ))
      }
    </div>
)

export default PlayerList
