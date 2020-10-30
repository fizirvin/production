import {
  NUMBER_INPUT,
  SERIAL_INPUT,
  CAVITIES_INPUT,
  LIFECYCLES_INPUT,
  TCYCLES_INPUT,
  SHOT_INPUT,
  QUANTITY_INPUT
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
    case NUMBER_INPUT:
      return {
        ...state,
        number: action.payload
      }
    case SERIAL_INPUT:
      return {
        ...state,
        serial: action.payload
      }
    case CAVITIES_INPUT:
      return {
        ...state,
        cavities: action.payload
      }
    case LIFECYCLES_INPUT:
      return {
        ...state,
        lifecycles: action.payload
      }
    case TCYCLES_INPUT:
      return {
        ...state,
        tcycles: action.payload
      }
    case SHOT_INPUT:
      return {
        ...state,
        shot: action.payload
      }
    case QUANTITY_INPUT:
      return {
        ...state,
        quantity: action.payload
      }
    default:
      return state
  }
}

export default formReducer
