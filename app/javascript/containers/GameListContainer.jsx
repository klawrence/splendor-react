import React from 'react'
import GameList from "../components/GameList";

class GameIndexContainer extends React.Component {
  render() {
    return (
      <GameList games={['a', 'b']}/>
    );
  }
}

export default GameIndexContainer;