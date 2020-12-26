import React from 'react'
import { useSelector } from 'react-redux'
import DowntimeInput from './downtimeInput'
import { DefectTable, TableHeader } from './styles'

export default function DowntimeTable({ onDowntime }) {
  const issues = useSelector((state) => state['issues']['items']) || []
  const dtime = useSelector((state) => state['reportsForm']['dtime'])
  const downtimes = useSelector((state) => state['reportsForm']['downtimes'])

  const total = downtimes.reduce((a, b) => {
    return a + +b.mins
  }, 0)

  const renderIssues = () => {
    return issues.map((issue) => (
      <DowntimeInput key={issue._id} issue={issue} onDowntime={onDowntime} />
    ))
  }

  return (
    <DefectTable>
      <thead>
        <tr>
          <TableHeader w={'80'}>
            Downtime to report {(dtime * 60 - total).toFixed(0)}
          </TableHeader>
          <TableHeader w={'20'}>Time (min)</TableHeader>
        </tr>
      </thead>
      <tbody>{renderIssues()}</tbody>
      <tfoot>
        <tr>
          <TableHeader w={'80'}>Total Downtime</TableHeader>
          <TableHeader w={'20'}>{total.toFixed(0)}</TableHeader>
        </tr>
      </tfoot>
    </DefectTable>
  )
}
