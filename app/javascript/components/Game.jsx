import React from 'react'
import PlayerList from "./PlayerList";

const Game = props => (
  <div className="game">
    <PlayerList players={props.game.players}/>
  </div>
)

export default Game
