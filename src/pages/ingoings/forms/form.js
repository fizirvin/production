import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSpares } from '../../spares/store/actions'
import {
  FormComponent,
  InputTextComponent,
  InputSelectComponent,
  InputNumberComponent,
  InputDecimalComponent,
  InputDateComponent,
  Controls
} from 'layouts'

import {
  DATE_INPUT_INGOING,
  SPARE_INPUT_INGOING,
  QUANTITY_INPUT_INGOING,
  ORIGIN_INPUT_INGOING,
  PROVIDER_INPUT_INGOING,
  PRICE_INPUT_INGOING,
  CLEAN_INPUTS_INGOING
} from './formActions'

const Form = ({
  onSubmit,
  onEdit,
  edit,
  onDelete,
  fetchSpares,
  spares,
  sparesLoading
}) => {
  const origins = [
    { _id: 'Initial', origin: 'Initial' },
    { _id: 'Inventory', origin: 'Inventory' },
    { _id: 'PO', origin: 'PO' }
  ]
  useEffect(() => {
    if (spares.length === 0) {
      fetchSpares()
    }
    return
  }, [spares, fetchSpares])
  return (
    <FormComponent
      title={edit ? 'Update Spare Ingoing' : 'Add New Spare Ingoing'}
      to={'/ingoings'}
      controls={
        <Controls
          form={'ingoingsForm'}
          load={'ingoings'}
          to="/ingoings"
          name={CLEAN_INPUTS_INGOING}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
        />
      }
    >
      <InputDateComponent
        reducer={'ingoingsForm'}
        input={'date'}
        label={'Date'}
        name={DATE_INPUT_INGOING}
      />

      <InputSelectComponent
        reducer={'ingoingsForm'}
        input={'spare'}
        label={'Spare'}
        name={SPARE_INPUT_INGOING}
        k={'name'}
        items={spares}
        loading={sparesLoading}
      />
      <InputNumberComponent
        label={'Quantity'}
        name={QUANTITY_INPUT_INGOING}
        reducer={'ingoingsForm'}
        input={'quantity'}
      />
      <InputSelectComponent
        reducer={'ingoingsForm'}
        input={'origin'}
        label={'Origin'}
        name={ORIGIN_INPUT_INGOING}
        k={'origin'}
        items={origins}
      />
      <InputTextComponent
        reducer={'ingoingsForm'}
        input={'provider'}
        label={'Provider'}
        name={PROVIDER_INPUT_INGOING}
      />
      <InputDecimalComponent
        label={'Price (Unit)'}
        name={PRICE_INPUT_INGOING}
        reducer={'ingoingsForm'}
        input={'price'}
      />
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  spares: state.spares.items,
  sparesLoading: state.spares.loading
})

export default connect(mapStateToProps, {
  fetchSpares
})(Form)
