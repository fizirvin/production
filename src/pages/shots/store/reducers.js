import {
  REQUEST_SHOTS,
  REQUEST_FAILURE_SHOTS,
  FETCH_SUCCESS_SHOTS,
  UPDATE_SUCCESS_SHOTS,
  REMOVE_SUCCESS_SHOTS
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SHOTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_SHOTS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_SHOTS:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_SHOTS:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_SHOTS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    default:
      return state
  }
}

export default reducer
