import React from 'react'
import PlayerList from "./PlayerList";
import CardsOnTable from "./CardsOnTable";

const Game = ({game}) => (
  <div className="game">
    <PlayerList players={game.players}/>
    <CardsOnTable cards={game.cards_on_table}/>
  </div>
)

export default Game
