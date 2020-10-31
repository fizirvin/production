import React from 'react'
import ConnectedTextInput from './input'

export default function InputTextComponent({ input, reducer, label, name }) {
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <ConnectedTextInput
          input={input}
          reducer={reducer}
          name={name}
        ></ConnectedTextInput>
      </td>
    </tr>
  )
}
