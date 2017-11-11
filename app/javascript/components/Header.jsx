import React from 'react'
import {Link} from "react-router-dom";
import ActionButton from "./ui/ActionButton";

const Header = props => (
  <div className="header">
    <h1>Splendor</h1>
    <div className="options">
      <Link to="/">list games</Link>
      <ActionButton onClick={props.onNextTurn} label="next turn" />
    </div>
  </div>
)

export default Header

