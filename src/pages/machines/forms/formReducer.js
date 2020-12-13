import {
  NUMBER_INPUT_MACHINE,
  SERIAL_INPUT_MACHINE,
  CLOSING_INPUT_MACHINE,
  SPINDLE_INPUT_MACHINE,
  CLEAN_INPUTS_MACHINE,
  SELECT_INPUTS_MACHINE
} from './formActions'

const initialState = {
  number: '',
  serial: '',
  closingForce: '',
  spindleDiameter: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_INPUT_MACHINE:
      return {
        ...state,
        number: action.payload
      }
    case SERIAL_INPUT_MACHINE:
      return {
        ...state,
        serial: action.payload
      }
    case CLOSING_INPUT_MACHINE:
      return {
        ...state,
        closingForce: action.payload
      }
    case SPINDLE_INPUT_MACHINE:
      return {
        ...state,
        spindleDiameter: action.payload
      }
    case CLEAN_INPUTS_MACHINE:
      return initialState
    case SELECT_INPUTS_MACHINE:
      return action.payload
    default:
      return state
  }
}

export default formReducer
