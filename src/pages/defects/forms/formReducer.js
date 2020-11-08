import {
  NAME_INPUT_DEFECT,
  CODE_INPUT_DEFECT,
  INJECTION_INPUT_DEFECT,
  CLEAN_INPUTS_DEFECT,
  SELECT_INPUTS_DEFECT
} from './formActions'

const initialState = {
  name: '',
  code: '',
  injection: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_INPUT_DEFECT:
      return {
        ...state,
        name: action.payload
      }
    case CODE_INPUT_DEFECT:
      return {
        ...state,
        code: action.payload
      }
    case INJECTION_INPUT_DEFECT:
      return {
        ...state,
        injection: action.payload
      }
    case CLEAN_INPUTS_DEFECT:
      return {
        name: '',
        code: '',
        injection: ''
      }
    case SELECT_INPUTS_DEFECT:
      return action.payload
    default:
      return state
  }
}

export default formReducer
