import React from 'react'
import ConnectedNumberInput from './numberInput'

export default function InputNumberComponent({
  input,
  reducer,
  label,
  name,
  min
}) {
  console.log('yo soy el componente total', name)
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        <ConnectedNumberInput
          input={input}
          reducer={reducer}
          name={name}
          min={min}
        ></ConnectedNumberInput>
      </td>
    </tr>
  )
}
