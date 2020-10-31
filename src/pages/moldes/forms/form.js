import React from 'react'
import {
  FormComponent,
  InputNumberComponent,
  InputTextComponent
} from 'layouts'

import {
  NUMBER_INPUT,
  SERIAL_INPUT,
  CAVITIES_INPUT,
  LIFECYCLES_INPUT,
  TCYCLES_INPUT,
  SHOT_INPUT,
  QUANTITY_INPUT
} from './formActions'
export default function Form() {
  return (
    <FormComponent title={'Add New Injection Mold'} to={'/molds'}>
      <InputTextComponent
        reducer={'moldesForm'}
        input={'number'}
        label={'Mold Number'}
        name={NUMBER_INPUT}
      />
      <InputTextComponent
        reducer={'moldesForm'}
        input={'serial'}
        label={'Mold Serial'}
        name={SERIAL_INPUT}
      />
      <InputNumberComponent
        label={'Cavities'}
        name={CAVITIES_INPUT}
        reducer={'moldesForm'}
        input={'cavities'}
      />
      <InputNumberComponent
        label={'Lifecycles'}
        name={LIFECYCLES_INPUT}
        reducer={'moldesForm'}
        input={'lifecycles'}
      />
      <InputNumberComponent
        label={'Total Cycles'}
        name={TCYCLES_INPUT}
        reducer={'moldesForm'}
        input={'tcycles'}
      />
      <InputNumberComponent
        label={'Shot'}
        name={SHOT_INPUT}
        reducer={'moldesForm'}
        input={'shot'}
      />
      <InputNumberComponent
        label={'Quantity'}
        name={QUANTITY_INPUT}
        reducer={'moldesForm'}
        input={'quantity'}
      />
    </FormComponent>
  )
}
