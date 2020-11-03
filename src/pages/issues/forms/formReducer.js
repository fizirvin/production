import {
  NAME_INPUT_ISSUE,
  CODE_INPUT_ISSUE,
  CLEAN_INPUTS_ISSUE
} from './formActions'

const initialState = {
  name: '',
  code: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_INPUT_ISSUE:
      return {
        ...state,
        name: action.payload
      }
    case CODE_INPUT_ISSUE:
      return {
        ...state,
        code: action.payload
      }
    case CLEAN_INPUTS_ISSUE:
      return {
        name: '',
        code: ''
      }
    default:
      return state
  }
}

export default formReducer
