import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CyclesTable, TH, TD, StatusTD } from './styles'

export default function CyclesList({
  items,
  shot,
  molde,
  active,
  clean,
  finish
}) {
  const dispatch = useDispatch()

  const onClean = () => {
    dispatch({ type: clean })
  }

  const onFinish = (object) => {
    finish(object)
  }

  const renderItems = (cycles) => {
    return cycles.map((cycle, index) => {
      const quantity = cycles.slice(0, index + 1).reduce((a, b) => {
        return a + b.real || 0
      }, 0)

      const status = cycle.quantity >= quantity ? 'green' : 'red'

      return (
        <tr key={cycle._id}>
          <TD>{index + 1}</TD>
          <TD>{cycle.date}</TD>
          <TD>{cycle.shift}</TD>
          <TD>{cycle.machine}</TD>
          <TD>{cycle.cycles}</TD>
          <TD>{cycle.real}</TD>
          <StatusTD status={status}>
            {quantity}{' '}
            {active && (
              <Link
                to={'/shots/'}
                onClick={() =>
                  onFinish({
                    shot: shot,
                    end: cycle.date,
                    shift: cycle.shift,
                    quantity: quantity
                  })
                }
              >
                <button>finish</button>
              </Link>
            )}
          </StatusTD>
        </tr>
      )
    })
  }

  return (
    <CyclesTable>
      <thead>
        <tr>
          <TH colSpan="7">
            Molde: {molde}
            <Link to={'/shots/'} onClick={onClean}>
              <button>Back to Shots</button>
            </Link>
          </TH>
        </tr>
        <tr>
          <TH>#</TH>
          <TH>Date</TH>
          <TH>Shift</TH>
          <TH>Machine</TH>
          <TH>Cycles</TH>
          <TH>Real</TH>
          <TH>Status</TH>
        </tr>
      </thead>
      <tbody>{renderItems(items)}</tbody>
    </CyclesTable>
  )
}
