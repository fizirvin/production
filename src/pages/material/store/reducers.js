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
  add: 0,
  deletes: 0
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_MATERIALS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MATERIALS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_MATERIALS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_MATERIALS:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Material added correctly',
        loading: false,
        items: items,
        total: state.total + 1,
        add: state.add + 1
      }
    case UPDATE_SUCCESS_MATERIALS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'New Injection Material updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MATERIALS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Raw Material deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_MATERIALS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_MATERIALS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_MATERIALS:
      return {
        ...state,
        add: payload
      }
    default:
      return state
  }
}

export default reducer
