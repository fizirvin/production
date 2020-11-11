import query from './queries'
import { newReport, updateReport, removeReport } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_REPORTS = 'REQUEST_REPORTS'
export const REQUEST_FAILURE_REPORTS = 'REQUEST_FAILURE_REPORTS'
export const FETCH_SUCCESS_REPORTS = 'FETCH_SUCCESS_REPORTS'
export const ADD_SUCCESS_REPORTS = 'ADD_SUCCESS_REPORTS'
export const UPDATE_SUCCESS_REPORTS = 'UPDATE_SUCCESS_REPORTS'
export const REMOVE_SUCCESS_REPORTS = 'REMOVE_SUCCESS_REPORTS'

export const CLEAN_MESSAGE_REPORTS = 'CLEAN_MESSAGE_REPORTS'
export const PAGE_TOTAL_REPORTS = 'PAGE_REPORTS'
export const ADD_TOTAL_REPORTS = 'ADD_TOTAL_REPORTS'

const request = () => {
  return {
    type: REQUEST_REPORTS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_REPORTS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_REPORTS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_REPORTS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_REPORTS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_REPORTS,
    payload: id
  }
}

export const fetchReports = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_REPORTS, payload: page })
    }
    console.log(data)
    dispatch(fetchSuccess(data.reports))
  }
}

export const addReport = (input) => async (dispatch) => {
  dispatch(request())
  newReport.variables = { input }
  const { status, data } = await fetchItems(newReport)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newReport } = data
    dispatch(addSuccess(newReport))
  }
}

export const modifyReport = (_id, input) => async (dispatch) => {
  dispatch(request())
  updateReport.variables = { _id, input }
  const { status, data } = await fetchItems(updateReport)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
  }
}

export const eraseReport = (_id) => async (dispatch) => {
  dispatch(request())
  removeReport.variables = { _id }
  const { status, data } = await fetchItems(removeReport)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
