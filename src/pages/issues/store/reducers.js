import {
  REQUEST_ISSUES,
  REQUEST_FAILURE_ISSUES,
  FETCH_SUCCESS_ISSUES,
  UPDATE_SUCCESS_ISSUES,
  REMOVE_SUCCESS_ISSUES,
  CLEAN_MESSAGE_ISSUES,
  ADD_SUCCESS_ISSUES
} from './actions'

const initialState = {
  message: '',
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
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_ISSUES:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case ADD_SUCCESS_ISSUES:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Issue added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_ISSUES:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_ISSUES:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_ISSUES:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
