import {
  REQUEST_MATERIALS,
  REQUEST_FAILURE_MATERIALS,
  FETCH_SUCCESS_MATERIALS,
  UPDATE_SUCCESS_MATERIALS,
  REMOVE_SUCCESS_MATERIALS
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
    case UPDATE_SUCCESS_MATERIALS:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: items
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
    default:
      return state
  }
}

export default reducer
