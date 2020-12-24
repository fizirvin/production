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

export default function Form({ onSubmit, onEdit, edit, onDelete }) {
  const teams = [
    { _id: 'varias', team: 'varias' },
    { _id: 'amealco', team: 'amealco' }
  ]
  const genders = [
    { _id: 'female', gender: 'female' },
    { _id: 'male', gender: 'male' }
  ]
  const depts = [{ _id: 'Production', dept: 'Production' }]
  const areas = [{ _id: 'Injection', area: 'Injection' }]
  const positions = [
    { _id: 'Operator', pos: 'Operator' },
    { _id: 'Inspector', pos: 'Inspector' },
    { _id: 'Leader', pos: 'Leader' }
  ]

  return (
    <FormComponent
      title={edit ? 'Update Injection Employee' : 'Add New Injection Employee'}
      to={'/employees'}
      controls={
        <Controls
          form={'profilesForm'}
          load={'profiles'}
          to="/employees"
          name={CLEAN_INPUTS_PROFILE}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
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
