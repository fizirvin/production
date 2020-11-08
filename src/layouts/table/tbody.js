import React from 'react'
import { renderRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name
}) {
  const { rows } = renderRows(items, keys, header_keys, active, to, name)
  return <tbody>{rows}</tbody>
}
