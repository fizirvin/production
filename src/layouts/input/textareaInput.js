import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ConnectedTextAreaInput({
  reducer,
  input,
  name,
  length = '60',
  rows = '5',
  cols = '25'
}) {
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])
  return (
    <textarea
      type="text"
      name={name}
      maxLength={length}
      rows={rows}
      cols={cols}
      value={value}
      onChange={(e) =>
        dispatch({ type: e.target.name, payload: e.target.value })
      }
      required
    ></textarea>
  )
}
