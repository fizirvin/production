import React from 'react'
import { renderOptions } from 'containers'

export default function SortComoponent({ name, items, k }) {
  const options = renderOptions(items, k)
  return (
    <>
      <label>Sort By: </label>
      <select value="" name={name}>
        <option disabled value="">
          select
        </option>
        {options}
      </select>
    </>
  )
}
