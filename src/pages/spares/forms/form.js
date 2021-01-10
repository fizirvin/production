import React, { useEffect, useState } from 'react'
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
  CLEAN_INPUTS_SPARE,
  setFile
} from './formActions'

const Form = ({
  onSubmit,
  onEdit,
  edit,
  onDelete,
  fetchLocations,
  locations,
  locationsLoading,
  setFile,
  image = ''
}) => {
  const [advice, setAdvice] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')
  const [picture_URL] = useState(image)

  useEffect(() => {
    if (locations.length === 0) {
      fetchLocations()
    }
    return
  }, [locations, fetchLocations])

  const fileChangedHandler = (e) => {
    if (e.target.files.length === 1) {
      const file = e.target.files[0]
      if (file.size >= 500000) {
        setAdvice('File is too big, please set a file smaller than 500 KB')
        e.target.value = ''
      } else {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
        setFile(file)
      }
    } else {
      return
    }
  }

  const imagePreview = () => {
    if (advice) {
      return (
        <tr>
          <td colSpan={'2'}>
            <div>
              {advice}
              <button type="button" onClick={() => setAdvice('')}>
                Ok
              </button>
            </div>
          </td>
        </tr>
      )
    }
    if ((!advice && imagePreviewUrl) || (!advice && picture_URL)) {
      return (
        <tr>
          <td colSpan={'2'}>
            <div>
              <img
                src={imagePreviewUrl || picture_URL}
                alt="icon"
                width="250"
                height="250"
                objectfit={'contain'}
              />{' '}
            </div>
          </td>
        </tr>
      )
    }
  }

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
      <tr>
        <td>
          <label htmlFor="image">Picture: </label>
        </td>
        <td>
          <input
            type="file"
            name="image"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={fileChangedHandler}
          ></input>
        </td>
      </tr>
      {imagePreview()}
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  locations: state.locations.items,
  locationsLoading: state.locations.loading,
  image: state.sparesForm.image
})

export default connect(mapStateToProps, {
  fetchLocations,
  setFile
})(Form)
