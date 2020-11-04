import React from 'react'
import Spinner from 'components/spinner'
import ConnectedSelectInput from './selectInput'

export default function InputSelectComponent({
  input,
  reducer,
  label,
  name,
  k,
  items,
  loading
}) {
  return (
    <tr>
      <td>
        <label>{label}: </label>
      </td>
      <td>
        {loading && <Spinner />}
        {items.length > 0 && (
          <ConnectedSelectInput
            input={input}
            reducer={reducer}
            name={name}
            k={k}
            items={items}
          ></ConnectedSelectInput>
        )}
      </td>
    </tr>
  )
}
