import React from 'react'
import { SectionRow, TableData, CheckInput } from './styles'

export default function DefectInput({ defect, program }) {
  return (
    <SectionRow key={defect._id}>
      <TableData>
        <CheckInput
          type="checkbox"
          //   checked={findDefect(program, defect._id)}
          value={defect._id}
          name={program}
          //   onChange={onSelectDefect}
        ></CheckInput>
        <label>
          {defect.code} {defect.name}
        </label>
      </TableData>
      <TableData>
        <input
          type="number"
          name={program}
          id={defect._id}
          //   onChange={onDefect}
          //   disabled={disabledDefect(program, defect._id)}
          //   value={getDefaultDefect(program, defect._id)}
        ></input>
      </TableData>
    </SectionRow>
  )
}
