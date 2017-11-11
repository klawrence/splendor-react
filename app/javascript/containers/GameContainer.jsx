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
        cards: [],
        nobles: [],
        gems: {}
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

  onNextTurn() {
    GameAPI.sendAction({action: 'NEXT TURN' }).then((_status) => {
      this.fetchGame();
    });
  }

  actionHandlers() {
    return {
      onNextTurn: this.onNextTurn,
    };
  }

  render() {
    return (
      <Game game={this.state.game} actions={this.actionHandlers()} />
    )
  }
}

export default GameContainer;