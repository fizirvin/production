import React from 'react'
import { ProductionInput, TableData } from './styles'

export default function renderProgramInputs(items = [], onChange) {
  return items.map((item, index) => {
    return (
      <TableData key={index}>
        <ProductionInput
          type="number"
          {...item}
          onChange={onChange}
          onFocus={(e) => {
            if (e.target.value === '0') {
              e.target.value = ''
            }
          }}
          onBlur={(e) => {
            if (e.target.value === '') {
              e.target.value = 0
            }
          }}
        />
      </TableData>
    )
  })
}
