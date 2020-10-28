import React from 'react'
import useRows from 'hooks/useRows'

export default function TableBody({ items, keys, header_keys, active }) {
  const { rows } = useRows(items, keys, header_keys, active)
  return <tbody>{rows}</tbody>
}
