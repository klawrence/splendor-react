import React from 'react'
import ActionButton from "./ui/ActionButton";

const NewGameForm = props => (
  <div className="new-game">
    <ActionButton action={props.onClick} label="start a new game" />
  </div>
)

export default NewGameForm
