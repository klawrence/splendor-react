import React from 'react'

const Gem = ({gem, count}) => (
  <div key={gem} className={`gem ${gem}`}>{count}</div>
);

export default Gem
