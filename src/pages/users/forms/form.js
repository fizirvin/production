import React from 'react'

import {
  FormComponent,
  InputSelectComponent,
  InputTextComponent,
  InputRadioComponent,
  Controls
} from 'layouts'

import {
  NAME_INPUT_USER,
  PASSWORD_INPUT_USER,
  LEVEL_INPUT_USER,
  ACTIVE_INPUT_USER,
  CLEAN_INPUTS_USER
} from './formActions'

export default function Form({ onSubmit, edit, onEdit, onDelete }) {
  const levels = [
    { _id: '1', level: '1' },
    { _id: '2', level: '2' },
    { _id: '3', level: '3' }
  ]
  return (
    <FormComponent
      title={edit ? 'Update User' : 'Add New User'}
      to={'/users'}
      controls={
        <Controls
          form={'usersForm'}
          load={'users'}
          to="/users"
          name={CLEAN_INPUTS_USER}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
        />
      }
    >
      {!edit && (
        <InputTextComponent
          reducer={'usersForm'}
          input={'name'}
          label={'User Name'}
          name={NAME_INPUT_USER}
        />
      )}
      {edit && (
        <InputTextComponent
          reducer={'usersForm'}
          input={'name'}
          label={'User Name'}
          name={NAME_INPUT_USER}
          disabled
        />
      )}
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
        items={levels}
      />
      <InputRadioComponent
        reducer={'usersForm'}
        input={'active'}
        label={'Active'}
        name={ACTIVE_INPUT_USER}
      />
    </FormComponent>
  )
}
