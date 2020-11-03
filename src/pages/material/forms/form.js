import React from 'react'
import { FormComponent, InputTextComponent, Controls } from 'layouts'

import {
  NUMBER_INPUT_MATERIAL,
  MANUFACTURER_INPUT_MATERIAL,
  DESCRIPTION_INPUT_MATERIAL,
  COLOR_INPUT_MATERIAL,
  ACRONYM_INPUT_MATERIAL,
  IDENTIFICATION_INPUT_MATERIAL,
  TYPE_INPUT_MATERIAL,
  UNIT_INPUT_MATERIAL,
  CLEAN_INPUTS_MATERIAL
} from './formActions'

export default function Form({ onSubmit }) {
  return (
    <FormComponent
      title={'Add New Injection Material'}
      to={'/materials'}
      controls={
        <Controls
          form={'materialsForm'}
          load={'materials'}
          to="/materials"
          name={CLEAN_INPUTS_MATERIAL}
          onSubmit={onSubmit}
        />
      }
    >
      <InputTextComponent
        reducer={'materialsForm'}
        input={'number'}
        label={'Material Number'}
        name={NUMBER_INPUT_MATERIAL}
      />
      <InputTextComponent
        reducer={'materialsForm'}
        input={'manufacturer'}
        label={'Manufacturer'}
        name={MANUFACTURER_INPUT_MATERIAL}
      />
      <InputTextComponent
        reducer={'materialsForm'}
        input={'description'}
        label={'Description'}
        name={DESCRIPTION_INPUT_MATERIAL}
      />
      <InputTextComponent
        reducer={'materialsForm'}
        input={'color'}
        label={'Color'}
        name={COLOR_INPUT_MATERIAL}
      />
      <InputTextComponent
        reducer={'materialsForm'}
        input={'acronym'}
        label={'Acronym'}
        name={ACRONYM_INPUT_MATERIAL}
      />
      <InputTextComponent
        reducer={'materialsForm'}
        input={'identification'}
        label={'Identification'}
        name={IDENTIFICATION_INPUT_MATERIAL}
      />
      <InputTextComponent
        reducer={'materialsForm'}
        input={'type'}
        label={'Type'}
        name={TYPE_INPUT_MATERIAL}
      />
      <InputTextComponent
        reducer={'materialsForm'}
        input={'unit'}
        label={'Unit'}
        name={UNIT_INPUT_MATERIAL}
      />
    </FormComponent>
  )
}
