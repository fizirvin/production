import {
  REQUEST_PROFILES,
  REQUEST_FAILURE_PROFILES,
  FETCH_SUCCESS_PROFILES,
  UPDATE_SUCCESS_PROFILES,
  REMOVE_SUCCESS_PROFILES,
  ADD_SUCCESS_PROFILES,
  CLEAN_MESSAGE_PROFILES
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
    case ADD_SUCCESS_PROFILES:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Employee added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_PROFILES:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
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
    case CLEAN_MESSAGE_PROFILES:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
