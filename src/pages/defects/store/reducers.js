import {
  REQUEST_DEFECTS,
  REQUEST_FAILURE_DEFECTS,
  FETCH_SUCCESS_DEFECTS,
  UPDATE_SUCCESS_DEFECTS,
  REMOVE_SUCCESS_DEFECTS,
  CLEAN_MESSAGE_DEFECTS,
  ADD_SUCCESS_DEFECTS,
  PAGE_TOTAL_DEFECTS,
  ADD_TOTAL_DEFECTS
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
    case REQUEST_DEFECTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_DEFECTS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_DEFECTS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_DEFECTS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Defect added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_DEFECTS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_DEFECTS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        ...state,
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_DEFECTS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_DEFECTS:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_DEFECTS:
      return {
        ...state,
        add: action.payload
      }
    default:
      return state
  }
}

export default reducer
