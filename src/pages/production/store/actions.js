import query from './queries'
import { fetchItems } from 'services'
export const PERIOD_PRODUCTION = 'PERIOD_PRODUCTION'
export const SHIFT_PRODUCTION = 'SHIFT_PRODUCTION'
export const FILTER_PRODUCTION = 'FILTER_PRODUCTION'
export const DATE_PRODUCTION = 'DATE_PRODUCTION'
export const BACK_PRODUCTION = 'BACK_PRODUCTION'
export const FORWARD_PRODUCTION = 'FORWARD_PRODUCTION'

export const REQUEST_PRODUCTION = 'REQUEST_PRODUCTION'
export const REQUEST_FAILURE_PRODUCTION = 'REQUEST_FAILURE_PRODUCTION'
export const FETCH_SUCCESS_PRODUCTION = 'FETCH_SUCCESS_PRODUCTION'

const request = () => {
  return {
    type: REQUEST_PRODUCTION
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_PRODUCTION,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_PRODUCTION,
    payload: items
  }
}

export const fetchProduction = (variables) => async (dispatch) => {
  dispatch(request())
  query.variables = variables
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data.production))
  }
}
