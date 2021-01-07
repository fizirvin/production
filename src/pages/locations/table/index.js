import React from 'react'
import { TableComponent } from 'layouts'
import { keys, header_keys, header_data } from './tdata'
import { SELECT_INPUTS_LOCATION } from '../forms/formActions'

export default function Table({ items }) {
  return (
    <TableComponent
      items={items}
      keys={keys}
      header_data={header_data}
      header_keys={header_keys}
      to={'locations'}
      name={SELECT_INPUTS_LOCATION}
    />
  )
}
