import React from 'react'
import TableBody from './tbody'
import TableHeader from './theader'
import { Table } from 'components'

export default function ShotsTableComponent({
  items,
  keys,
  header_keys,
  header_data,
  active,
  to,
  name,
  shot
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
        shot={shot}
      />
    </Table>
  )
}
