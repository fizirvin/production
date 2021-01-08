import React from 'react'
import { SpareTableComponent } from 'layouts'
import { keys, header_keys, header_data } from './tdata'
import { SELECT_INPUTS_SPARE } from '../forms/formActions'

export default function Table({ items }) {
  return (
    <SpareTableComponent
      items={items}
      keys={keys}
      header_data={header_data}
      header_keys={header_keys}
      to={'spares'}
      name={SELECT_INPUTS_SPARE}
    />
  )
}
