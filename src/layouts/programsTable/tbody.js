import React from 'react'
import { RenderProgramsRows } from 'containers'

export default function TableBody({
  items,
  keys,
  header_keys,
  active,
  to,
  name
}) {
  const { rows } = RenderProgramsRows(
    items,
    keys,
    header_keys,
    active,
    to,
    name
  )
  return <tbody>{rows}</tbody>
}
