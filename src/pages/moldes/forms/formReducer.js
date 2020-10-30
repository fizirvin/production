import { NUMBER_INPUT } from './formActions'

const initialState = {
  number: '',
  serial: '',
  cavities: 0,
  lifecycles: 0,
  tcycles: 0,
  shot: 0,
  quantity: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_INPUT:
      return {
        ...state,
        number: action.payload
      }
    case REQUEST_FAILURE_MOLDES:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_SUCCESS_MOLDES:
      return {
        error: '',
        loading: false,
        items: action.payload
      }
    case UPDATE_SUCCESS_MOLDES:
      const item = action.payload
      let items = [...state.items]
      items[items.findIndex((el) => el._id === item._id)] = item
      return {
        error: '',
        loading: false,
        items: items
      }
    case REMOVE_SUCCESS_MOLDES:
      const removeItems = [...state.items].filter(
        (items) => items._id !== action.payload
      )
      return {
        error: '',
        loading: false,
        items: removeItems
      }
    default:
      return state
  }
}

export default reducer
