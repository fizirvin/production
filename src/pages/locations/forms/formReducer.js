import {
  CODE_INPUT_LOCATION,
  NAME_INPUT_LOCATION,
  AREA_INPUT_LOCATION,
  CLEAN_INPUTS_LOCATION,
  SELECT_INPUTS_LOCATION
} from './formActions'

const initialState = {
  code: '',
  name: '',
  area: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CODE_INPUT_LOCATION:
      return {
        ...state,
        code: action.payload
      }
    case NAME_INPUT_LOCATION:
      return {
        ...state,
        name: action.payload
      }
    case AREA_INPUT_LOCATION:
      return {
        ...state,
        area: action.payload
      }
    case CLEAN_INPUTS_LOCATION:
      return initialState
    case SELECT_INPUTS_LOCATION:
      return action.payload
    default:
      return state
  }
}

export default formReducer
