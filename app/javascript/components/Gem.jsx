import React from 'react'
import Player from "./Player";

const Gem = ({gem, amount}) => (
  <div key={gem} className={`gem ${gem}`}>{amount}</div>
)

export default Gem
