import {
  DATE_INPUT_OUTGOING,
  SHIFT_INPUT_OUTGOING,
  TEAM_INPUT_OUTGOING,
  MACHINE_INPUT_OUTGOING,
  MOLDE_INPUT_OUTGOING,
  OPERATOR_INPUT_OUTGOING,
  SPARE_INPUT_OUTGOING,
  QUANTITY_INPUT_OUTGOING,
  IMAGE_INPUT_OUTGOING,
  DESCRIPTION_INPUT_OUTGOING,
  REPAIRMAN_INPUT_OUTGOING,
  METHOD_INPUT_OUTGOING,
  CLEAN_INPUTS_OUTGOING,
  SELECT_INPUTS_OUTGOING
} from './formActions'

const initialState = {
  date: '',
  shift: '',
  team: '',
  machine: '',
  molde: '',
  operator: '',
  spare: '',
  quantity: '',
  image: '',
  description: '',
  repairman: '',
  method: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE_INPUT_OUTGOING:
      return {
        ...state,
        date: action.payload
      }
    case SHIFT_INPUT_OUTGOING:
      return {
        ...state,
        shift: action.payload
      }
    case TEAM_INPUT_OUTGOING:
      return {
        ...state,
        team: action.payload
      }
    case MACHINE_INPUT_OUTGOING:
      return {
        ...state,
        machine: action.payload
      }
    case MOLDE_INPUT_OUTGOING:
      return {
        ...state,
        molde: action.payload
      }
    case OPERATOR_INPUT_OUTGOING:
      return {
        ...state,
        operator: action.payload
      }
    case SPARE_INPUT_OUTGOING:
      return {
        ...state,
        spare: action.payload
      }
    case QUANTITY_INPUT_OUTGOING:
      return {
        ...state,
        quantity: action.payload
      }
    case IMAGE_INPUT_OUTGOING:
      return {
        ...state,
        image: action.payload
      }
    case DESCRIPTION_INPUT_OUTGOING:
      return {
        ...state,
        description: action.payload
      }
    case REPAIRMAN_INPUT_OUTGOING:
      return {
        ...state,
        repairman: action.payload
      }
    case METHOD_INPUT_OUTGOING:
      return {
        ...state,
        method: action.payload
      }
    case CLEAN_INPUTS_OUTGOING:
      return initialState
    case SELECT_INPUTS_OUTGOING:
      return action.payload
    default:
      return state
  }
}

export default formReducer
