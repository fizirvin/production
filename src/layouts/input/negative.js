import React from 'react'
import ConnectedNegativeNumberInput from './negativeInput'

export default function NegativeNumberComponent({
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
        <ConnectedNegativeNumberInput
          input={input}
          reducer={reducer}
          name={name}
          min={min}
        ></ConnectedNegativeNumberInput>
      </td>
    </tr>
  )
}
