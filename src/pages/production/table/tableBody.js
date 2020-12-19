import React from 'react'
import TableRow from './tableRow'

export default function TableBody({ rows }) {
  const renderRows = rows.map((row) => {
    return <TableRow key={row.row} {...row} />
  })
  return <tbody>{renderRows}</tbody>
}
