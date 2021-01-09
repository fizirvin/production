import {
  DATE_INPUT_INGOING,
  SPARE_INPUT_INGOING,
  QUANTITY_INPUT_INGOING,
  ORIGIN_INPUT_INGOING,
  PROVIDER_INPUT_INGOING,
  PRICE_INPUT_INGOING,
  CLEAN_INPUTS_INGOING,
  SELECT_INPUTS_INGOING
} from './formActions'

const initialState = {
  date: '',
  spare: '',
  quantity: '',
  origin: '',
  provider: '',
  price: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE_INPUT_INGOING:
      return {
        ...state,
        date: action.payload
      }
    case SPARE_INPUT_INGOING:
      return {
        ...state,
        spare: action.payload
      }
    case QUANTITY_INPUT_INGOING:
      return {
        ...state,
        quantity: action.payload
      }
    case ORIGIN_INPUT_INGOING:
      return {
        ...state,
        origin: action.payload
      }
    case PROVIDER_INPUT_INGOING:
      return {
        ...state,
        provider: action.payload
      }
    case PRICE_INPUT_INGOING:
      return {
        ...state,
        price: action.payload
      }
    case CLEAN_INPUTS_INGOING:
      return initialState
    case SELECT_INPUTS_INGOING:
      return action.payload
    default:
      return state
  }
}

export default formReducer
