import React from 'react'
import { RenderOutgoingsRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name
}) {
  const { rows } = RenderOutgoingsRows(
    items,
    keys,
    header_keys,
    active,
    to,
    name
  )
  return <tbody>{rows}</tbody>
}
