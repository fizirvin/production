import {
  REQUEST_MODELS,
  REQUEST_FAILURE_MODELS,
  FETCH_SUCCESS_MODELS,
  UPDATE_SUCCESS_MODELS,
  REMOVE_SUCCESS_MODELS
} from './actions'

const initialState = {
  error: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MODELS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MODELS:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_MODELS:
      return {
        error: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_MODELS:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        error: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_MODELS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        error: '',
        loading: false,
        items: removeItems
      }
    default:
      return state
  }
}

export default reducer
