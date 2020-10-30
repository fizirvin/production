import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ConnectedInput({ reducer, input, label, name }) {
  console.log('yo soy', name)
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) =>
            dispatch({ type: e.target.name, payload: e.target.value })
          }
          required
        ></input>
      </td>
    </tr>
  )
}
