import React from 'react'
import PlayerList from "./PlayerList";
import Table from "./Table";
import Header from "./Header";

const Game = ({game, actions}) => (
  <div className="game">
    <Header actions={actions} />
    <PlayerList players={game.players} />
    <Table cards={game.cards} gems={game.gems} nobles={game.nobles} />
  </div>
)

export default Game
