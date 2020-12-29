import {
  REQUEST_ISSUES,
  REQUEST_FAILURE_ISSUES,
  FETCH_SUCCESS_ISSUES,
  UPDATE_SUCCESS_ISSUES,
  REMOVE_SUCCESS_ISSUES,
  CLEAN_MESSAGE_ISSUES,
  ADD_SUCCESS_ISSUES,
  PAGE_TOTAL_ISSUES,
  ADD_TOTAL_ISSUES,
  SORT_ISSUES
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
    case REQUEST_ISSUES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_ISSUES:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_ISSUES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_ISSUES:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Issue added correctly',
        loading: false,
        items: items,
        total: state.total + 1,
        add: state.add + 1
      }
    case UPDATE_SUCCESS_ISSUES:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Issue updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_ISSUES:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Issue deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_ISSUES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_ISSUES:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_ISSUES:
      return {
        ...state,
        add: payload
      }
    case SORT_ISSUES:
      let sortedItems = []
      if (payload === 'name') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      } else if (payload === 'code') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.code > b.code) return 1
          if (a.code < b.code) return -1
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
