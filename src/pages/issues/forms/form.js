import React from 'react'
import { FormComponent, InputTextComponent, Controls } from 'layouts'

import {
  NAME_INPUT_ISSUE,
  CODE_INPUT_ISSUE,
  CLEAN_INPUTS_ISSUE
} from './formActions'

export default function Form({ onSubmit }) {
  return (
    <FormComponent
      title={'Add New Injection Issue'}
      to={'/issues'}
      controls={
        <Controls
          form={'issuesForm'}
          load={'issues'}
          to="/issues"
          name={CLEAN_INPUTS_ISSUE}
          onSubmit={onSubmit}
        />
      }
    >
      <InputTextComponent
        reducer={'issuesForm'}
        input={'code'}
        label={'Issue Code'}
        name={CODE_INPUT_ISSUE}
      />
      <InputTextComponent
        reducer={'issuesForm'}
        input={'name'}
        label={'Issue Name'}
        name={NAME_INPUT_ISSUE}
      />
    </FormComponent>
  )
}
