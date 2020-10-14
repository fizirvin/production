import {
  REQUEST_DEFECTS,
  REQUEST_FAILURE_DEFECTS,
  FETCH_SUCCESS_DEFECTS,
  UPDATE_SUCCESS_DEFECTS,
  REMOVE_SUCCESS_DEFECTS
} from './actions'

const initialState = {
  error: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DEFECTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_DEFECTS:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_DEFECTS:
      return {
        error: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_DEFECTS:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        error: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_DEFECTS:
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
