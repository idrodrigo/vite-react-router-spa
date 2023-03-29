import React from 'react'
import { useParams } from 'react-router-dom'

function Rey() {
    const {rey} = useParams();
    const reyUpper = rey.substring(0,1).toUpperCase() + rey.substring(1).toLowerCase();
  return (
    <div>
        <img src={`https://html6.es/img/rey_${rey}.png`} />
        <h1> {reyUpper} </h1>
    </div>
  )
}

export default Rey