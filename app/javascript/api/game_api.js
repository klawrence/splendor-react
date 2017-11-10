import {defaultHeaders} from "./utils";

class GameAPI {

  static fetchGames() {
    return fetch('/games.json').then(response => {
      return response.json();
    });
  }

  static fetchGame(id) {
    return fetch(`/games/${id}.json`).then(response => {
      return response.json();
    });
  }

  static startGame() {
    return fetch('/games.json',
      {
        method: "POST",
        headers: defaultHeaders()
      }
    ).then(response => {
      return response.json();
    });
  }

}

export default GameAPI