import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onInteger, onNegativeKey } from 'helpers'

export default function ConnectedNegativeNumberInput({
  reducer,
  input,
  name,
  min = '0'
}) {
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])

  return (
    <input
      type="number"
      name={name}
      value={value}
      onKeyUp={(e) => onNegativeKey(e)}
      onChange={(e) => {
        const integerNum = onInteger(e.target.value, value, e)
        dispatch({ type: e.target.name, payload: integerNum })
      }}
      min={min}
      required
    ></input>
  )
}
