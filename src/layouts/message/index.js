import React from 'react'
import Close from './close'

export default function Message({ message, name, to }) {
  return (
    <div>
      {message}
      <Close name={name} to={to} />
    </div>
  )
}
