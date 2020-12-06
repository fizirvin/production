import {
  REQUEST_USERS,
  REQUEST_FAILURE_USERS,
  FETCH_SUCCESS_USERS,
  UPDATE_SUCCESS_USERS,
  REMOVE_SUCCESS_USERS,
  ADD_SUCCESS_USERS,
  CLEAN_MESSAGE_USERS,
  PAGE_TOTAL_USERS,
  ADD_TOTAL_USERS
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
  const { type, payload } = action
  switch (type) {
    case REQUEST_USERS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_USERS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_USERS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_USERS:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        message: 'New User Added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_USERS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: 'User updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_USERS:
      const removeItems = [...state.items].filter(
        (items) => items._id !== payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_USERS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_USERS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_USERS:
      return {
        ...state,
        add: payload
      }
    default:
      return state
  }
}

export default reducer
