import query from './queries'
import { newIssue, updateIssue, removeIssue } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const REQUEST_FAILURE_ISSUES = 'REQUEST_FAILURE_ISSUES'
export const FETCH_SUCCESS_ISSUES = 'FETCH_SUCCESS_ISSUES'
export const ADD_SUCCESS_ISSUES = 'ADD_SUCCESS_ISSUES'
export const UPDATE_SUCCESS_ISSUES = 'UPDATE_SUCCESS_ISSUES'
export const REMOVE_SUCCESS_ISSUES = 'REMOVE_SUCCESS_ISSUES'

const request = () => {
  return {
    type: REQUEST_ISSUES
  }
}

const requestFailure = (error) => {
  return {
    type: REQUEST_FAILURE_ISSUES,
    payload: error
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

export const fetchIssues = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems('issues', query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data))
  }
}

export const addDefect = (input) => async (dispatch) => {
  dispatch(request())
  newIssue.variables = { input }
  const { status, data } = await fetchItems('newIssue', newIssue)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(addSuccess(data))
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
