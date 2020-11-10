import {
  REQUEST_PROGRAMS,
  REQUEST_FAILURE_PROGRAMS,
  FETCH_SUCCESS_PROGRAMS,
  UPDATE_SUCCESS_PROGRAMS,
  REMOVE_SUCCESS_PROGRAMS,
  ADD_SUCCESS_PROGRAMS,
  CLEAN_MESSAGE_PROGRAMS,
  PAGE_TOTAL_PROGRAMS,
  ADD_TOTAL_PROGRAMS
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
    case REQUEST_PROGRAMS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_PROGRAMS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_PROGRAMS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_PROGRAMS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Program added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_PROGRAMS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_PROGRAMS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_PROGRAMS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_PROGRAMS:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_PROGRAMS:
      return {
        ...state,
        add: action.payload
      }
    default:
      return state
  }
}

export default reducer
