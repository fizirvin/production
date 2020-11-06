import React from 'react'

import {
  FormComponent,
  InputSelectComponent,
  InputTextComponent,
  InputDateComponent,
  Controls
} from 'layouts'

import {
  TEAM_INPUT_PROFILE,
  FIRSTNAME_INPUT_PROFILE,
  LASTNAME_INPUT_PROFILE,
  GENDER_INPUT_PROFILE,
  ENTRY_INPUT_PROFILE,
  DEPARTMENT_INPUT_PROFILE,
  AREA_INPUT_PROFILE,
  POSITION_INPUT_PROFILE,
  CLEAN_INPUTS_PROFILE
} from './formActions'

export default function Form({ onSubmit }) {
  const teams = [
    { _id: '1', team: 'varias' },
    { _id: '2', team: 'amealco' }
  ]
  const genders = [
    { _id: '1', gender: 'female' },
    { _id: '2', gender: 'male' }
  ]
  const depts = [{ _id: '1', dept: 'Production' }]
  const areas = [{ _id: '1', area: 'Injection' }]
  const positions = [
    { _id: '1', pos: 'Operator' },
    { _id: '2', pos: 'Inspector' },
    { _id: '3', pos: 'Leader' }
  ]

  return (
    <FormComponent
      title={'Add New Employee'}
      to={'/employees'}
      controls={
        <Controls
          form={'profilesForm'}
          load={'profiles'}
          to="/employees"
          name={CLEAN_INPUTS_PROFILE}
          onSubmit={onSubmit}
        />
      }
    >
      <InputSelectComponent
        reducer={'profilesForm'}
        input={'team'}
        label={'Team'}
        name={TEAM_INPUT_PROFILE}
        k={'team'}
        items={teams}
      />
      <InputTextComponent
        reducer={'profilesForm'}
        input={'firstname'}
        label={'Firstname'}
        name={FIRSTNAME_INPUT_PROFILE}
      />
      <InputTextComponent
        reducer={'profilesForm'}
        input={'lastname'}
        label={'Lastname'}
        name={LASTNAME_INPUT_PROFILE}
      />
      <InputSelectComponent
        reducer={'profilesForm'}
        input={'gender'}
        label={'Gender'}
        name={GENDER_INPUT_PROFILE}
        k={'gender'}
        items={genders}
      />
      <InputDateComponent
        reducer={'profilesForm'}
        input={'entry'}
        label={'Entry Date'}
        name={ENTRY_INPUT_PROFILE}
      />
      <InputSelectComponent
        reducer={'profilesForm'}
        input={'department'}
        label={'Department'}
        name={DEPARTMENT_INPUT_PROFILE}
        k={'dept'}
        items={depts}
      />
      <InputSelectComponent
        reducer={'profilesForm'}
        input={'area'}
        label={'Area'}
        name={AREA_INPUT_PROFILE}
        k={'area'}
        items={areas}
      />
      <InputSelectComponent
        reducer={'profilesForm'}
        input={'position'}
        label={'Position'}
        name={POSITION_INPUT_PROFILE}
        k={'pos'}
        items={positions}
      />
    </FormComponent>
  )
}
