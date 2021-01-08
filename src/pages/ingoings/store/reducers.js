import {
  REQUEST_INGOINGS,
  REQUEST_FAILURE_INGOINGS,
  FETCH_SUCCESS_INGOINGS,
  UPDATE_SUCCESS_INGOINGS,
  REMOVE_SUCCESS_INGOINGS,
  ADD_SUCCESS_INGOINGS,
  CLEAN_MESSAGE_INGOINGS,
  PAGE_TOTAL_INGOINGS,
  ADD_TOTAL_INGOINGS,
  SORT_INGOINGS
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
    case REQUEST_INGOINGS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_INGOINGS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_INGOINGS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total,
        fetched: true
      }
    case ADD_SUCCESS_INGOINGS:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Ingoing added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_INGOINGS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Ingoing updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_INGOINGS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Ingoing deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_INGOINGS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_INGOINGS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_INGOINGS:
      return {
        ...state,
        add: payload
      }
    case SORT_INGOINGS:
      let sortedItems = []
      if (payload === 'date') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.date > b.date) return 1
          if (a.date < b.date) return -1
          return 0
        })
      } else if (payload === 'spare') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.spCode > b.spCode) return 1
          if (a.spCode < b.spCode) return -1
          return 0
        })
      } else if (payload === 'origin') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.origin > b.origin) return 1
          if (a.origin < b.origin) return -1
          return 0
        })
      } else if (payload === 'provider') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.provider > b.provider) return 1
          if (a.provider < b.provider) return -1
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
