import {
  NUMBER_INPUT_MOLDE,
  SERIAL_INPUT_MOLDE,
  CAVITIES_INPUT_MOLDE,
  LIFECYCLES_INPUT_MOLDE,
  TCYCLES_INPUT_MOLDE,
  SHOT_INPUT_MOLDE,
  QUANTITY_INPUT_MOLDE,
  CLEAN_INPUTS_MOLDE
} from './formActions'

const initialState = {
  number: '',
  serial: '',
  cavities: 0,
  lifecycles: 0,
  tcycles: 0,
  shot: 0,
  quantity: 0
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_INPUT_MOLDE:
      return {
        ...state,
        number: action.payload
      }
    case SERIAL_INPUT_MOLDE:
      return {
        ...state,
        serial: action.payload
      }
    case CAVITIES_INPUT_MOLDE:
      return {
        ...state,
        cavities: action.payload
      }
    case LIFECYCLES_INPUT_MOLDE:
      return {
        ...state,
        lifecycles: action.payload
      }
    case TCYCLES_INPUT_MOLDE:
      return {
        ...state,
        tcycles: action.payload
      }
    case SHOT_INPUT_MOLDE:
      return {
        ...state,
        shot: action.payload
      }
    case QUANTITY_INPUT_MOLDE:
      return {
        ...state,
        quantity: action.payload
      }
    case CLEAN_INPUTS_MOLDE:
      return {
        number: '',
        serial: '',
        cavities: 0,
        lifecycles: 0,
        tcycles: 0,
        shot: 0,
        quantity: 0
      }
    default:
      return state
  }
}

export default formReducer
