import React from 'react'
import { RenderReportsRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name
}) {
  const { rows } = RenderReportsRows(items, keys, header_keys, active, to, name)
  return <tbody>{rows}</tbody>
}
