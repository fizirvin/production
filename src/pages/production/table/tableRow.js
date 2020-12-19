import React, { useState } from 'react'
import SubData from './subData'
import SecondData from './secondData'
import { TD, TRow, DisplayButton } from './styles'

export default function TableRow({ row, data, subData = [], second = [] }) {
  const [color, setColor] = useState('')
  const [displaySub, setDisplay] = useState(false)

  const display = () => {
    if (color) {
      setColor('')
      setDisplay(false)
    } else {
      setColor('red')
      setDisplay(true)
    }
  }
  const renderData = data.map((d) => {
    return <TD key={d.field}>{d.value}</TD>
  })

  const renderSub = subData.map((s) => {
    return <SubData key={s.row} {...s} />
  })

  const renderSecond = second.map((s) => {
    return <SecondData key={s.row} {...s} />
  })
  return (
    <>
      <tr>
        <TD>
          <TRow>
            <DisplayButton color={color} onClick={display}>
              ▼
            </DisplayButton>
            {row}
          </TRow>
        </TD>
        {renderData}
      </tr>
      {displaySub && renderSecond}
      {displaySub && renderSub}
    </>
  )
}
