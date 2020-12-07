import React from 'react'
import { ProgramTableComponent } from 'layouts'
import { keys, header_keys, header_data } from './tdata'
import { SELECT_INPUTS_PROGRAM } from '../forms/formActions'

export default function Table({ items }) {
  return (
    <ProgramTableComponent
      items={items}
      keys={keys}
      header_data={header_data}
      header_keys={header_keys}
      to={'programs'}
      name={SELECT_INPUTS_PROGRAM}
    />
  )
}
