import React from 'react'
import PlayerList from "./PlayerList";
import Table from "./Table";

const Game = ({game, actions}) => (
  <div className="game">
    <PlayerList players={game.players} actions={actions} />
    <Table cards={game.cards} gems={game.gems} nobles={game.nobles} actions={actions} />
  </div>
)

export default Game
