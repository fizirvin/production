import {
  REQUEST_MACHINES,
  REQUEST_FAILURE_MACHINES,
  FETCH_SUCCESS_MACHINES,
  UPDATE_SUCCESS_MACHINES,
  REMOVE_SUCCESS_MACHINES
} from './actions'

const initialState = {
  error: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MACHINES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MACHINES:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_MACHINES:
      return {
        error: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_MACHINES:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        error: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_MACHINES:
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
