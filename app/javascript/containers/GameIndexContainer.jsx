import React from 'react'
import GameList from "../components/GameList";
import GameAPI from "../api/game_api";

class GameIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {games: ['a', 'b', 'c']};
  }

  componentDidMount() {
    GameAPI.fetchGames().then(games => {
      this.setState({games});
    });
  }

  render() {
    return (
      <GameList games={this.state.games}/>
    );
  }
}

export default GameIndexContainer;