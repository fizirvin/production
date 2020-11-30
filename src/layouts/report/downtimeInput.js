import React from 'react'
import { SectionRow, TableData, CheckInput } from './styles'

export default function DowntimeInput({ issue }) {
  return (
    <SectionRow>
      <TableData>
        <CheckInput
          type="checkbox"
          //   checked={findDefect(program, defect._id)}
          value={issue._id}

          //   onChange={onSelectDefect}
        ></CheckInput>
        <label>
          {issue.code} {issue.name}
        </label>
      </TableData>
      <TableData>
        <input
          type="number"
          id={issue._id}
          //   onChange={onDefect}
          //   disabled={disabledDefect(program, defect._id)}
          //   value={getDefaultDefect(program, defect._id)}
        ></input>
      </TableData>
    </SectionRow>
  )
}
