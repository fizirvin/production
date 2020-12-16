import {
  TEAM_INPUT_PROFILE,
  FIRSTNAME_INPUT_PROFILE,
  LASTNAME_INPUT_PROFILE,
  GENDER_INPUT_PROFILE,
  ENTRY_INPUT_PROFILE,
  DEPARTMENT_INPUT_PROFILE,
  AREA_INPUT_PROFILE,
  POSITION_INPUT_PROFILE,
  CLEAN_INPUTS_PROFILE,
  SELECT_INPUTS_PROFILE
} from './formActions'

const initialState = {
  team: '',
  firstname: '',
  lastname: '',
  gender: '',
  entry: '',
  department: '',
  area: '',
  position: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEAM_INPUT_PROFILE:
      return {
        ...state,
        team: action.payload
      }
    case FIRSTNAME_INPUT_PROFILE:
      return {
        ...state,
        firstname: action.payload
      }
    case LASTNAME_INPUT_PROFILE:
      return {
        ...state,
        lastname: action.payload
      }
    case GENDER_INPUT_PROFILE:
      return {
        ...state,
        gender: action.payload
      }
    case ENTRY_INPUT_PROFILE:
      return {
        ...state,
        entry: action.payload
      }
    case DEPARTMENT_INPUT_PROFILE:
      return {
        ...state,
        department: action.payload
      }
    case AREA_INPUT_PROFILE:
      return {
        ...state,
        area: action.payload
      }
    case POSITION_INPUT_PROFILE:
      return {
        ...state,
        position: action.payload
      }
    case CLEAN_INPUTS_PROFILE:
      return initialState
    case SELECT_INPUTS_PROFILE:
      return action.payload
    default:
      return state
  }
}

export default formReducer
