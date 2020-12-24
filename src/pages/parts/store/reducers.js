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
  items: [],
  deletes: 0,
  add: 0,
  page: 1,
  total: 0
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
        ...state,
        message: 'New Injection Model added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_MODELS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Model updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MODELS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Model deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
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
