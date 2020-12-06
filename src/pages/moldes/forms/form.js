import React from 'react'
import {
  FormComponent,
  InputNumberComponent,
  InputTextComponent,
  InputRadioComponent,
  Controls
} from 'layouts'

import {
  NUMBER_INPUT_MOLDE,
  SERIAL_INPUT_MOLDE,
  CAVITIES_INPUT_MOLDE,
  LIFECYCLES_INPUT_MOLDE,
  TCYCLES_INPUT_MOLDE,
  SHOT_INPUT_MOLDE,
  QUANTITY_INPUT_MOLDE,
  ACTIVE_INPUT_MOLDE,
  CLEAN_INPUTS_MOLDE
} from './formActions'

export default function Form({ onSubmit, onEdit, edit }) {
  return (
    <FormComponent
      title={edit ? 'Update Injection Mold' : 'Add New Injection Mold'}
      to={'/molds'}
      controls={
        <Controls
          form={'moldesForm'}
          load={'moldes'}
          to="/molds"
          name={CLEAN_INPUTS_MOLDE}
          onSubmit={edit ? onEdit : onSubmit}
        />
      }
    >
      <InputTextComponent
        reducer={'moldesForm'}
        input={'number'}
        label={'Mold Number'}
        name={NUMBER_INPUT_MOLDE}
      />
      <InputTextComponent
        reducer={'moldesForm'}
        input={'serial'}
        label={'Mold Serial'}
        name={SERIAL_INPUT_MOLDE}
      />
      <InputNumberComponent
        label={'Cavities'}
        name={CAVITIES_INPUT_MOLDE}
        reducer={'moldesForm'}
        input={'cavities'}
        min={0}
      />
      <InputNumberComponent
        label={'Lifecycles'}
        name={LIFECYCLES_INPUT_MOLDE}
        reducer={'moldesForm'}
        input={'lifecycles'}
      />
      <InputNumberComponent
        label={'Total Cycles'}
        name={TCYCLES_INPUT_MOLDE}
        reducer={'moldesForm'}
        input={'tcycles'}
        min="1"
      />
      <InputNumberComponent
        label={'Shot'}
        name={SHOT_INPUT_MOLDE}
        reducer={'moldesForm'}
        input={'shot'}
      />
      <InputNumberComponent
        label={'Quantity'}
        name={QUANTITY_INPUT_MOLDE}
        reducer={'moldesForm'}
        input={'quantity'}
      />
      {edit && (
        <InputRadioComponent
          reducer={'moldesForm'}
          input={'active'}
          label={'Active'}
          name={ACTIVE_INPUT_MOLDE}
        />
      )}
    </FormComponent>
  )
}
