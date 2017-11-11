import React from 'react'
import Player from "./Player";

const PlayerList = ({players, actions}) => (
  <div className="players">
    {/*<h3>Players</h3>*/}
    {
      players.map( (player) => (
        <Player  key={player.name} player={player} actions={actions}/>
      ))
    }
  </div>
)

export default PlayerList
