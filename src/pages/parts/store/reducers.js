import {
  REQUEST_MODELS,
  REQUEST_FAILURE_MODELS,
  FETCH_SUCCESS_MODELS,
  UPDATE_SUCCESS_MODELS,
  REMOVE_SUCCESS_MODELS,
  ADD_SUCCESS_MODELS,
  CLEAN_MESSAGE_MODELS,
  PAGE_TOTAL_MODELS,
  ADD_TOTAL_MODELS
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_MODELS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MODELS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_MODELS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_MODELS:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Model added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_MODELS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: 'Injection Model updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MODELS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== payload
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
    case PAGE_TOTAL_MODELS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_MODELS:
      return {
        ...state,
        add: payload
      }
    default:
      return state
  }
}

export default reducer
