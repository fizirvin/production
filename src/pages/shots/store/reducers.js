import {
  REQUEST_SHOTS,
  REQUEST_FAILURE_SHOTS,
  FETCH_SUCCESS_SHOTS,
  UPDATE_SUCCESS_SHOTS,
  REMOVE_SUCCESS_SHOTS,
  ADD_SUCCESS_SHOTS,
  CLEAN_MESSAGE_SHOTS
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
    case ADD_SUCCESS_SHOTS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Shot added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_SHOTS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
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
    case CLEAN_MESSAGE_SHOTS:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
