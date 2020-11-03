import {
  REQUEST_MACHINES,
  REQUEST_FAILURE_MACHINES,
  FETCH_SUCCESS_MACHINES,
  UPDATE_SUCCESS_MACHINES,
  REMOVE_SUCCESS_MACHINES,
  ADD_SUCCESS_MACHINES,
  CLEAN_MESSAGE_MACHINES
} from './actions'

const initialState = {
  message: '',
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
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_MACHINES:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case ADD_SUCCESS_MACHINES:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Machine added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_MACHINES:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MACHINES:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_MACHINES:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
