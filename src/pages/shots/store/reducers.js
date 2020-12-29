import {
  REQUEST_SHOTS,
  REQUEST_FAILURE_SHOTS,
  FETCH_SUCCESS_SHOTS,
  UPDATE_SUCCESS_SHOTS,
  REMOVE_SUCCESS_SHOTS,
  ADD_SUCCESS_SHOTS,
  CLEAN_MESSAGE_SHOTS,
  PAGE_TOTAL_SHOTS,
  ADD_TOTAL_SHOTS,
  FINISH_SUCCESS_SHOT,
  SORT_SHOTS
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
    case REQUEST_SHOTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_SHOTS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_SHOTS:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...action.payload.items],
        total: action.payload.total
      }
    case ADD_SUCCESS_SHOTS:
      const newItem = action.payload
      const items = [newItem, ...state.items]
      return {
        ...state,
        message: 'New Mold Shot added correctly',
        loading: false,
        add: state.add + 1,
        total: state.total + 1,
        items: items
      }
    case UPDATE_SUCCESS_SHOTS:
      const item = action.payload
      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Mold Shot updated correctly',
        loading: false,
        items: updatedItems
      }
    case FINISH_SUCCESS_SHOT:
      const finishShot = action.payload
      let updatedSots = [...state.items]
      updatedSots[
        updatedSots.findIndex((el) => el._id === finishShot._id)
      ] = finishShot
      return {
        ...state,
        message: '',
        loading: false,
        items: updatedSots
      }
    case REMOVE_SUCCESS_SHOTS:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Mold Shot deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_SHOTS:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_SHOTS:
      return {
        ...state,
        page: action.payload
      }
    case ADD_TOTAL_SHOTS:
      return {
        ...state,
        add: action.payload
      }
    case SORT_SHOTS:
      let sortedItems = []
      if (action.payload === 'molde') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.molde.number > b.molde.number) return 1
          if (a.molde.number < b.molde.number) return -1
          if (a.date > b.date) return -1
          if (a.date < b.date) return 1
          return 0
        })
      } else if (action.payload === 'status') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.active > b.active) return -1
          if (a.active < b.active) return 1
          if (a.date > b.date) return -1
          if (a.date < b.date) return 1
          return 0
        })
      } else if (action.payload === 'date') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.date > b.date) return -1
          if (a.date < b.date) return 1
          if (a.active > b.active) return -1
          if (a.active < b.active) return 1
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
