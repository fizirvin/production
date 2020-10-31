import React from 'react'
import { Link } from 'react-router-dom'

export default function CancelComponent({ to, onClick }) {
  return (
    <Link to={to}>
      <button type="button" onClick={onClick}>
        Cancel
      </button>
    </Link>
  )
}
