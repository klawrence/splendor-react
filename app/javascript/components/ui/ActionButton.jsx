import React from 'react'

const ActionButton = ({label, handler}) => (
  <div className="button" onClick={handler}>{label}</div>
)

export default ActionButton

