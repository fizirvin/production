import React from 'react'
import useRows from 'hooks/useRows'

export default function TableBody({ items, keys, header_keys }) {
  const { rows } = useRows(items, keys, header_keys)
  return <tbody>{rows}</tbody>
}
