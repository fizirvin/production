import React from 'react'
import { ShotsTableComponent } from 'layouts'
import { keys, header_keys, header_data } from './tdata'
import { SELECT_INPUTS_SHOT } from '../forms/formActions'
import { SHOT_INPUT_CYCLES } from '../cycles/cyclesReducer'

export default function Table({ items }) {
  return (
    <ShotsTableComponent
      items={items}
      keys={keys}
      header_data={header_data}
      header_keys={header_keys}
      active={'active'}
      to={'shots'}
      name={SELECT_INPUTS_SHOT}
      shot={SHOT_INPUT_CYCLES}
    />
  )
}
