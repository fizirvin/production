import React from 'react'
import { ProductionInput, TableData } from './styles'

export default function renderProgramInputs(items = [], onChange) {
  return items.map((item, index) => (
    <TableData key={index}>
      <ProductionInput {...item} onChange={onChange} />
    </TableData>
  ))
}
