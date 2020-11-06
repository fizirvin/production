import {
  REQUEST_USERS,
  REQUEST_FAILURE_USERS,
  FETCH_SUCCESS_USERS,
  UPDATE_SUCCESS_USERS,
  REMOVE_SUCCESS_USERS,
  ADD_SUCCESS_USERS,
  CLEAN_MESSAGE_USERS
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_USERS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_USERS:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case ADD_SUCCESS_USERS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New User Added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_USERS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_USERS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_USERS:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
