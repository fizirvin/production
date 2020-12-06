import {
  REQUEST_MOLDES,
  REQUEST_FAILURE_MOLDES,
  FETCH_SUCCESS_MOLDES,
  ADD_SUCCESS_MOLDES,
  UPDATE_SUCCESS_MOLDES,
  REMOVE_SUCCESS_MOLDES,
  CLEAN_MESSAGE_MOLDES,
  PAGE_TOTAL_MOLDES,
  ADD_TOTAL_MOLDES
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
    case REQUEST_MOLDES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MOLDES:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_MOLDES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_MOLDES:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        message: 'New Injection Mold added correctly',
        loading: false,
        items: items
      }
    case UPDATE_SUCCESS_MOLDES:
      const item = payload

      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        message: 'Injection Mold updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MOLDES:
      const removeItems = [...state.items].filter(
        (items) => items._id !== payload
      )
      return {
        message: '',
        loading: false,
        items: removeItems
      }
    case CLEAN_MESSAGE_MOLDES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_MOLDES:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_MOLDES:
      return {
        ...state,
        add: payload
      }
    default:
      return state
  }
}

export default reducer
