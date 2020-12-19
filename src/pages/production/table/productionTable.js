import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import { Table } from './styles'

export default function ProductionTable({ fields = [], rows, filter }) {
  return (
    <Table>
      <TableHeader fields={fields} filter={filter} />
      <TableBody rows={rows} />
    </Table>
  )
}
