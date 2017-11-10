import React from 'react'
import GameList from "../components/GameList";
import GameAPI from "../api/game_api";
import NewGameForm from "../components/NewGameForm";
import Game from "../components/Game";

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      game: {
        players: [],
        cards_on_table: []
      }
    };
  }

  componentDidMount() {
    this.fetchGame();
  }

  fetchGame() {
    GameAPI.fetchGame(this.state.id).then(game => {
      this.setState({game});
    });
  }

  render() {
    return (
      <Game game={this.state.game} />
    )
  }
}

export default GameContainer;