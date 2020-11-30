import React from 'react'
import { useSelector } from 'react-redux'
import DowntimeInput from './downtimeInput'
import { DefectTable, TableHeader } from './styles'

export default function DowntimeTable() {
  const issues = useSelector((state) => state['issues']['items']) || []

  const renderIssues = () => {
    return issues.map((issue) => (
      <DowntimeInput key={issue._id} issue={issue} />
    ))
  }

  return (
    <DefectTable>
      <thead>
        <tr>
          <TableHeader w={'80'}>Downtime to report</TableHeader>
          <TableHeader w={'20'}>Time (min)</TableHeader>
        </tr>
      </thead>
      <tbody>{renderIssues()}</tbody>
      <tfoot>
        <tr>
          <TableHeader w={'80'}>Total Downtime</TableHeader>
          <TableHeader w={'20'}>
            <input type="number" disabled></input>
          </TableHeader>
        </tr>
      </tfoot>
    </DefectTable>
  )
}
