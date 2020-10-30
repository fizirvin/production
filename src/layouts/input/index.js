import React from 'react'

export default function InputTextComponent({ label, name, value, action }) {
  console.log('yo soy', name)
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
          onChange={(e) => action(e.target.name, e.target.value)}
          required
        ></input>
      </td>
    </tr>
  )
}
