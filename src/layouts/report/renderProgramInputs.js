import React from 'react'
import { ProductionInput, TableData } from './styles'

export default function renderProgramInputs(items = [], onChange) {
  return items.map((item, index) => {
    return (
      <TableData key={index}>
        <ProductionInput type="number" {...item} onChange={onChange} />
      </TableData>
    )
  })
}
