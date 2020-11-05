import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ConnectedDateInput({ reducer, input, name }) {
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={(e) =>
        dispatch({ type: e.target.name, payload: e.target.value })
      }
      required
    ></input>
  )
}
