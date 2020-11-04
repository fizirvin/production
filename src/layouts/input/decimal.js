import React from 'react'
import ConnectedDecimalInput from './decimalInput'

export default function InputDecimalComponent({
  input,
  reducer,
  label,
  name,
  min
}) {
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <ConnectedDecimalInput
          input={input}
          reducer={reducer}
          name={name}
          min={min}
        ></ConnectedDecimalInput>
      </td>
    </tr>
  )
}
