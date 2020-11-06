import React from 'react'

import {
  FormComponent,
  InputSelectComponent,
  InputTextComponent,
  Controls
} from 'layouts'

import {
  NAME_INPUT_USER,
  PASSWORD_INPUT_USER,
  LEVEL_INPUT_USER,
  CLEAN_INPUTS_USER
} from './formActions'

export default function Form({ onSubmit }) {
  const shifts = [
    { _id: '1', level: '1' },
    { _id: '2', level: '2' },
    { _id: '3', level: '3' }
  ]
  return (
    <FormComponent
      title={'Add New User'}
      to={'/users'}
      controls={
        <Controls
          form={'usersForm'}
          load={'users'}
          to="/users"
          name={CLEAN_INPUTS_USER}
          onSubmit={onSubmit}
        />
      }
    >
      <InputTextComponent
        reducer={'usersForm'}
        input={'name'}
        label={'User Name'}
        name={NAME_INPUT_USER}
      />
      <InputTextComponent
        reducer={'usersForm'}
        input={'password'}
        label={'Password'}
        name={PASSWORD_INPUT_USER}
      />
      <InputSelectComponent
        reducer={'usersForm'}
        input={'level'}
        label={'Level'}
        name={LEVEL_INPUT_USER}
        k={'level'}
        items={shifts}
      />
    </FormComponent>
  )
}
