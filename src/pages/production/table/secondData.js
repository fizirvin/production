import React, { useState } from 'react'
import SecondSubData from './secondSubData'
import { TDSecond, DisplayButton, TRow } from './styles'

export default function SecondData({ row, data = [], second = [] }) {
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
    return <TDSecond key={d.field}>{d.value}</TDSecond>
  })

  const renderSub = second.map((s) => {
    return <SecondSubData key={s.row} {...s} />
  })

  return (
    <>
      <tr>
        <TDSecond>
          <TRow>
            {second.length > 0 && (
              <DisplayButton color={color} onClick={display}>
                ▼
              </DisplayButton>
            )}
            {row}
          </TRow>
        </TDSecond>
        {renderData}
      </tr>
      {displaySub && renderSub}
    </>
  )
}
