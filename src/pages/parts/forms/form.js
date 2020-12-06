import React from 'react'
import { FormComponent, InputTextComponent, Controls } from 'layouts'

import {
  NUMBER_INPUT_MODEL,
  NAME_INPUT_MODEL,
  FAMILY_INPUT_MODEL,
  CLEAN_INPUTS_MODEL
} from './formActions'

export default function Form({ onSubmit, onEdit, edit }) {
  return (
    <FormComponent
      title={edit ? 'Update Injection Model' : 'Add New Injection Model'}
      to={'/models'}
      controls={
        <Controls
          form={'modelsForm'}
          load={'models'}
          to="/models"
          name={CLEAN_INPUTS_MODEL}
          onSubmit={edit ? onEdit : onSubmit}
        />
      }
    >
      <InputTextComponent
        reducer={'modelsForm'}
        input={'number'}
        label={'Part Number'}
        name={NUMBER_INPUT_MODEL}
      />
      <InputTextComponent
        reducer={'modelsForm'}
        input={'name'}
        label={'Part Name'}
        name={NAME_INPUT_MODEL}
      />
      <InputTextComponent
        reducer={'modelsForm'}
        input={'family'}
        label={'Family'}
        name={FAMILY_INPUT_MODEL}
      />
    </FormComponent>
  )
}
