import React from 'react'

export default function InputNumberComponent({
  label,
  name,
  value,
  action,
  min = 0
}) {
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <input
          type="number"
          name={name}
          value={value}
          onChange={(e) => action(e.target.name, e.target.value)}
          min={min}
          required
        ></input>
      </td>
    </tr>
  )
}
