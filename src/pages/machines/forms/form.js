import React from 'react'
import {
  FormComponent,
  InputTextComponent,
  InputNumberComponent,
  Controls
} from 'layouts'

import {
  NUMBER_INPUT_MACHINE,
  SERIAL_INPUT_MACHINE,
  CLOSING_INPUT_MACHINE,
  SPINDLE_INPUT_MACHINE,
  CLEAN_INPUTS_MACHINE
} from './formActions'

export default function Form({ onSubmit }) {
  return (
    <FormComponent
      title={'Add New Injection Machine'}
      to={'/machines'}
      controls={
        <Controls
          form={'machinesForm'}
          load={'machines'}
          to="/machines"
          name={CLEAN_INPUTS_MACHINE}
          onSubmit={onSubmit}
        />
      }
    >
      <InputTextComponent
        reducer={'machinesForm'}
        input={'number'}
        label={'Machine Number'}
        name={NUMBER_INPUT_MACHINE}
      />
      <InputTextComponent
        reducer={'machinesForm'}
        input={'serial'}
        label={'Machine Serial'}
        name={SERIAL_INPUT_MACHINE}
      />
      <InputNumberComponent
        label={'Closing Force'}
        name={CLOSING_INPUT_MACHINE}
        reducer={'machinesForm'}
        input={'closingForce'}
        min={0}
      />
      <InputNumberComponent
        label={'Spindle Diameter'}
        name={SPINDLE_INPUT_MACHINE}
        reducer={'machinesForm'}
        input={'spindleDiameter'}
      />
    </FormComponent>
  )
}
