import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMoldes } from '../../moldes/store/actions'

import {
  FormComponent,
  InputNumberComponent,
  InputDecimalComponent,
  InputSelectComponent,
  Controls
} from 'layouts'

import {
  MOLDE_INPUT_SHOT,
  DATE_INPUT_SHOT,
  SHIFT_INPUT_SHOT,
  COMMENTS_INPUT_SHOT,
  CLEAN_INPUTS_SHOT
} from './formActions'

const Form = ({ onSubmit, moldes, fetchMoldes, moldesLoading }) => {
  useEffect(() => {
    if (moldes.length === 0) {
      fetchMoldes()
    }
    return
  }, [moldes, fetchMoldes])
  return (
    <FormComponent
      title={'Add New Molde Shot'}
      to={'/shots'}
      controls={
        <Controls
          form={'shotsForm'}
          load={'shots'}
          to="/shots"
          name={CLEAN_INPUTS_SHOT}
          onSubmit={onSubmit}
        />
      }
    >
      <InputSelectComponent
        reducer={'shotsForm'}
        input={'molde'}
        label={'Mold Number'}
        name={MOLDE_INPUT_SHOT}
        k={'number'}
        list={'moldes'}
        items={moldes}
        loading={moldesLoading}
      />

      <InputNumberComponent
        label={'Capacity pcs / hr'}
        name={CAPACITY_INPUT_PROGRAM}
        reducer={'programsForm'}
        input={'capacity'}
      />
      <InputNumberComponent
        label={'Capacity pcs / hr'}
        name={CYCLES_INPUT_PROGRAM}
        reducer={'programsForm'}
        input={'cycles'}
      />
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  moldes: state.moldes.items,
  moldesLoading: state.moldes.loading
})

export default connect(mapStateToProps, { fetchMoldes })(Form)
