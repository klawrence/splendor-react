
class GameAPI {

  static fetchGames() {
    return fetch('/games.json').then(response => {
      return response.json();
    });
  }

}

export default GameAPI