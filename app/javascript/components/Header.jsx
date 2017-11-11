import React from 'react'
import {Link} from "react-router-dom";

const Header = ({actions}) => (
  <div className="header">
    <h1><Link to="/">Splendor</Link></h1>
    <div className="options">
      <Link to="/">list games</Link>
    </div>
  </div>
)

export default Header

