import React from 'react'
import { ReportTableComponent } from 'layouts'
import { keys, header_keys, header_data } from './tdata'
import { SELECT_INPUTS_REPORTS } from '../forms/formActions'

export default function Table({ items }) {
  return (
    <ReportTableComponent
      items={items}
      keys={keys}
      header_data={header_data}
      header_keys={header_keys}
      to={'reports'}
      name={SELECT_INPUTS_REPORTS}
    />
  )
}
