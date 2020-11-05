import React from 'react'
import ConnectedTextAreaInput from './textareaInput'

export default function InputTextAreaComponent({
  input,
  reducer,
  label,
  name,
  length,
  rows,
  cols
}) {
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <ConnectedTextAreaInput
          input={input}
          reducer={reducer}
          name={name}
          length={length}
          rows={rows}
          cols={cols}
        ></ConnectedTextAreaInput>
      </td>
    </tr>
  )
}
