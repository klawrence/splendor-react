import React from 'react'
import GameList from "../components/GameList";
import GameAPI from "../api/game_api";
import NewGameForm from "../components/NewGameForm";
import Game from "../components/Game";

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.bindActions();

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

  bindActions() {
    this.onTakeTurn = this.onTakeTurn.bind(this);
  }

  componentDidMount() {
    this.fetchGame();
  }

  fetchGame() {
    GameAPI.fetchGame(this.state.id).then(game => {
      this.setState({game});
    });
  }

  onTakeTurn() {
    GameAPI.sendAction(this.state.id, {action: 'TAKE TURN' }).then((_status) => {
      this.fetchGame();
    });
  }

  actions() {
    return {
      takeTurn: this.onTakeTurn,
    };
  }

  render() {
    return (
      <Game game={this.state.game} actions={this.actions()} />
    )
  }
}

export default GameContainer;