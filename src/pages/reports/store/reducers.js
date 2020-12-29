import {
  REQUEST_REPORTS,
  REQUEST_FAILURE_REPORTS,
  FETCH_SUCCESS_REPORTS,
  UPDATE_SUCCESS_REPORTS,
  REMOVE_SUCCESS_REPORTS,
  ADD_SUCCESS_REPORTS,
  CLEAN_MESSAGE_REPORTS,
  PAGE_TOTAL_REPORTS,
  ADD_TOTAL_REPORTS,
  SORT_REPORTS
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
  switch (action.type) {
    case REQUEST_REPORTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_REPORTS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_REPORTS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_REPORTS:
      const newItem = action.payload
      const items = [newItem, ...state.items]
      return {
        ...state,
        message: 'New Injection Report added correctly',
        loading: false,
        add: state.add + 1,
        total: state.total + 1,
        items: items
      }
    case UPDATE_SUCCESS_REPORTS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Report updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_REPORTS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Report deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_REPORTS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_REPORTS:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_REPORTS:
      return {
        ...state,
        add: action.payload
      }
    case SORT_REPORTS:
      let sortedItems = []
      if (action.payload === 'machine') {
        sortedItems = state.items.sort(function (a, b) {
          if (+a.machine.number > +b.machine.number) return 1
          if (+a.machine.number < +b.machine.number) return -1
          if (a.date > b.date) return -1
          if (a.date < b.date) return 1
          return 0
        })
      } else if (action.payload === 'shift') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.shift > b.shift) return 1
          if (a.shift < b.shift) return -1
          if (a.date > b.date) return -1
          if (a.date < b.date) return 1
          return 0
        })
      } else if (action.payload === 'date') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.date > b.date) return -1
          if (a.date < b.date) return 1
          return 0
        })
      } else if (action.payload === 'team') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.team > b.team) return 1
          if (a.team < b.team) return -1
          if (a.date > b.date) return -1
          if (a.date < b.date) return 1
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
