import React from 'react'
import GameList from "../components/GameList";
import GameAPI from "../api/game_api";
import NewGameForm from "../components/NewGameForm";

class GameIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {games: []};
  }

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    GameAPI.fetchGames().then(games => {
      this.setState({games});
    });
  }

  createGame() {
    GameAPI.startGame().then((_response) => {
      this.updateList();
    });
  }

  render() {
    return (
      <div className="game-index">
        <GameList games={this.state.games} />
        <NewGameForm onClick={this.createGame.bind(this)} />
      </div>
    )
  }
}

export default GameIndexContainer;