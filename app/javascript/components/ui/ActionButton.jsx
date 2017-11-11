import React from 'react'

const ActionButton = ({label, action}) => (
  <div className="button" onClick={action}>{label}</div>
)

export default ActionButton

