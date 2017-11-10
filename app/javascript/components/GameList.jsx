import React from 'react'
import {Link} from "react-router-dom";

const GameIndex = ({games}) => (
    <ul>
        {games.map((game) => (
            <li key={game}>
                <Link to={`/games/${game}`}>{game}</Link>
            </li>
        ))}
    </ul>
)

export default GameIndex
