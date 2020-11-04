import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onDecimal, onKeyDecimal } from 'helpers'

export default function ConnectedDecimalInput({
  reducer,
  input,
  name,
  min = '0',
  step = '.01'
}) {
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])

  return (
    <input
      type="number"
      name={name}
      value={value}
      onKeyUp={(e) => onKeyDecimal(e)}
      onChange={(e) => {
        const decimalNum = onDecimal(e.target.value)
        dispatch({ type: e.target.name, payload: decimalNum })
      }}
      min={min}
      step={step}
      required
    ></input>
  )
}
