import {
  REQUEST_MODELS,
  REQUEST_FAILURE_MODELS,
  FETCH_SUCCESS_MODELS,
  UPDATE_SUCCESS_MODELS,
  REMOVE_SUCCESS_MODELS,
  ADD_SUCCESS_MODELS,
  CLEAN_MESSAGE_MODELS
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MODELS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MODELS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_MODELS:
      return {
        message: '',
        loading: false,
        items: action.payload
      }
    case ADD_SUCCESS_MODELS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Model added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_MODELS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MODELS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_MODELS:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
