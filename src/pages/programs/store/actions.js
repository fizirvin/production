import query from './queries'
import { newProgram, updateProgram, removeProgram } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_PROGRAMS = 'REQUEST_PROGRAMS'
export const REQUEST_FAILURE_PROGRAMS = 'REQUEST_FAILURE_PROGRAMS'
export const FETCH_SUCCESS_PROGRAMS = 'FETCH_SUCCESS_PROGRAMS'
export const ADD_SUCCESS_PROGRAMS = 'ADD_SUCCESS_PROGRAMS'
export const UPDATE_SUCCESS_PROGRAMS = 'UPDATE_SUCCESS_PROGRAMS'
export const REMOVE_SUCCESS_PROGRAMS = 'REMOVE_SUCCESS_PROGRAMS'

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

export const fetchPrograms = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data.programs.items))
  }
}

export const addProgram = (input) => async (dispatch) => {
  dispatch(request())
  newProgram.variables = { input }
  const { status, data } = await fetchItems('newProgram', newProgram)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(addSuccess(data))
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
