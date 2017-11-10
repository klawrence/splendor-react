import React from 'react'
import {Link} from "react-router-dom";

const GameIndex = ({games}) => (
  <div className="game-list">
      <h2>Games of Splendor</h2>
      <ul>
        {games.length === 0 && <li key='empty'>There are currently no games.</li>}

        {games.map((game) => (
          <li key={game.name}><Link to={game.url}>{game.name}</Link></li>
        ))}
      </ul>
  </div>
)

export default GameIndex
