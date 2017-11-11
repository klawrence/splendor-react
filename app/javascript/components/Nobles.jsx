import React from 'react'
import Card from "./Card";

const Nobles = ({nobles}) => (
  <div className='nobles' >
    {
      nobles.map( (noble, index) => (
        <Card key={index} card={noble} type="noble"/>
      ))
    }
  </div>
)


export default Nobles
