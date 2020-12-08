import React from 'react'
import { CyclesTable, TH, TD, StatusTD } from './styles'

export default function CyclesList({ items }) {
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
            {quantity} <button>finish</button>
          </StatusTD>
        </tr>
      )
    })
  }

  return (
    <CyclesTable>
      <thead>
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
