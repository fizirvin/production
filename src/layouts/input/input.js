import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ConnectedTextInput({ reducer, input, name }) {
  console.log('yo soy', name)
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) =>
        dispatch({ type: e.target.name, payload: e.target.value })
      }
      required
    ></input>
  )
}
