import React from 'react'

const Header = props => (
  <div className="header">
    <div className="buttons">
      <button className='btn' onClick={props.onNextTurn}>next turn</button>
    </div>
  </div>
)

export default Header

