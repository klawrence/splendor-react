import React from 'react'
import PlayerList from "./PlayerList";
import CardsOnTable from "./CardsOnTable";

const Game = ({game}) => (
  <div className="game">
    <CardsOnTable cards={game.cards_on_table}/>
    <PlayerList players={game.players}/>
  </div>
)

export default Game
