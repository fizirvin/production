import {
  REQUEST_MATERIALS,
  REQUEST_FAILURE_MATERIALS,
  FETCH_SUCCESS_MATERIALS,
  UPDATE_SUCCESS_MATERIALS,
  REMOVE_SUCCESS_MATERIALS,
  ADD_SUCCESS_MATERIALS,
  CLEAN_MESSAGE_MATERIALS,
  PAGE_TOTAL_MATERIALS,
  ADD_TOTAL_MATERIALS
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
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_MATERIALS:
      const newItem = action.payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Material added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_MATERIALS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: '',
        loading: false,
        items: updatedItems
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
    case CLEAN_MESSAGE_MATERIALS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_MATERIALS:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_MATERIALS:
      return {
        ...state,
        add: action.payload
      }
    default:
      return state
  }
}

export default reducer
