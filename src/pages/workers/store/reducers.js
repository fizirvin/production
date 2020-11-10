import {
  REQUEST_PROFILES,
  REQUEST_FAILURE_PROFILES,
  FETCH_SUCCESS_PROFILES,
  UPDATE_SUCCESS_PROFILES,
  REMOVE_SUCCESS_PROFILES,
  ADD_SUCCESS_PROFILES,
  CLEAN_MESSAGE_PROFILES,
  PAGE_TOTAL_PROFILES,
  ADD_TOTAL_PROFILES
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
    case REQUEST_PROFILES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_PROFILES:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_PROFILES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_PROFILES:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Employee added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_PROFILES:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_PROFILES:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_PROFILES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_PROFILES:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_PROFILES:
      return {
        ...state,
        add: action.payload
      }
    default:
      return state
  }
}

export default reducer
