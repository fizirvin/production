import {
  REQUEST_MOLDES,
  REQUEST_FAILURE_MOLDES,
  FETCH_SUCCESS_MOLDES,
  UPDATE_SUCCESS_MOLDES,
  REMOVE_SUCCESS_MOLDES
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
    case UPDATE_SUCCESS_MOLDES:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: items
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
    default:
      return state
  }
}

export default reducer
