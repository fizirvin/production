import React from 'react'
import ConnectedRadioInput from './radioInput'

export default function InputRadioComponent({ input, reducer, label, name }) {
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <ConnectedRadioInput
          input={input}
          reducer={reducer}
          name={name}
        ></ConnectedRadioInput>
      </td>
    </tr>
  )
}
