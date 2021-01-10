import {
  CODE_INPUT_SPARE,
  NAME_INPUT_SPARE,
  NUMBER_INPUT_SPARE,
  OPTIMAL_INPUT_SPARE,
  LOCATION_INPUT_SPARE,
  FILE_INPUT_SPARE,
  CLEAN_INPUTS_SPARE,
  SELECT_INPUTS_SPARE
} from './formActions'

const initialState = {
  code: '',
  name: '',
  number: '',
  optimal: '',
  location: '',
  image: '',
  file: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CODE_INPUT_SPARE:
      return {
        ...state,
        code: action.payload
      }
    case NAME_INPUT_SPARE:
      return {
        ...state,
        name: action.payload
      }
    case NUMBER_INPUT_SPARE:
      return {
        ...state,
        number: action.payload
      }
    case OPTIMAL_INPUT_SPARE:
      return {
        ...state,
        optimal: action.payload
      }
    case LOCATION_INPUT_SPARE:
      return {
        ...state,
        location: action.payload
      }
    case FILE_INPUT_SPARE:
      return {
        ...state,
        file: action.payload
      }
    case CLEAN_INPUTS_SPARE:
      return initialState
    case SELECT_INPUTS_SPARE:
      return action.payload
    default:
      return state
  }
}

export default formReducer
