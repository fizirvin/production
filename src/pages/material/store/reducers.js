import {
  REQUEST_MATERIALS,
  REQUEST_FAILURE_MATERIALS,
  FETCH_SUCCESS_MATERIALS,
  UPDATE_SUCCESS_MATERIALS,
  REMOVE_SUCCESS_MATERIALS,
  ADD_SUCCESS_MATERIALS,
  CLEAN_MESSAGE_MATERIALS
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MATERIALS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MATERIALS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_MATERIALS:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case ADD_SUCCESS_MATERIALS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Material added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_MATERIALS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MATERIALS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_MATERIALS:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
