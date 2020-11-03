import {
  NUMBER_INPUT_MACHINE,
  SERIAL_INPUT_MACHINE,
  CLOSING_INPUT_MACHINE,
  SPINDLE_INPUT_MACHINE,
  CLEAN_INPUTS_MACHINE
} from './formActions'

const initialState = {
  number: '',
  serial: '',
  closingForce: 0,
  spindleDiameter: 0
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
      return {
        number: '',
        serial: '',
        closingForce: 0,
        spindleDiameter: 0
      }
    default:
      return state
  }
}

export default formReducer
