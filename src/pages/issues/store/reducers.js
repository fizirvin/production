import {
  REQUEST_ISSUES,
  REQUEST_FAILURE_ISSUES,
  FETCH_SUCCESS_ISSUES,
  UPDATE_SUCCESS_ISSUES,
  REMOVE_SUCCESS_ISSUES
} from './actions'

const initialState = {
  error: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ISSUES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_ISSUES:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_ISSUES:
      return {
        error: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_ISSUES:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        error: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_ISSUES:
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
