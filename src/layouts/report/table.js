import React from 'react'
import renderInputs from './renderInputs'
import renderPrograms from './renderPrograms'
import { Table, TableHeader } from './styles'

export default function ReportTable({ items, programs, name }) {
  const inputs = renderInputs(items)
  const programsInputs = renderPrograms(programs, name)
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader w={'14'}>Mold</TableHeader>
          <TableHeader w={'14'}>Part Number</TableHeader>
          <TableHeader w={'6'}>Real (pcs)</TableHeader>
          <TableHeader w={'6'}>NG (pcs)</TableHeader>
          <TableHeader w={'6'}>OK (pcs)</TableHeader>
          <TableHeader w={'6'}>Cycles</TableHeader>
          <TableHeader w={'6'}>Plan (pcs)</TableHeader>
          <TableHeader w={'6'}>WTime (hrs)</TableHeader>
          <TableHeader w={'6'}>Prod (pcs)</TableHeader>
          <TableHeader w={'6'}>DTime (hrs)</TableHeader>
          <TableHeader w={'6'}>Avail%</TableHeader>
          <TableHeader w={'6'}>Perf%</TableHeader>
          <TableHeader w={'6'}>Qlty%</TableHeader>
          <TableHeader w={'6'}>OEE%</TableHeader>
        </tr>
      </thead>
      <tbody>{programsInputs}</tbody>
      <tfoot>
        <tr>
          <TableHeader colSpan="2">Total</TableHeader>
          {inputs}
        </tr>
      </tfoot>
    </Table>
  )
}
