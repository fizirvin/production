import {
  REQUEST_OUTGOINGS,
  REQUEST_FAILURE_OUTGOINGS,
  FETCH_SUCCESS_OUTGOINGS,
  UPDATE_SUCCESS_OUTGOINGS,
  REMOVE_SUCCESS_OUTGOINGS,
  ADD_SUCCESS_OUTGOINGS,
  CLEAN_MESSAGE_OUTGOINGS,
  PAGE_TOTAL_OUTGOINGS,
  ADD_TOTAL_OUTGOINGS,
  SORT_OUTGOINGS
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
    case REQUEST_OUTGOINGS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_OUTGOINGS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_OUTGOINGS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total,
        fetched: true
      }
    case ADD_SUCCESS_OUTGOINGS:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Spare Outgoing added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_OUTGOINGS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Spare Outgoing updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_OUTGOINGS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Spare Outgoing deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_OUTGOINGS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_OUTGOINGS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_OUTGOINGS:
      return {
        ...state,
        add: payload
      }
    case SORT_OUTGOINGS:
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
