import React from 'react'
import PlayerList from "./PlayerList";
import CardsOnTable from "./CardsOnTable";
import GemStacks from "./GemStacks";

const Game = ({game}) => (
  <div className="game">
    <PlayerList players={game.players}/>
    <CardsOnTable cards={game.cards_on_table}/>
    <GemStacks gems={game.gem_stacks}/>
  </div>
)

export default Game
