import React from 'react'
import { OutgoingTableComponent } from 'layouts'
import { keys, header_keys, header_data } from './tdata'
import { SELECT_INPUTS_OUTGOING } from '../forms/formActions'

export default function Table({ items }) {
  return (
    <OutgoingTableComponent
      items={items}
      keys={keys}
      header_data={header_data}
      header_keys={header_keys}
      to={'outgoings'}
      name={SELECT_INPUTS_OUTGOING}
    />
  )
}
