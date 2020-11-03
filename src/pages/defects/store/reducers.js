import {
  REQUEST_DEFECTS,
  REQUEST_FAILURE_DEFECTS,
  FETCH_SUCCESS_DEFECTS,
  UPDATE_SUCCESS_DEFECTS,
  REMOVE_SUCCESS_DEFECTS,
  CLEAN_MESSAGE_DEFECTS,
  ADD_SUCCESS_DEFECTS
} from './actions'

const initialState = {
  message: '',
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
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_DEFECTS:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case ADD_SUCCESS_DEFECTS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Defect added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_DEFECTS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_DEFECTS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_DEFECTS:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
