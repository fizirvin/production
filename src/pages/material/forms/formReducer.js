import {
  NUMBER_INPUT_MATERIAL,
  MANUFACTURER_INPUT_MATERIAL,
  DESCRIPTION_INPUT_MATERIAL,
  COLOR_INPUT_MATERIAL,
  ACRONYM_INPUT_MATERIAL,
  IDENTIFICATION_INPUT_MATERIAL,
  TYPE_INPUT_MATERIAL,
  UNIT_INPUT_MATERIAL,
  CLEAN_INPUTS_MATERIAL,
  SELECT_INPUTS_MATERIAL
} from './formActions'

const initialState = {
  number: '',
  manufacturer: '',
  description: '',
  color: '',
  acronym: '',
  identification: '',
  type: '',
  unit: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_INPUT_MATERIAL:
      return {
        ...state,
        number: action.payload
      }
    case MANUFACTURER_INPUT_MATERIAL:
      return {
        ...state,
        manufacturer: action.payload
      }
    case DESCRIPTION_INPUT_MATERIAL:
      return {
        ...state,
        description: action.payload
      }
    case COLOR_INPUT_MATERIAL:
      return {
        ...state,
        color: action.payload
      }
    case ACRONYM_INPUT_MATERIAL:
      return {
        ...state,
        acronym: action.payload
      }
    case IDENTIFICATION_INPUT_MATERIAL:
      return {
        ...state,
        identification: action.payload
      }
    case TYPE_INPUT_MATERIAL:
      return {
        ...state,
        type: action.payload
      }
    case UNIT_INPUT_MATERIAL:
      return {
        ...state,
        unit: action.payload
      }
    case CLEAN_INPUTS_MATERIAL:
      return {
        number: '',
        manufacturer: '',
        description: '',
        color: '',
        acronym: '',
        identification: '',
        type: '',
        unit: ''
      }
    case SELECT_INPUTS_MATERIAL:
      return action.payload
    default:
      return state
  }
}

export default formReducer
