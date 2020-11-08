import {
  NUMBER_INPUT_MODEL,
  NAME_INPUT_MODEL,
  FAMILY_INPUT_MODEL,
  CLEAN_INPUTS_MODEL,
  SELECT_INPUTS_MODEL
} from './formActions'

const initialState = {
  number: '',
  name: '',
  family: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_INPUT_MODEL:
      return {
        ...state,
        number: action.payload
      }
    case NAME_INPUT_MODEL:
      return {
        ...state,
        name: action.payload
      }
    case FAMILY_INPUT_MODEL:
      return {
        ...state,
        family: action.payload
      }
    case CLEAN_INPUTS_MODEL:
      return {
        number: '',
        name: '',
        family: ''
      }
    case SELECT_INPUTS_MODEL:
      return action.payload
    default:
      return state
  }
}

export default formReducer
