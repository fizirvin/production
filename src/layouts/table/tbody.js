import React from 'react'
import { renderRows } from 'containers'

export default function TableBody({ items, keys, header_keys, active }) {
  const { rows } = renderRows(items, keys, header_keys, active)
  return <tbody>{rows}</tbody>
}
