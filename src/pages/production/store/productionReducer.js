import * as actions from './actions'

const initialState = {
  period: 'day',
  shifts: 'both',
  filter: 'machine',
  date: '',
  loading: '',
  message: '',
  rows: [],
  fields: []
}

const production = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actions.REQUEST_PRODUCTION:
      return {
        ...state,
        loading: true
      }
    case actions.REQUEST_FAILURE_PRODUCTION:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case actions.FETCH_SUCCESS_PRODUCTION:
      return {
        ...state,
        message: '',
        loading: false,
        rows: payload.rows,
        fields: payload.fields
      }
    case actions.PERIOD_PRODUCTION:
      return {
        ...state,
        period: payload
      }
    case actions.SHIFT_PRODUCTION:
      return {
        ...state,
        shifts: payload
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
