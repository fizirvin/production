import React, { useState } from 'react'
import { Table, Mold, THMonth, THDate, TDMold, TD, StatusTD } from './styles'

export default function CalendarTable({
  headers,
  items = [],
  month,
  prevMonth
}) {
  const [percent, setPercent] = useState('')

  const hover = (object) => {
    setPercent({ percent: object.percent + '%', total: object.total })
  }

  const outHover = () => {
    setPercent('')
  }

  const currentYear = () => {
    const date = new Date()
    return date.getFullYear().toString()
  }

  const currentPrevYear = () => {
    const date = new Date()
    const prevMonth = date.getMonth()

    const prevYear = date.getFullYear()
    const year = prevMonth === 0 ? prevYear - 1 : prevYear
    const month = prevMonth === 0 ? 12 : prevMonth
    return { year: year.toString(), month: month.toString() }
  }

  const renderMoldes = items.map((item) => {
    const renderPrevOne = prevMonth.map((head) => {
      const currentMonth = `${currentPrevYear().year}-${
        currentPrevYear().month
      }-${head}`

      const shots = item.items.find(
        (shot) => shot.date === currentMonth && shot.shift === '1'
      )
      const data = shots ? (
        <StatusTD
          onMouseLeave={outHover}
          onMouseEnter={() => hover(shots)}
          status={shots.status}
        >
          {shots.machine}
        </StatusTD>
      ) : (
        <TD key={head} rowSpan="1" />
      )
      return data
    })

    const renderPrevTwo = prevMonth.map((head) => {
      const currentMonth = `${currentPrevYear().year}-${
        currentPrevYear().month
      }-${head}`
      const shots = item.items.find(
        (shot) => shot.date === currentMonth && shot.shift === '2'
      )
      const data = shots ? (
        <StatusTD
          onMouseLeave={outHover}
          onMouseEnter={() => hover(shots)}
          status={shots.status}
        >
          {shots.machine}
        </StatusTD>
      ) : (
        <TD key={head} rowSpan="1" />
      )
      return data
    })

    const renderDataOne = headers.map((head) => {
      const currentMonth = `${currentYear()}-${month.m}-${head}`
      const shots = item.items.find(
        (shot) => shot.date === currentMonth && shot.shift === '1'
      )
      const data = shots ? (
        <StatusTD
          onMouseLeave={outHover}
          onMouseEnter={() => hover(shots)}
          status={shots.status}
        >
          {shots.machine}
        </StatusTD>
      ) : (
        <TD key={head} rowSpan="1" />
      )
      return data
    })

    const renderDataTwo = headers.map((head) => {
      const currentMonth = `${currentYear()}-${month.m}-${head}`
      const shots = item.items.find(
        (shot) => shot.date === currentMonth && shot.shift === '2'
      )
      const data = shots ? (
        <StatusTD
          onMouseLeave={outHover}
          onMouseEnter={() => hover(shots)}
          status={shots.status}
        >
          {shots.machine}
        </StatusTD>
      ) : (
        <TD key={head} rowSpan="1" />
      )
      return data
    })

    return (
      <>
        <tr key={item._id}>
          <Mold rowSpan="2" colSpan="1">
            {item.molde}
          </Mold>
          {renderPrevOne}
          {renderDataOne}
        </tr>

        <tr>
          {renderPrevTwo}
          {renderDataTwo}
        </tr>
      </>
    )
  })

  const renderPrevMonth = prevMonth.map((head, index) => {
    return <THDate key={head + index}>{head}</THDate>
  })

  const renderHeaders = headers.map((head, index) => {
    return <THDate key={index + head}>{head}</THDate>
  })

  return (
    <Table>
      <thead>
        <tr>
          <THMonth colSpan={headers.length + prevMonth.length + 1}>
            {month.month}{' '}
            {percent ? (
              <div>
                {percent.percent} {percent.total}
              </div>
            ) : (
              <div>% - pieces</div>
            )}
          </THMonth>
        </tr>
        <tr>
          <TDMold>Mold</TDMold>
          {renderPrevMonth}
          {renderHeaders}
        </tr>
      </thead>
      <tbody>{renderMoldes}</tbody>
    </Table>
  )
}
