import React from 'react'
import ConnectedInput from 'layouts/input/input'
import { useSelector } from 'react-redux'
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
    <FormComponent title={'Add New Injection Mold'}>
      {/* <InputTextComponent
        label={'Mold Number'}
        name={NUMBER_INPUT}
        value={number}
        action={changeText}
      /> */}
      <ConnectedInput
        reducer={'moldesForm'}
        input={'number'}
        label={'Mold Number'}
        name={NUMBER_INPUT}
      />
      <ConnectedInput
        reducer={'moldesForm'}
        input={'serial'}
        label={'Mold Serial'}
        name={SERIAL_INPUT}
      />

      {/* <InputTextComponent
        label={'Mold Serial'}
        name={SERIAL_INPUT}
        value={serial}
        action={changeText}
      />
      <InputNumberComponent
        label={'Cavities'}
        name={CAVITIES_INPUT}
        value={cavities}
        action={changeNumber}
      />
      <InputNumberComponent
        label={'Lifecycles'}
        name={LIFECYCLES_INPUT}
        value={lifecycles}
        action={changeNumber}
      />
      <InputNumberComponent
        label={'Total Cycles'}
        name={TCYCLES_INPUT}
        value={tcycles}
        action={changeNumber}
      />
      <InputNumberComponent
        label={'Shot'}
        name={SHOT_INPUT}
        value={shot}
        action={changeNumber}
      />
      <InputNumberComponent
        label={'Quantity'}
        name={QUANTITY_INPUT}
        value={quantity}
        action={changeNumber}
      /> */}
    </FormComponent>
  )
}
