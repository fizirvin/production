import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMoldes } from '../../moldes/store/actions'

import {
  FormComponent,
  InputDateComponent,
  InputSelectComponent,
  InputTextAreaComponent,
  Controls
} from 'layouts'

import {
  MOLDE_INPUT_SHOT,
  DATE_INPUT_SHOT,
  SHIFT_INPUT_SHOT,
  COMMENTS_INPUT_SHOT,
  CLEAN_INPUTS_SHOT
} from './formActions'

const Form = ({
  onSubmit,
  moldes,
  fetchMoldes,
  moldesLoading,
  edit,
  onEdit,
  onDelete
}) => {
  useEffect(() => {
    if (moldes.length === 0) {
      fetchMoldes()
    }
    return
  }, [moldes, fetchMoldes])

  const shifts = [
    { _id: '1', shift: '1' },
    { _id: '2', shift: '2' }
  ]
  return (
    <FormComponent
      title={edit ? 'Update Mold Shot' : 'Add New Mold Shot'}
      to={'/shots'}
      controls={
        <Controls
          form={'shotsForm'}
          load={'shots'}
          to="/shots"
          name={CLEAN_INPUTS_SHOT}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
        />
      }
    >
      <InputSelectComponent
        reducer={'shotsForm'}
        input={'molde'}
        label={'Mold Number'}
        name={MOLDE_INPUT_SHOT}
        k={'number'}
        items={moldes}
        loading={moldesLoading}
      />
      <InputDateComponent
        reducer={'shotsForm'}
        input={'date'}
        label={'Start Date'}
        name={DATE_INPUT_SHOT}
      />
      <InputSelectComponent
        reducer={'shotsForm'}
        input={'shift'}
        label={'Start Shift'}
        name={SHIFT_INPUT_SHOT}
        k={'shift'}
        items={shifts}
        loading={moldesLoading}
      />
      <InputTextAreaComponent
        reducer={'shotsForm'}
        input={'comments'}
        label={'Comments'}
        name={COMMENTS_INPUT_SHOT}
        length={'60'}
      />
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  moldes: state.moldes.items,
  moldesLoading: state.moldes.loading
})

export default connect(mapStateToProps, { fetchMoldes })(Form)
