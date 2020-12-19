import React from 'react'
import { TD } from './styles'

export default function SubData({ row, data }) {
  const renderData = data.map((d) => {
    return <TD key={d.field}>{d.value}</TD>
  })

  return (
    <tr>
      <TD>{row}</TD>
      {renderData}
    </tr>
  )
}
