import {
  REQUEST_MOLDES,
  REQUEST_FAILURE_MOLDES,
  FETCH_SUCCESS_MOLDES,
  ADD_SUCCESS_MOLDES,
  UPDATE_SUCCESS_MOLDES,
  REMOVE_SUCCESS_MOLDES,
  CLEAN_MESSAGE_MOLDES
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOLDES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MOLDES:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_MOLDES:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case ADD_SUCCESS_MOLDES:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Mold added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_MOLDES:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MOLDES:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_MOLDES:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
