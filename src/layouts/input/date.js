import React from 'react'
import ConnectedDateInput from './dateInput'

export default function InputDateComponent({ input, reducer, label, name }) {
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <ConnectedDateInput
          input={input}
          reducer={reducer}
          name={name}
        ></ConnectedDateInput>
      </td>
    </tr>
  )
}
