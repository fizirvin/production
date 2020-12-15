import React from 'react'
import TableBody from './tbody'
import TableHeader from './theader'
import { Table } from 'components'

export default function ReportTableComponent({
  items,
  keys,
  header_keys,
  header_data,
  active,
  to,
  name
}) {
  return (
    <Table>
      <TableHeader header_data={header_data} header_keys={header_keys} />
      <TableBody
        items={items}
        keys={keys}
        header_keys={header_keys}
        active={active}
        to={to}
        name={name}
      />
    </Table>
  )
}
