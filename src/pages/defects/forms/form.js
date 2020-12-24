import React from 'react'
import {
  FormComponent,
  InputTextComponent,
  InputRadioComponent,
  Controls
} from 'layouts'

import {
  NAME_INPUT_DEFECT,
  CODE_INPUT_DEFECT,
  INJECTION_INPUT_DEFECT,
  CLEAN_INPUTS_DEFECT
} from './formActions'

export default function Form({ onSubmit, onEdit, edit, onDelete }) {
  return (
    <FormComponent
      title={edit ? 'Update Injection Defect' : 'Add New Injection Defect'}
      to={'/defects'}
      controls={
        <Controls
          form={'defectsForm'}
          load={'defects'}
          to="/defects"
          name={CLEAN_INPUTS_DEFECT}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
        />
      }
    >
      <InputTextComponent
        reducer={'defectsForm'}
        input={'code'}
        label={'Defect Code'}
        name={CODE_INPUT_DEFECT}
      />
      <InputTextComponent
        reducer={'defectsForm'}
        input={'name'}
        label={'Defect Name'}
        name={NAME_INPUT_DEFECT}
      />
      <InputRadioComponent
        reducer={'defectsForm'}
        input={'injection'}
        label={'Injection Area Defect?'}
        name={INJECTION_INPUT_DEFECT}
      />
    </FormComponent>
  )
}
