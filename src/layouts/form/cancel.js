import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function CancelComponent({ to, name }) {
  const dispatch = useDispatch()
  return (
    <Link to={to}>
      <button type="button" onClick={() => dispatch({ type: name })}>
        Cancel
      </button>
    </Link>
  )
}
