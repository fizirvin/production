import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { renderOptions } from 'containers'

export default function ConnectedSelectInput({
  reducer,
  input,
  name,
  items,
  k
}) {
  const dispatch = useDispatch()

  const value = useSelector((state) => state[reducer][input])
  const options = renderOptions(items, k)

  return (
    <select
      name={name}
      value={value}
      onChange={(e) => {
        dispatch({ type: e.target.name, payload: e.target.value })
      }}
      required
    >
      <option disabled value="">
        select
      </option>
      {options}
    </select>
  )
}
