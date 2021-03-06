import {
  REQUEST_MACHINES,
  REQUEST_FAILURE_MACHINES,
  FETCH_SUCCESS_MACHINES,
  UPDATE_SUCCESS_MACHINES,
  REMOVE_SUCCESS_MACHINES,
  ADD_SUCCESS_MACHINES,
  CLEAN_MESSAGE_MACHINES,
  PAGE_TOTAL_MACHINES,
  ADD_TOTAL_MACHINES
} from './actions'

const initialState = {
  message: '',
  loading: false,
  items: [],
  total: 0,
  page: 1,
  add: 0,
  deletes: 0
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_MACHINES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MACHINES:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_MACHINES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_MACHINES:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Machine added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_MACHINES:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Machine updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MACHINES:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Machine deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_MACHINES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_MACHINES:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_MACHINES:
      return {
        ...state,
        add: payload
      }
    default:
      return state
  }
}

export default reducer
