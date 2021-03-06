import query from './queries'
import { newDefect, updateDefect, deleteDefect } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_DEFECTS = 'REQUEST_DEFECTS'
export const REQUEST_FAILURE_DEFECTS = 'REQUEST_FAILURE_DEFECTS'
export const FETCH_SUCCESS_DEFECTS = 'FETCH_SUCCESS_DEFECTS'
export const ADD_SUCCESS_DEFECTS = 'ADD_SUCCESS_DEFECTS'
export const UPDATE_SUCCESS_DEFECTS = 'UPDATE_SUCCESS_DEFECTS'
export const REMOVE_SUCCESS_DEFECTS = 'REMOVE_SUCCESS_DEFECTS'

export const CLEAN_MESSAGE_DEFECTS = 'CLEAN_MESSAGE_DEFECTS'
export const PAGE_TOTAL_DEFECTS = 'PAGE_DEFECTS'
export const ADD_TOTAL_DEFECTS = 'ADD_TOTAL_DEFECTS'

export const SORT_DEFECTS = 'SORT_DEFECTS'

const request = () => {
  return {
    type: REQUEST_DEFECTS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_DEFECTS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_DEFECTS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_DEFECTS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_DEFECTS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_DEFECTS,
    payload: id
  }
}

export const fetchDefects = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_DEFECTS, payload: page })
    }
    dispatch(fetchSuccess(data.defects))
  }
}

export const addDefect = (input) => async (dispatch) => {
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newDefect.variables = { input }
    const { status, data } = await fetchItems(newDefect)

    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newDefect } = data
      dispatch(addSuccess(newDefect))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyDefect = (input) => async (dispatch) => {
  dispatch(request())

  const defect = {
    name: input.name,
    code: input.code,
    injection: input.injection
  }

  updateDefect.variables = { _id: input._id, input: defect }
  const { status, data } = await fetchItems(updateDefect)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateDefect } = data
    dispatch(updateSuccess(updateDefect))
  }
}

export const eraseDefect = (input) => async (dispatch) => {
  dispatch(request())
  deleteDefect.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteDefect)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteDefect))
  }
}
