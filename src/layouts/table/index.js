import React from 'react'
import TableBody from './tbody'
import TableHeader from './theader'
import { Table } from 'components'

export default function TableComponent({
  items,
  keys,
  header_keys,
  header_data
}) {
  return (
    <Table>
      <TableHeader header_data={header_data} header_keys={header_keys} />
      <TableBody items={items} keys={keys} header_keys={header_keys} />
    </Table>
  )
}
