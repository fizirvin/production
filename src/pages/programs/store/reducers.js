import {
  REQUEST_PROGRAMS,
  REQUEST_FAILURE_PROGRAMS,
  FETCH_SUCCESS_PROGRAMS,
  UPDATE_SUCCESS_PROGRAMS,
  REMOVE_SUCCESS_PROGRAMS
} from './actions'

const initialState = {
  error: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROGRAMS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_PROGRAMS:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_PROGRAMS:
      return {
        error: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_PROGRAMS:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        error: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_PROGRAMS:
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
