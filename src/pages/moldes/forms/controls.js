import React from 'react'
import { CancelComponent, SubmitComponent } from 'layouts'

export default function Controls({ onSubmit, loading, to }) {
  return (
    <div>
      <SubmitComponent loading={loading} onSubmit={onSubmit} />
      <CancelComponent to={to} />
    </div>
  )
}
