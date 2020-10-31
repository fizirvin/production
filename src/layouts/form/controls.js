import React from 'react'
import SubmitComponent from './submit'
import CancelComponent from './cancel'

export default function Controls({ to }) {
  return (
    <div>
      <SubmitComponent />
      <CancelComponent to={to} />
    </div>
  )
}
