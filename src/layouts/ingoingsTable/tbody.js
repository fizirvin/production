import React from 'react'
import { RenderIngoingsRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name
}) {
  const { rows } = RenderIngoingsRows(
    items,
    keys,
    header_keys,
    active,
    to,
    name
  )
  return <tbody>{rows}</tbody>
}
