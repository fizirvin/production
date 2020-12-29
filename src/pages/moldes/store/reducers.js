import {
  REQUEST_MOLDES,
  REQUEST_FAILURE_MOLDES,
  FETCH_SUCCESS_MOLDES,
  ADD_SUCCESS_MOLDES,
  UPDATE_SUCCESS_MOLDES,
  REMOVE_SUCCESS_MOLDES,
  CLEAN_MESSAGE_MOLDES,
  PAGE_TOTAL_MOLDES,
  ADD_TOTAL_MOLDES,
  SORT_MOLDES
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
    case REQUEST_MOLDES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_MOLDES:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_MOLDES:
      return {
        ...state,
        message: '',
        loading: false,
        items: [...state.items, ...payload.items],
        total: payload.total
      }
    case ADD_SUCCESS_MOLDES:
      const newItem = payload
      const items = [...state.items, newItem]
      return {
        ...state,
        message: 'New Injection Mold added correctly',
        loading: false,
        items: items,
        add: state.add + 1,
        total: state.total + 1
      }
    case UPDATE_SUCCESS_MOLDES:
      const item = payload

      let updatedItems = [...state.items]
      updatedItems[updatedItems.findIndex((el) => el._id === item._id)] = item
      return {
        ...state,
        message: 'Injection Mold updated correctly',
        loading: false,
        items: updatedItems
      }
    case REMOVE_SUCCESS_MOLDES:
      const deletedItem = action.payload
      const removeItems = [...state.items].filter(
        (el) => el._id !== deletedItem._id
      )
      return {
        ...state,
        message: 'Injection Mold deleted correctly',
        loading: false,
        items: removeItems,
        deletes: state.deletes + 1,
        total: state.total - 1
      }
    case CLEAN_MESSAGE_MOLDES:
      return {
        ...state,
        message: ''
      }
    case PAGE_TOTAL_MOLDES:
      return {
        ...state,
        page: payload
      }
    case ADD_TOTAL_MOLDES:
      return {
        ...state,
        add: payload
      }
    case SORT_MOLDES:
      let sortedItems = []
      if (payload === 'number') {
        sortedItems = state.items.sort(function (a, b) {
          if (a.number > b.number) return 1
          if (a.number < b.number) return -1
          return 0
        })
      } else if (payload === 'percent') {
        sortedItems = state.items.sort(function (a, b) {
          if (+a.percent > +b.percent) return -1
          if (+a.percent < +b.percent) return 1
          return 0
        })
      } else if (payload === 'tcycles') {
        sortedItems = state.items.sort(function (a, b) {
          if (+a.tcycles > +b.tcycles) return -1
          if (+a.tcycles < +b.tcycles) return 1
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
