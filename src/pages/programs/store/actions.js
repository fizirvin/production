import query from './queries'
import { newProgram, updateProgram, removeProgram } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_PROGRAMS = 'REQUEST_PROGRAMS'
export const REQUEST_FAILURE_PROGRAMS = 'REQUEST_FAILURE_PROGRAMS'
export const FETCH_SUCCESS_PROGRAMS = 'FETCH_SUCCESS_PROGRAMS'
export const ADD_SUCCESS_PROGRAMS = 'ADD_SUCCESS_PROGRAMS'
export const UPDATE_SUCCESS_PROGRAMS = 'UPDATE_SUCCESS_PROGRAMS'
export const REMOVE_SUCCESS_PROGRAMS = 'REMOVE_SUCCESS_PROGRAMS'

export const CLEAN_MESSAGE_PROGRAMS = 'CLEAN_MESSAGE_PROGRAMS'
export const PAGE_TOTAL_PROGRAMS = 'PAGE_PROGRAMS'
export const ADD_TOTAL_PROGRAMS = 'ADD_TOTAL_PROGRAMS'

const request = () => {
  return {
    type: REQUEST_PROGRAMS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_PROGRAMS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_PROGRAMS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_PROGRAMS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_PROGRAMS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_PROGRAMS,
    payload: id
  }
}

export const fetchPrograms = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_PROGRAMS, payload: page })
    }
    dispatch(fetchSuccess(data.programs))
  }
}

export const addProgram = (input) => async (dispatch) => {
  dispatch(request())
  newProgram.variables = { input }
  const { status, data } = await fetchItems(newProgram)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newProgram } = data
    dispatch(addSuccess(newProgram))
  }
}

export const modifyProgram = (_id, input) => async (dispatch) => {
  dispatch(request())
  updateProgram.variables = { _id, input }
  const { status, data } = await fetchItems('updateProgram', updateProgram)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
  }
}

export const eraseProgram = (_id) => async (dispatch) => {
  dispatch(request())
  removeProgram.variables = { _id }
  const { status, data } = await fetchItems('removeProgram', removeProgram)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
