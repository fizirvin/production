import {
  REQUEST_SPARES,
  REQUEST_FAILURE_SPARES,
  FETCH_SUCCESS_SPARES,
  UPDATE_SUCCESS_SPARES,
  REMOVE_SUCCESS_SPARES,
  ADD_SUCCESS_SPARES,
  CLEAN_MESSAGE_SPARES,
  PAGE_TOTAL_SPARES,
  ADD_TOTAL_SPARES,
  SORT_SPARES
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
    case REQUEST_SPARES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_SPARES:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_SPARES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total,
        fetched: true
      }
    case ADD_SUCCESS_SPARES:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Spare added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_SPARES:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Spare updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_SPARES:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Spare deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_SPARES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_SPARES:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_SPARES:
      return {
        ...state,
        add: payload
      }
    case SORT_SPARES:
      let sortedItems = []
      if (payload === 'code') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.code > b.code) return 1
          if (a.code < b.code) return -1
          return 0
        })
      } else if (payload === 'name') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      } else if (payload === 'part') {
        sortedItems = state.items.sort(function (a, b) {
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
