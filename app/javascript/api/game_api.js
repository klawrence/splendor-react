
class GameAPI {

  static fetchGames() {
    fetch('/games.json')
      .then((response) => {
        return response.json()
      })
  }
}

export default GameApi