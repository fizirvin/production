import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from '../../locations/store/actions'
import {
  FormComponent,
  InputTextComponent,
  InputSelectComponent,
  InputNumberComponent,
  Controls
} from 'layouts'

import {
  CODE_INPUT_SPARE,
  NAME_INPUT_SPARE,
  NUMBER_INPUT_SPARE,
  LOCATION_INPUT_SPARE,
  OPTIMAL_INPUT_SPARE,
  CLEAN_INPUTS_SPARE
} from './formActions'

const Form = ({
  onSubmit,
  onEdit,
  edit,
  onDelete,
  fetchLocations,
  locations,
  locationsLoading
}) => {
  // const areas = [{ _id: 'Injection', area: 'Injection' }]
  useEffect(() => {
    if (locations.length === 0) {
      fetchLocations()
    }
    return
  }, [locations, fetchLocations])
  return (
    <FormComponent
      title={edit ? 'Update Injection Spare' : 'Add New Injection Spare'}
      to={'/spares'}
      controls={
        <Controls
          form={'sparesForm'}
          load={'spares'}
          to="/spares"
          name={CLEAN_INPUTS_SPARE}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
        />
      }
    >
      <InputTextComponent
        reducer={'sparesForm'}
        input={'code'}
        label={'Code Item (SKU)'}
        name={CODE_INPUT_SPARE}
      />
      <InputTextComponent
        reducer={'sparesForm'}
        input={'name'}
        label={'Spare Name'}
        name={NAME_INPUT_SPARE}
      />
      <InputTextComponent
        reducer={'sparesForm'}
        input={'number'}
        label={'Part Number'}
        name={NUMBER_INPUT_SPARE}
      />
      <InputSelectComponent
        reducer={'sparesForm'}
        input={'location'}
        label={'Location'}
        name={LOCATION_INPUT_SPARE}
        k={'name'}
        items={locations}
        loading={locationsLoading}
      />
      <InputNumberComponent
        label={'Optimal (pcs)'}
        name={OPTIMAL_INPUT_SPARE}
        reducer={'sparesForm'}
        input={'optimal'}
      />
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  locations: state.locations.items,
  locationsLoading: state.locations.loading
})

export default connect(mapStateToProps, {
  fetchLocations
})(Form)
