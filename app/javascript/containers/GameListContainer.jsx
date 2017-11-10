import React from 'react'
import GameList from "../components/GameList";

class GameListContainer extends React.Component {
  render() {
    return (
      <GameList games={['a', 'b']}/>
    );
  }
}

export default GameListContainer;