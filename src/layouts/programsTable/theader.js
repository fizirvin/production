import React from 'react'
import { THeader } from 'components'

export default function TableHeader({ header_data, header_keys }) {
  const tableHeaders = (arr) =>
    arr.map((head, index) => (
      <THeader key={index} id={header_keys[index]} text={head} />
    ))

  return (
    <thead>
      <tr>
        <THeader id={'id'} text={'#'} />
        {tableHeaders(header_data)}
        <THeader id={'add'} text={'Add'} />
      </tr>
    </thead>
  )
}
