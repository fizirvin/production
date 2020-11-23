import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onInteger, onKey } from 'helpers'
import { ProductionInput, TableHeader } from './styles'

export default function Input({
  id,
  reducer,
  input,
  name,
  min = '0',
  step = '1',
  disabled
}) {
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])

  return (
    <TableHeader key={id}>
      <ProductionInput
        type="number"
        name={name}
        value={value}
        onKeyUp={(e) => onKey(e)}
        onChange={(e) => {
          const integerNum = onInteger(e.target.value, value, e)
          dispatch({ type: e.target.name, payload: integerNum })
        }}
        min={min}
        disabled={disabled}
        step={step}
        required
      ></ProductionInput>
    </TableHeader>
  )
}
