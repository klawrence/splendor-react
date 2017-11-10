import React from 'react'

const NewGameForm = props => (
  <div className="new-game">
    <button className='btn' onClick={props.onClick}>start a new game</button>
  </div>
)

export default NewGameForm
