import React from 'react'
import {
  FormComponent,
  InputTextComponent,
  InputSelectComponent,
  Controls
} from 'layouts'

import {
  CODE_INPUT_LOCATION,
  NAME_INPUT_LOCATION,
  AREA_INPUT_LOCATION,
  CLEAN_INPUTS_LOCATION
} from './formActions'

export default function Form({ onSubmit, onEdit, edit, onDelete }) {
  const areas = [{ _id: 'Injection', area: 'Injection' }]

  return (
    <FormComponent
      title={edit ? 'Update Injection Location' : 'Add New Injection Location'}
      to={'/locations'}
      controls={
        <Controls
          form={'locationsForm'}
          load={'locations'}
          to="/locations"
          name={CLEAN_INPUTS_LOCATION}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
        />
      }
    >
      <InputTextComponent
        reducer={'locationsForm'}
        input={'code'}
        label={'Location Code'}
        name={CODE_INPUT_LOCATION}
      />
      <InputTextComponent
        reducer={'locationsForm'}
        input={'name'}
        label={'Location Name'}
        name={NAME_INPUT_LOCATION}
      />
      <InputSelectComponent
        reducer={'locationsForm'}
        input={'area'}
        label={'Area'}
        name={AREA_INPUT_LOCATION}
        k={'area'}
        items={areas}
      />
    </FormComponent>
  )
}
