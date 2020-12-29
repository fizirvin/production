import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { renderOptions } from 'containers'
import { CtrlsLabel } from './styles'

export default function SortComoponent({ sortName, items, k }) {
  const [sorted, setSorted] = useState('')
  const dispatch = useDispatch()

  const options = renderOptions(items, k)

  const sortBy = (by) => {
    dispatch({ type: sortName, payload: by })
    setSorted(by)
  }

  return (
    <>
      <CtrlsLabel>Sort By: </CtrlsLabel>
      <select value={sorted} readOnly onChange={(e) => sortBy(e.target.value)}>
        <option disabled value="">
          select
        </option>
        {options}
      </select>
    </>
  )
}
