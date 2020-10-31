import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ConnectedNumberInput({
  reducer,
  input,
  name,
  min = 0
}) {
  console.log('yo soy', name)
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])
  return (
    <input
      type="number"
      name={name}
      value={value}
      onChange={(e) =>
        dispatch({ type: e.target.name, payload: e.target.value })
      }
      min={min}
      required
    ></input>
  )
}
