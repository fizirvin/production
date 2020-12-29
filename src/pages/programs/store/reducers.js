import {
  REQUEST_PROGRAMS,
  REQUEST_FAILURE_PROGRAMS,
  FETCH_SUCCESS_PROGRAMS,
  UPDATE_SUCCESS_PROGRAMS,
  REMOVE_SUCCESS_PROGRAMS,
  ADD_SUCCESS_PROGRAMS,
  CLEAN_MESSAGE_PROGRAMS,
  PAGE_TOTAL_PROGRAMS,
  ADD_TOTAL_PROGRAMS,
  SORT_PROGRAMS
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
    case REQUEST_PROGRAMS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_PROGRAMS:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_PROGRAMS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_PROGRAMS:
      const newItem = payload
      const items = [...state.items, newItem]

      return {
        ...state,
        message: 'New Injection Program added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_PROGRAMS:
      const item = payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Program updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_PROGRAMS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Program deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_PROGRAMS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_PROGRAMS:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_PROGRAMS:
      return {
        ...state,
        add: payload
      }
    case SORT_PROGRAMS:
      let sortedItems = []
      if (payload === 'molde') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.molde.number > b.molde.number) return 1
          if (a.molde.number < b.molde.number) return -1
          return 0
        })
      } else if (payload === 'model') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.model.name > b.model.name) return 1
          if (a.model.name < b.model.name) return -1
          return 0
        })
      } else if (payload === 'machine') {
        sortedItems = state.items.sort(function (a, b) {
          if (+a.machine.number > +b.machine.number) return 1
          if (+a.machine.number < +b.machine.number) return -1
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
