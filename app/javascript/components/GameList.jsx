import React from 'react'
import {Link} from "react-router-dom";

const GameList = ({games}) => (
    <ul>
        {games.map((game) => (
            <li key={game} onClick={() => onTodoClick(game)}>
                <Link to={`/games/${game}`}>{game}</Link>
            </li>
        ))}
    </ul>
)

GameList.defaultProps = {
  games: ['one', 'two', 'three']
};

export default GameList
