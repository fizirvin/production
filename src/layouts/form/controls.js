import React from 'react'
import CancelComponent from './cancel'
import SubmitComponent from './submit'

export default function Controls({ form, onSubmit, load, to, name }) {
  return (
    <div>
      <SubmitComponent
        form={form}
        load={load}
        name={name}
        onSubmit={onSubmit}
      />
      <CancelComponent to={to} name={name} />
    </div>
  )
}
