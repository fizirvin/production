import React from 'react'
import { TDSecondSub } from './styles'

export default function SecondSubData({ row, data }) {
  const renderData = data.map((d) => {
    return <TDSecondSub key={d.field}>{d.value}</TDSecondSub>
  })

  return (
    <tr>
      <TDSecondSub>{row}</TDSecondSub>
      {renderData}
    </tr>
  )
}
