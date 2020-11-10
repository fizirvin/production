import {
  REQUEST_ISSUES,
  REQUEST_FAILURE_ISSUES,
  FETCH_SUCCESS_ISSUES,
  UPDATE_SUCCESS_ISSUES,
  REMOVE_SUCCESS_ISSUES,
  CLEAN_MESSAGE_ISSUES,
  ADD_SUCCESS_ISSUES,
  PAGE_TOTAL_ISSUES,
  ADD_TOTAL_ISSUES
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: [],
  total: 0,
  page: 1,
  add: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ISSUES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_ISSUES:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_ISSUES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_ISSUES:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Issue added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_ISSUES:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_ISSUES:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_ISSUES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_ISSUES:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_ISSUES:
      return {
        ...state,
        add: action.payload
      }
    default:
      return state
  }
}

export default reducer
