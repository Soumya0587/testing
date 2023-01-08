
import React from 'react'

const Card = ({Title,Actors,Director,Writer,Year}) => {

  

  return (
    <div>
      <h2>{Title}</h2>
      
      <h2>{Actors}</h2>
      <h2>{Director}</h2>
      <h2>{Year}</h2>
      <h2>{Writer}</h2>
      
    </div>
  )
}

export default Card