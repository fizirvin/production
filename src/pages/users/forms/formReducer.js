import {
  NAME_INPUT_USER,
  PASSWORD_INPUT_USER,
  LEVEL_INPUT_USER,
  CLEAN_INPUTS_USER
} from './formActions'

const initialState = {
  name: '',
  password: '',
  level: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_INPUT_USER:
      return {
        ...state,
        name: action.payload
      }
    case PASSWORD_INPUT_USER:
      return {
        ...state,
        password: action.payload
      }
    case LEVEL_INPUT_USER:
      return {
        ...state,
        level: action.payload
      }
    case CLEAN_INPUTS_USER:
      return {
        name: '',
        password: '',
        level: ''
      }
    default:
      return state
  }
}

export default formReducer
