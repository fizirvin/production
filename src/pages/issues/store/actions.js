import query from './queries'
import { newIssue, updateIssue, deleteIssue } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const REQUEST_FAILURE_ISSUES = 'REQUEST_FAILURE_ISSUES'
export const FETCH_SUCCESS_ISSUES = 'FETCH_SUCCESS_ISSUES'
export const ADD_SUCCESS_ISSUES = 'ADD_SUCCESS_ISSUES'
export const UPDATE_SUCCESS_ISSUES = 'UPDATE_SUCCESS_ISSUES'
export const REMOVE_SUCCESS_ISSUES = 'REMOVE_SUCCESS_ISSUES'

export const CLEAN_MESSAGE_ISSUES = 'CLEAN_MESSAGE_ISSUES'
export const PAGE_TOTAL_ISSUES = 'PAGE_ISSUES'
export const ADD_TOTAL_ISSUES = 'ADD_TOTAL_ISSUES'

export const SORT_ISSUES = 'SORT_ISSUES'

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
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newIssue.variables = { input }
    const { status, data } = await fetchItems(newIssue)

    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newIssue } = data
      dispatch(addSuccess(newIssue))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyIssue = (input) => async (dispatch) => {
  dispatch(request())

  const issue = {
    name: input.name,
    code: input.code
  }

  updateIssue.variables = { _id: input._id, input: issue }
  const { status, data } = await fetchItems(updateIssue)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateIssue } = data
    dispatch(updateSuccess(updateIssue))
  }
}

export const eraseIssue = (input) => async (dispatch) => {
  dispatch(request())
  deleteIssue.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteIssue)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteIssue))
  }
}
