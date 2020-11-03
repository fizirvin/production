import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Close({ name, to }) {
  const dispatch = useDispatch()
  return (
    <Link to={to}>
      <button onClick={() => dispatch({ type: name })}>Ok</button>
    </Link>
  )
}
