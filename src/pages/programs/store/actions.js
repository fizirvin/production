import query from './queries'
import { newProgram, updateProgram, deleteProgram } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_PROGRAMS = 'REQUEST_PROGRAMS'
export const REQUEST_FAILURE_PROGRAMS = 'REQUEST_FAILURE_PROGRAMS'
export const FETCH_SUCCESS_PROGRAMS = 'FETCH_SUCCESS_PROGRAMS'
export const ADD_SUCCESS_PROGRAMS = 'ADD_SUCCESS_PROGRAMS'
export const UPDATE_SUCCESS_PROGRAMS = 'UPDATE_SUCCESS_PROGRAMS'
export const REMOVE_SUCCESS_PROGRAMS = 'REMOVE_SUCCESS_PROGRAMS'

export const CLEAN_MESSAGE_PROGRAMS = 'CLEAN_MESSAGE_PROGRAMS'
export const PAGE_TOTAL_PROGRAMS = 'PAGE_PROGRAMS'
export const ADD_TOTAL_PROGRAMS = 'ADD_TOTAL_PROGRAMS'

export const SORT_PROGRAMS = 'SORT_PROGRAMS'

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
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newProgram.variables = { input }
    const { status, data } = await fetchItems(newProgram)

    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newProgram } = data
      dispatch(addSuccess(newProgram))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyProgram = (input) => async (dispatch) => {
  dispatch(request())

  const program = {
    machine: input.machine,
    molde: input.molde,
    model: input.model,
    time: input.time,
    cycles: input.cycles,
    capacity: input.capacity
  }
  updateProgram.variables = { _id: input._id, input: program }
  const { status, data } = await fetchItems(updateProgram)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateProgram } = data
    dispatch(updateSuccess(updateProgram))
  }
}

export const eraseProgram = (input) => async (dispatch) => {
  dispatch(request())
  deleteProgram.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteProgram)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteProgram))
  }
}
