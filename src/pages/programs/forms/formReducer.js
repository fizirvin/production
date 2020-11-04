import {
  MACHINE_INPUT_PROGRAM,
  MOLDE_INPUT_MPROGRAM,
  MODEL_INPUT_PROGRAM,
  TIME_INPUT_PROGRAM,
  CAPACITY_INPUT_PROGRAM,
  CYCLES_INPUT_PROGRAM,
  CLEAN_INPUTS_PROGRAM
} from './formActions'

const initialState = {
  machine: '',
  molde: '',
  model: '',
  time: 0.0,
  capacity: 0,
  cycles: 0
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case MACHINE_INPUT_PROGRAM:
      return {
        ...state,
        machine: action.payload
      }
    case MOLDE_INPUT_MPROGRAM:
      return {
        ...state,
        molde: action.payload
      }
    case MODEL_INPUT_PROGRAM:
      return {
        ...state,
        model: action.payload
      }
    case TIME_INPUT_PROGRAM:
      return {
        ...state,
        time: action.payload
      }
    case CAPACITY_INPUT_PROGRAM:
      return {
        ...state,
        capacity: action.payload
      }
    case CYCLES_INPUT_PROGRAM:
      return {
        ...state,
        cycles: action.payload
      }
    case CLEAN_INPUTS_PROGRAM:
      return {
        machine: '',
        molde: '',
        model: '',
        time: 0.0,
        capacity: 0,
        cycles: 0
      }
    default:
      return state
  }
}

export default formReducer
