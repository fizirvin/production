import React from 'react'
import { RenderRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name
}) {
  const { rows } = RenderRows(items, keys, header_keys, active, to, name)
  return <tbody>{rows}</tbody>
}
