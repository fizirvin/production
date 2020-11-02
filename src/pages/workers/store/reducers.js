import {
  REQUEST_PROFILES,
  REQUEST_FAILURE_PROFILES,
  FETCH_SUCCESS_PROFILES,
  UPDATE_SUCCESS_PROFILES,
  REMOVE_SUCCESS_PROFILES
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROFILES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_PROFILES:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_PROFILES:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_PROFILES:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_PROFILES:
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
