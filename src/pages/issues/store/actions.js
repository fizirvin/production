import query from './queries'
import { newIssue, updateIssue, removeIssue } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const REQUEST_FAILURE_ISSUES = 'REQUEST_FAILURE_ISSUES'
export const FETCH_SUCCESS_ISSUES = 'FETCH_SUCCESS_ISSUES'
export const ADD_SUCCESS_ISSUES = 'ADD_SUCCESS_ISSUES'
export const UPDATE_SUCCESS_ISSUES = 'UPDATE_SUCCESS_ISSUES'
export const REMOVE_SUCCESS_ISSUES = 'REMOVE_SUCCESS_ISSUES'

export const CLEAN_MESSAGE_ISSUES = 'CLEAN_MESSAGE_ISSUES'
export const PAGE_TOTAL_ISSUES = 'PAGE_ISSUES'
export const ADD_TOTAL_ISSUES = 'ADD_TOTAL_ISSUES'

const request = () => {
  return {
    type: REQUEST_ISSUES
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_ISSUES,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_ISSUES,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_ISSUES,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_ISSUES,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_ISSUES,
    payload: id
  }
}

export const fetchIssues = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_ISSUES, payload: page })
    }
    dispatch(fetchSuccess(data.issues))
  }
}

export const addIssue = (input) => async (dispatch) => {
  dispatch(request())
  newIssue.variables = { input }
  const { status, data } = await fetchItems(newIssue)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newIssue } = data
    dispatch(addSuccess(newIssue))
  }
}

export const modifyIssue = (_id, input) => async (dispatch) => {
  dispatch(request())
  updateIssue.variables = { _id, input }
  const { status, data } = await fetchItems('updateIssue', updateIssue)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
  }
}

export const eraseIssue = (_id) => async (dispatch) => {
  dispatch(request())
  removeIssue.variables = { _id }
  const { status, data } = await fetchItems('removeIssue', removeIssue)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
