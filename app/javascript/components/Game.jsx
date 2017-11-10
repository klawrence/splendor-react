import React from 'react'
import PlayerList from "./PlayerList";
import CardsOnTable from "./CardsOnTable";

const Game = props => (
  <div className="game">
    <CardsOnTable cards={props.game.cards_on_table}/>
    <PlayerList players={props.game.players}/>
  </div>
)

export default Game
