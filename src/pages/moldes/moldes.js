import React from 'react'

export default function Moldes() {
  console.log('cambia')
  return (
    <div>
      moldes hola
      <input type="date" onChange={(e) => console.log(e.target.value)}></input>
    </div>
  )
}
