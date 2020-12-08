import React from 'react'
import { RenderShotsRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name,
  shot
}) {
  const { rows } = RenderShotsRows(
    items,
    keys,
    header_keys,
    active,
    to,
    name,
    shot
  )
  return <tbody>{rows}</tbody>
}
