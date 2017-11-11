import React from 'react'
import PlayerList from "./PlayerList";
import Table from "./Table";
import GemStacks from "./GemStacks";
import Header from "./Header";

const Game = ({game, actions}) => (
  <div className="game">
    <Header onNextTurn={actions.onNextTurn} />
    <PlayerList players={game.players} />
    <Table cards={game.cards} gems={game.gems} />
  </div>
)

export default Game
