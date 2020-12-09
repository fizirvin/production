import * as actions from './actions'

const initialState = {
  period: 'day',
  shift: 'both',
  filter: 'machine',
  date: '',
  loading: '',
  message: '',
  items: []
}

const production = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actions.PERIOD_PRODUCTION:
      return {
        ...state,
        period: payload
      }
    case actions.SHIFT_PRODUCTION:
      return {
        ...state,
        shift: payload
      }
    case actions.FILTER_PRODUCTION:
      return {
        ...state,
        filter: payload
      }
    case actions.DATE_PRODUCTION:
      return {
        ...state,
        date: payload
      }
    default:
      return state
  }
}

export default production
