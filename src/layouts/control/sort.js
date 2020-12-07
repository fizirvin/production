import React from 'react'
import { renderOptions } from 'containers'
import { CtrlsLabel } from './styles'

export default function SortComoponent({ name, items, k }) {
  const options = renderOptions(items, k)
  return (
    <>
      <CtrlsLabel>Sort By: </CtrlsLabel>
      <select value="" name={name} readOnly>
        <option disabled value="">
          select
        </option>
        {options}
      </select>
    </>
  )
}
