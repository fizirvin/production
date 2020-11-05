import React from 'react'
import ConnectedTextInput from './input'

export default function InputTextComponent({
  input,
  reducer,
  label,
  name,
  length
}) {
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
          length={length}
        ></ConnectedTextInput>
      </td>
    </tr>
  )
}
