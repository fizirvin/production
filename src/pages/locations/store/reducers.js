import {
  REQUEST_LOCATIONS,
  REQUEST_FAILURE_LOCATIONS,
  FETCH_SUCCESS_LOCATIONS,
  UPDATE_SUCCESS_LOCATIONS,
  REMOVE_SUCCESS_LOCATIONS,
  ADD_SUCCESS_LOCATIONS,
  CLEAN_MESSAGE_LOCATIONS,
  PAGE_TOTAL_LOCATIONS,
  ADD_TOTAL_LOCATIONS
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: [],
  total: 0,
  page: 1,
  add: 0,
  deletes: 0,
  fetched: false
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_LOCATIONS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_LOCATIONS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_LOCATIONS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total,
        fetched: true
      }
    case ADD_SUCCESS_LOCATIONS:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Location added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_LOCATIONS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Location updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_LOCATIONS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Location deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_LOCATIONS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_LOCATIONS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_LOCATIONS:
      return {
        ...state,
        add: payload
      }
    default:
      return state
  }
}

export default reducer
