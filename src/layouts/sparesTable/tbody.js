import React from 'react'
import { RenderSparesRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name
}) {
  const { rows } = RenderSparesRows(items, keys, header_keys, active, to, name)
  return <tbody>{rows}</tbody>
}
