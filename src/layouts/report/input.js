import React from 'react'
import { useSelector } from 'react-redux'
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
  const value = useSelector((state) => state[reducer][input]) || 0

  return (
    <TableHeader key={id}>
      <ProductionInput
        type="number"
        name={name}
        value={value}
        onChange={(e) => {
          return
        }}
        min={min}
        disabled={disabled}
        step={step}
        required
      ></ProductionInput>
    </TableHeader>
  )
}
