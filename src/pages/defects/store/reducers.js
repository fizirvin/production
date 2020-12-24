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
  add: 0,
  deletes: 0
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_DEFECTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_DEFECTS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_DEFECTS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_DEFECTS:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Defect added correctly',
        loading: false,
        items: items,
        total: state.total + 1,
        add: state.add + 1
      }
    case UPDATE_SUCCESS_DEFECTS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Defect updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_DEFECTS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Defect deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_DEFECTS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_DEFECTS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_DEFECTS:
      return {
        ...state,
        add: payload
      }
    default:
      return state
  }
}

export default reducer
