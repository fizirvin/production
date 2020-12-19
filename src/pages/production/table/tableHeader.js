import React from 'react'
import { TH } from './styles'

export default function TableHeader({ fields, filter }) {
  const renderFields = fields.map((field) => {
    return (
      <TH key={field.value}>
        <div>
          <div>{field.field}</div>
          <div>{field.value}</div>
        </div>
      </TH>
    )
  })

  return (
    <thead>
      <tr>
        <TH>Production by {filter.toUpperCase()}</TH>
        {renderFields}
        <TH>Total</TH>
      </tr>
    </thead>
  )
}
