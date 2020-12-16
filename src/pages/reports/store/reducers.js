import {
  REQUEST_REPORTS,
  REQUEST_FAILURE_REPORTS,
  FETCH_SUCCESS_REPORTS,
  UPDATE_SUCCESS_REPORTS,
  REMOVE_SUCCESS_REPORTS,
  ADD_SUCCESS_REPORTS,
  CLEAN_MESSAGE_REPORTS,
  PAGE_TOTAL_REPORTS,
  ADD_TOTAL_REPORTS
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
    case REQUEST_REPORTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_REPORTS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_REPORTS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_REPORTS:
      const newItem = action.payload
      const items = [newItem, ...state.items]
      return {
        ...state,
        message: 'New Injection Report added correctly',
        loading: false,
        add: state.add + 1,
        total: state.total + 1,
        items: items
      }
    case UPDATE_SUCCESS_REPORTS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Report updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_REPORTS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_REPORTS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_REPORTS:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_REPORTS:
      return {
        ...state,
        add: action.payload
      }
    default:
      return state
  }
}

export default reducer
