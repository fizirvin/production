import React from 'react'
import { SectionRow, TableData, CheckInput } from './styles'

export default function PurgeInput({ material }) {
  return (
    <SectionRow>
      <TableData>
        <CheckInput
          type="checkbox"
          //   checked={findDefect(program, defect._id)}
          value={material._id}

          //   onChange={onSelectDefect}
        ></CheckInput>
        <label>{material.description}</label>
      </TableData>
      <TableData>
        <input
          type="number"
          id={material._id}
          //   onChange={onDefect}
          //   disabled={disabledDefect(program, defect._id)}
          //   value={getDefaultDefect(program, defect._id)}
        ></input>
      </TableData>
    </SectionRow>
  )
}
