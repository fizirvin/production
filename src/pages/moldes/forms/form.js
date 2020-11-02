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
import Controls from './controls'

export default function Form({ loading, onSubmit }) {
  return (
    <FormComponent
      title={'Add New Injection Mold'}
      to={'/molds'}
      controls={<Controls loading={loading} to="/molds" onSubmit={onSubmit} />}
    >
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
        min={0}
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
        min="1"
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
