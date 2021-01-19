import React from 'react'
import CancelComponent from './cancel'
import SubmitReport from './submitReport'
import DeleteComponent from './delete'

export default function ControlsReport({
  form,
  onSubmit,
  load,
  to,
  name,
  edit,
  onDelete
}) {
  return (
    <div>
      <SubmitReport form={form} load={load} name={name} onSubmit={onSubmit} />

      <CancelComponent to={to} name={name} />
      {edit && (
        <div>
          <DeleteComponent
            form={form}
            load={load}
            onDelete={onDelete}
            name={name}
          />
        </div>
      )}
    </div>
  )
}
