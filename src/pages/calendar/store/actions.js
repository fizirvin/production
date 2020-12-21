import query from './queries'
import { fetchItems } from 'services'

export const REQUEST_CALENDAR = 'REQUEST_CALENDAR'
export const REQUEST_FAILURE_CALENDAR = 'REQUEST_FAILURE_CALENDAR'
export const FETCH_SUCCESS_CALENDAR = 'FETCH_SUCCESS_CALENDAR'
export const CLEAN_MESSAGE_CALENDAR = 'CLEAN_MESSAGE_CALENDAR'

const request = () => {
  return {
    type: REQUEST_CALENDAR
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_CALENDAR,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_CALENDAR,
    payload: items
  }
}

export const fetchCalendar = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data.calendarcycles))
  }
}
