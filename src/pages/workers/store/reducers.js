import {
  REQUEST_PROFILES,
  REQUEST_FAILURE_PROFILES,
  FETCH_SUCCESS_PROFILES,
  UPDATE_SUCCESS_PROFILES,
  REMOVE_SUCCESS_PROFILES,
  ADD_SUCCESS_PROFILES,
  CLEAN_MESSAGE_PROFILES,
  PAGE_TOTAL_PROFILES,
  ADD_TOTAL_PROFILES,
  SORT_PROFILES
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
    case REQUEST_PROFILES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_PROFILES:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_PROFILES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_PROFILES:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Employee added correctly',
        loading: false,
        items: items,
        total: state.total + 1,
        add: state.add + 1
      }
    case UPDATE_SUCCESS_PROFILES:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Employee updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_PROFILES:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Employee deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_PROFILES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_PROFILES:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_PROFILES:
      return {
        ...state,
        add: payload
      }
    case SORT_PROFILES:
      let sortedItems = []
      if (action.payload === 'number') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.number > b.number) return 1
          if (a.number < b.number) return -1

          return 0
        })
      } else if (action.payload === 'entry') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.entry > b.entry) return 1
          if (a.entry < b.entry) return -1
          if (a.number > b.number) return 1
          if (a.number < b.number) return -1
          return 0
        })
      }
      return {
        ...state,
        items: sortedItems
      }
    default:
      return state
  }
}

export default reducer
