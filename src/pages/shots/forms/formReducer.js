import {
  MOLDE_INPUT_SHOT,
  DATE_INPUT_SHOT,
  SHIFT_INPUT_SHOT,
  COMMENTS_INPUT_SHOT,
  CLEAN_INPUTS_SHOT,
  SELECT_INPUTS_SHOT
} from './formActions'

const initialState = {
  molde: '',
  date: '',
  shift: '',
  comments: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOLDE_INPUT_SHOT:
      return {
        ...state,
        molde: action.payload
      }
    case DATE_INPUT_SHOT:
      return {
        ...state,
        date: action.payload
      }
    case SHIFT_INPUT_SHOT:
      return {
        ...state,
        shift: action.payload
      }
    case COMMENTS_INPUT_SHOT:
      return {
        ...state,
        comments: action.payload
      }
    case CLEAN_INPUTS_SHOT:
      return {
        molde: '',
        date: '',
        shift: '',
        comments: ''
      }
    case SELECT_INPUTS_SHOT:
      return action.payload
    default:
      return state
  }
}

export default formReducer
