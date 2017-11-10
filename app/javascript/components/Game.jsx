import React from 'react'
import PlayerList from "./PlayerList";
import CardsOnTable from "./CardsOnTable";
import GemStacks from "./GemStacks";

const Game = ({game}) => (
  <div className="game">
    <PlayerList players={game.players}/>
    <CardsOnTable cards={game.cards}/>
    <GemStacks gems={game.gems}/>
  </div>
)

export default Game
